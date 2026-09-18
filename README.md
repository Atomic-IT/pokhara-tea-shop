# Healthy Organic Teas

Marketing site for **Healthy Organic Teas** — fair-trade natural products from Pokhara, Nepal.

Built with Nuxt (section-based layout inspired by `3Dmove.pl`).

## Develop

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm check        # Biome
pnpm typeslint    # vue-tsc
pnpm slint        # Stylelint
pnpm tests        # Vitest
pnpm build
```

Husky runs the same suite on `pre-commit` / `pre-push`. GitHub Actions: `.github/workflows/nuxt.yml`.

## Content

Contact details and product list live in `app/data/content.ts`.
