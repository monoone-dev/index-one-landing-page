export type Skin = 'studio' | 'paper' | 'minimalist'

export const SKIN_STORAGE_KEY = 'index-one-skin'

export const skins: { value: Skin }[] = [{ value: 'studio' }, { value: 'paper' }, { value: 'minimalist' }]

export const skinBootScript = `(function(){try{var s=localStorage.getItem('${SKIN_STORAGE_KEY}');if(s==='paper'||s==='minimalist')document.documentElement.setAttribute('data-skin',s)}catch(e){}})()`

const isSkin = (value: unknown): value is Skin => skins.some(s => s.value === value)

export function useSkin() {
  const skin = useState<Skin>('skin', () => 'studio')

  onMounted(() => {
    const current = document.documentElement.getAttribute('data-skin')
    skin.value = isSkin(current) ? current : 'studio'
  })

  function setSkin(next: Skin) {
    skin.value = next
    const root = document.documentElement
    if (next === 'studio') root.removeAttribute('data-skin')
    else root.setAttribute('data-skin', next)
    try {
      localStorage.setItem(SKIN_STORAGE_KEY, next)
    }
    catch {}
  }

  return { skin: readonly(skin), setSkin }
}
