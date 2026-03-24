# AGENTS.md — Contexto Absoluto do Projeto

> **Qualquer agente de IA que trabalhar neste repositório DEVE ler este arquivo antes de tocar em qualquer código.**

---

## Visão Geral

Site portfolio pessoal de Victor, designer de produto com ~9 anos de experiência.
O site foi extraído do Figma via CLI e depois ajustado manualmente (vibecoding).
O estado visual atual está correto e é a baseline viva.

- **Figma (fonte de verdade):** https://www.figma.com/design/SgQ3izKHzGoeX9CHStF6QT/Portfolio-2026?node-id=1-86&m=dev
- **Repositório:** https://github.com/jaydelab/portfolio
- **Stack:** Vite 6 + React 18 + TailwindCSS 4 + TypeScript leve
- **Idioma do site:** PT-BR

---

## Runtime Canônico

```
index.html → src/main.tsx → app/App.tsx → app/generated/Portfolio2026_1_86.tsx (Orquestrador) → app/components/sections/*.tsx
```

| Arquivo | Função |
|---------|--------|
| `index.html` | Shell HTML, `<div id="root">`, carrega `src/main.tsx` |
| `src/main.tsx` | Entry point React. SEM StrictMode (intencional). |
| `app/App.tsx` | Wrapper com `.visual-ir-page` + `.visual-ir-stage` (1440×12550). |
| `app/generated/Portfolio2026_1_86.tsx` | Orquestrador principal. Contém as seções mas delega a UI. |
| `app/components/sections/` | Componentes de seção modulares, contendo markup 1:1 do Figma. |
| `styles/index.css` | Importa fonts.css, tailwind.css, theme.css |
| `styles/visual-ir.css` | Reset, stage layout, font classes, mask utilities |
| `styles/fonts.css` | Google Fonts (Geist, Geist Mono, Halant, Inter, Newsreader, Noto Sans) |
| `app/lib/tokens.ts` | Variáveis globais de Tema (cores, sombras, tipografia, bordas) |
| `public/visual-ir-assets/` | Arquivos de imagem estáticos (WebP otimizado + SVGs vetoriais). |

---

## Regras de Fidelidade Visual

1. **O resultado visual atual É a baseline.** Não redesenhe, não "melhore", não invente.
2. **Figma é a fonte de verdade.** Se houver conflito entre Figma e runtime, investigue antes de mudar.
3. **Zero tolerância a regressão visual.** Qualquer alteração deve ser comparada pixel a pixel com a baseline.
4. **Não reintroduza `React.StrictMode`** sem prova forte de necessidade — causa double-mount e "pulo" no reload.
5. **Não aplique refactor cosmético** antes de ter cobertura visual.

---

## Validação com Playwright CLI

```bash
# Capturar baseline
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs

# Capturar estado atual para comparação
DEV_URL=http://localhost:5173 node tests/visual-baseline/capture.mjs --update

# Comparar byte a byte
node tests/visual-baseline/compare.mjs
```

- Viewports: desktop 1440px e mobile 390px
- Screenshots são full-page
- Diferença aceitável: < 0.1% em bytes (variância de compressão PNG)
- Diferença perceptível: REGRESSÃO → reverta imediatamente

---

## Política de Commits

- Commits pequenos, reversíveis e auditáveis
- Um commit por mudança lógica (não misture refactor com correção)
- Message format: `tipo: descrição curta` (ex: `fix: remove ghost layer node 1:505`)
- Nunca commite sem verificar regressão visual

---

## Política de Assets

| Item | Regra |
|------|-------|
| Localização | `public/visual-ir-assets/` |
| Nomes | Nomes estritamente semânticos em kebab-case (ex: `avatar.webp`, `hero-background.webp`) |
| Formato Raster | Exclusivamente **WebP** (qualidade 90). Reduz First Contentful Paint. |
| Formato Vetor | **SVG** puro para iconografia e ilustrações sem perda de qualidade. |
| Imagens novas | Só adicione imagem se houver nova funcionalidade ou bloco do Figma. WebP obrigatório. |
| Remoção | Só após provar que não é referenciado em toda a árvore do repositório. |

---

## Política de Componentização

- O projeto **já foi componentizado modularmente** por seções (`app/components/sections/`).
- Abstrações granulares de UI ("utils" e blocos repetitivos mistos) são PROIBIDAS a menos que a extração preserve 100% o markup exato do Figma (ex: `CheckListItem` é aceito, enquanto o antigo `ProjectCard` diferia no DOM em cada variação).
- **Regra de Ouro:** Não agrupe partes só porque "são parecidas". Se o Figma gerou estruturas DOM levemente diferentes em padding, width ou classes de layout, deixe o HTML bruto. Fidelidade supera o *Don't Repeat Yourself* cego.
- Toda modificação estrutural na árvore de componentes TÊM que passar no Pixel Diff nativo do Playwright/Pixelview sem tolerância.

---

## Política de Responsividade

- **Estado atual:** desktop-only (1440px fixo com `max-width: 100%`).
- Mobile rendering existe mas não é otimizado.
- Quando implementar responsividade:
  - Mobile-first, breakpoints alinhados com Figma.
  - Testar cada breakpoint com Playwright.
  - Não usar `@media` ad-hoc sem referência no design.

---

## Política de Acessibilidade

- `lang="pt-BR"` já definido no `index.html`.
- Imagens decorativas já têm `alt=""`.
- Não adicione `alt` descritivo em elementos puramente visuais do Figma.
- Quando adicionar interação (links, botões), garantir:
  - Foco visível
  - Contraste WCAG AA
  - Labels acessíveis

---

## Motion Readiness

- Não há animações implementadas ainda.
- Quando implementar:
  - Respeitar `prefers-reduced-motion`
  - Usar apenas `transform` e `opacity` para performance
  - Não animar layout properties (width, height, top, left)
  - Manter durações curtas (150-300ms para UI, até 500ms para transições)

---

## Política de Copy e Estados

- Idioma: PT-BR humano, inteligente, direto.
- Sem jargão de SaaS ("orchestrate", "empower", "leverage").
- Sem CTA genérico ("Saiba mais", "Clique aqui").
- Preservar copy atual a menos que correção factual ou de acessibilidade exija mudança.
- Para novos textos: tom pessoal, claro, sem robotismo.

---

## O Que Nunca Fazer

1. ❌ Redesenhar seções sem referência no Figma
2. ❌ Trocar Tailwind por CSS modules ou vice-versa
3. ❌ Instalar bibliotecas de componentes UI (Radix, Shadcn, MUI)
4. ❌ Reintroduzir `React.StrictMode` sem prova de necessidade
5. ❌ Aplicar mutações imperativas no DOM pós-paint
6. ❌ Refatorar o TSX monolítico em massa
7. ❌ Remover assets sem provar que não são usados
8. ❌ Alterar os nomes de classes gerados pelo extrator Figma
9. ❌ Adicionar rotas, SPA routing, ou code splitting antes de ter necessidade
10. ❌ Commitar sem checagem visual
