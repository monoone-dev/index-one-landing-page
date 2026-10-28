import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { test } from 'node:test'

const root = new URL('../', import.meta.url)
const contentDir = new URL('i18n/content/', root)
const defaultLocale = 'en'
const pluralCategories = new Set(['zero', 'one', 'two', 'few', 'many', 'other'])

type Leaf = { path: string, value: unknown }

const declaredLocales = [...readFileSync(new URL('nuxt.config.ts', root), 'utf8').matchAll(/\bcode: '([a-z-]+)'/g)]
  .map(match => match[1]!)
const contentFiles = readdirSync(contentDir)
  .filter(name => name.endsWith('.ts') && name !== 'types.ts')
  .map(name => name.replace(/\.ts$/, ''))

const content = Object.fromEntries(await Promise.all(contentFiles.map(async code =>
  [code, (await import(new URL(`${code}.ts`, contentDir).href)).default as unknown] as const)))

const isPlural = (value: unknown): value is Record<string, string> =>
  !!value && typeof value === 'object' && !Array.isArray(value) && 'other' in value
  && Object.keys(value).every(key => pluralCategories.has(key))

function leaves(value: unknown, path = ''): Leaf[] {
  if (isPlural(value)) return [{ path, value }]
  if (Array.isArray(value)) return value.flatMap((item, index) => leaves(item, `${path}[${index}]`))
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => leaves(item, path ? `${path}.${key}` : key))
  }
  return [{ path, value }]
}

const shape = (leaf: Leaf) => `${leaf.path}: ${isPlural(leaf.value) ? 'plural' : typeof leaf.value}`
const placeholders = (text: string) => [...new Set(text.match(/\{\w+\}/g) ?? [])].sort()
const strings = (leaf: Leaf) => isPlural(leaf.value) ? Object.values(leaf.value) : [leaf.value]
const sourceLeaves = new Map(leaves(content[defaultLocale]).map(leaf => [leaf.path, leaf]))

test('every language declared in nuxt.config.ts has a content file, and no other', () => {
  assert.ok(declaredLocales.includes(defaultLocale))
  assert.deepEqual([...contentFiles].sort(), [...declaredLocales].sort())
})

for (const code of contentFiles.filter(code => code !== defaultLocale)) {
  test(`${code} has exactly the keys of ${defaultLocale}`, () => {
    const expected = [...sourceLeaves.values()].map(shape)
    const actual = leaves(content[code]).map(shape)
    assert.deepEqual(
      { missing: expected.filter(key => !actual.includes(key)), extra: actual.filter(key => !expected.includes(key)) },
      { missing: [], extra: [] }
    )
  })
}

for (const code of contentFiles) {
  test(`${code} translates every text and keeps the placeholders of ${defaultLocale}`, () => {
    for (const leaf of leaves(content[code])) {
      const source = sourceLeaves.get(leaf.path)
      const sourceText = source && (isPlural(source.value) ? source.value.other : source.value)
      for (const text of strings(leaf)) {
        if (typeof text !== 'string') continue
        assert.doesNotMatch(text.replace(/\{\w+\}/g, ''), /[{}]/, `${code} ${leaf.path} has a broken placeholder`)
        if (typeof sourceText !== 'string') continue
        if (sourceText.trim()) assert.match(text, /\S/, `${code} ${leaf.path} is empty`)
        assert.deepEqual(placeholders(text), placeholders(sourceText), `${code} ${leaf.path} placeholders`)
      }
    }
  })

  test(`${code} plurals have every form the language uses`, () => {
    const rules = new Intl.PluralRules(code)
    const allowed = new Set(rules.resolvedOptions().pluralCategories)
    const used = new Set(Array.from({ length: 1001 }, (_, n) => rules.select(n)))
    for (const leaf of leaves(content[code]).filter(leaf => isPlural(leaf.value))) {
      const forms = Object.keys(leaf.value as object)
      for (const form of forms) assert.ok(allowed.has(form as Intl.LDMLPluralRule), `${code} ${leaf.path}.${form} is not a ${code} plural form`)
      for (const form of used) assert.ok(forms.includes(form), `${code} ${leaf.path} misses the "${form}" form`)
    }
  })
}
