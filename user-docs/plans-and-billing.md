---
title: Plans and billing
description: Compare the Free, Personal and Team cloud allowances, the one-time trial, transcription billing, storage and export in IndexOne.
keywords: pricing, plans, billing, trial, ASR, storage, cancellation, export, retention
---

The cloud plans below follow catalog **2026-11-15.v1**. Buy a plan, start the trial and manage your subscription in the [web app](https://app.index-one.io/) after signing in; payment runs through Stripe Checkout. Local Mac recording, transcription, Ivy, vault tools, MCP and export remain free without a plan quota, subject to hardware limits.

## Monthly plans in PLN

| | Free | Personal | Team |
| --- | --- | --- | --- |
| Monthly price | 0 PLN | 49 PLN including tax | 75 PLN excluding tax per seat, minimum 2 |
| Basic cloud notes, editing, search, sync, reading and export | Included | Included | Included, subject to access rights |
| Cloud Ivy | One trial | 1.2 million units/month | 2.5 million units/seat/month |
| Billed cloud transcription | One trial | 5 hours/month | 10 hours/seat/month |
| Cloud storage | 1 GB | 20 GB | 50 GB × paid seats, shared |

Team starts at 150 PLN net per month. At an illustrative 23% VAT rate, this is 92.25 PLN per seat and 184.50 PLN for two. Your applicable tax can differ. The application must show seats, tax and the final total before any purchase. No annual plans, other currencies, paid add-ons or meeting bot are offered at launch.

Ivy units measure a processing budget, not raw model tokens or a guaranteed number of answers. Team splits each seat's grant into 2.25 million interactive units and 250,000 units for a shared automation pool. ASR is per seat. Rotating a seat does not reset its spent allowance. Allowance periods are calendar months in UTC; payment dates and allowance periods can differ. GB means one billion bytes.

## One explicit trial

The trial is once per verified personal account, without a card: explicitly activate 60 billed minutes of ASR and 100,000 Ivy units, valid for 30 days. Each trial recording can contain at most 30 actual minutes. Organizations, seat rotation and address changes do not grant another trial. Activation depends on trial availability.

When the trial expires or is spent, ordinary notes, editing, search, sync, reading and export remain Free within storage limits. Only new costly cloud processing needs more budget.

## Minimum transcription charge

Each distinct cloud ASR recording/job bills at least **20 minutes**, then actual duration in seconds. A 2-minute recording uses 20 minutes; a 21-minute recording uses 21. Fifteen separate 2-minute files consume all five hours of Personal.

Retries of the same job do not bill the minimum again. Deliberately reprocessing with another model is a new job requiring confirmation. Local transcription and uploading a completed transcript do not consume cloud ASR.

## Personal, organizations and permissions

A personal plan and every organization's plan have separate payers and balances. Personal does not buy an organization seat. Buying a seat does not grant access to restricted spaces. Owners authorize purchases; an administrator can assign already purchased seats without increasing the bill. Unassigned contracted seats are still paid seats. Reductions apply next period; invitations do not automatically buy seats.

Without a paid seat, members and guests can read or edit as permitted by existing access rights, but cannot start paid AI or ASR. Organization automations use their shared pool; ASR never uses that pool. On leaving an organization, access ends and its content stays with the organization, not the departing person's private account.

Up to two free organizations with five active members each share the founder's account storage allowance; creating another organization adds no storage or trial. Sponsorship transfers require explicit acceptance and enough quota. Team gives the organization its separate shared storage without copying its data.

## Retention, cancellation and export

Cloud audio defaults to 30 days. Free may choose 7, 14 or 30 days; paid plans also allow 90. Export audio before retention expires. Notes and transcripts are not deleted by billing changes. Trash lasts 30 days and counts toward storage.

Canceling preserves paid rights until the paid period ends. A failed renewal has a 14-day grace period under the billing contract. After downgrade, exceeding storage restricts new growth while reading, export and deletion remain available, with 90 days of downgrade protection. Billing does not automatically delete content. Existing accepted work and drafts must be preserved.

Purchases, invoices, the payment method and cancellation are managed in the web app, which opens Stripe Checkout and the Stripe customer portal. Stripe shows the final price with tax before you pay. No SLA is promised. For current support, use [public discussions](https://github.com/monoone-dev/index-one-landing-page/discussions) without posting personal meeting content.

## Platforms and privacy

The shipped Mac application supports a local vault without an account. Account workspaces store content in the cloud. Web uses account workspaces; native iOS availability requires its own released distribution channel. This page does not advertise an available iOS download or purchase channel.

Standard cloud content is readable by the operator for processing and is not end-to-end encrypted. Local encryption and folder locks on a Mac do not change the cloud's trust boundary. Pattern masking is not complete anonymization. See [data flow](/docs/data-flow/) and [redaction](/docs/redaction/).
