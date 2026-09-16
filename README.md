# Regia Rides

SEO-first Next.js website for Regia Rides, operated by Regia Mobility Group LLC.

## Local development

```bash
pnpm install
pnpm dev
```

## Hostinger staging deployment

- Domain: `staging.regiarides.com`
- Repository: `https://github.com/Jacob0693/regiarides`
- Branch: `staging`
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Start command: `pnpm start`
- Node.js: `20.9.0` or newer

Environment variables:

```text
NEXT_PUBLIC_SITE_URL=https://staging.regiarides.com
NEXT_PUBLIC_SITE_INDEXABLE=false
APP_ENV=staging
```

Keep staging blocked from search indexing. Production uses `NEXT_PUBLIC_SITE_INDEXABLE=true` only after the approved launch gate.
