# Runtime Rules

## Manter
- `index.html`
- `src/main.tsx`
- `app/App.tsx`
- `app/generated/`
- `styles/`
- `public/visual-ir-assets/` usados por `app/generated/Portfolio2026_1_86.tsx`
- `package.json`
- `pnpm-lock.yaml`
- `vite.config.ts`

## Arquivar
- artefatos de extração do Figma
- previews, screenshots e dumps locais
- `assets/` bruto da extração
- outputs temporários de Playwright
- assets públicos não referenciados pelo runtime

## Regra
- o runtime canônico hoje é `index.html -> src/main.tsx -> app/App.tsx -> app/generated/Portfolio2026_1_86.tsx`
- qualquer arquivo fora desse fluxo só fica na raiz se tiver função operacional clara
