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
| `app/App.tsx` | Wrapper raiz. Sem dimensões fixas — o layout flui responsivamente. |
| `app/generated/Portfolio2026_1_86.tsx` | Orquestrador principal. Gaps e paddings adaptativos por breakpoint. |
| `app/components/sections/` | Componentes de seção modulares com variantes desktop + mobile. |
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

## Validação Visual

- Validação principal é via **Playwright CLI** (ver seção Responsividade acima).
- **Playwright MCP é proibido neste repositório.** Use apenas **Playwright CLI** local para qualquer captura, inspeção ou validação visual.
- Viewports obrigatórios: **320px**, **390px**, **1440px**.
- Diferença perceptível no desktop: REGRESSÃO → reverta imediatamente.
- Nunca confie apenas no browser DevTools — sempre capturar screenshot real via Playwright.

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
- Cada seção aceita `{ id?, className? }` como props para controle externo (ex: `max-md:hidden` via className).
- Abstrações granulares de UI ("utils" e blocos repetitivos mistos) são PROIBIDAS a menos que a extração preserve 100% o markup exato do Figma (ex: `CheckListItem` é aceito).
- **Regra de Ouro:** Não agrupe partes só porque "são parecidas". Se o Figma gerou estruturas DOM levemente diferentes em padding, width ou classes de layout, deixe o HTML bruto. Fidelidade supera o *Don't Repeat Yourself* cego.
- Toda modificação estrutural na árvore de componentes TÊM que passar no Pixel Diff via Playwright sem tolerância.
- **Variantes mobile vivem DENTRO do mesmo componente**, não em arquivos separados. Padrão show/hide.

---

## Política de Responsividade

### Método: Design Adaptativo (show/hide)

O projeto usa **design adaptativo** — mesmos componentes, comportamentos visuais diferentes por breakpoint.
Cada seção contém dois blocos: o desktop original (intocável) e um mobile variant dedicado.

- **Desktop** (`max-md:hidden`): Bloco original do Figma, preservado pixel-perfect. **NUNCA modificar.** Fica fixo com 1440px de largura interna.
- **Scaling Dinâmico (1024px a 1440px):** O orquestrador `App.tsx` aplica `transform: scale()` para o bloco desktop em viewports menores que 1440px. As margens laterais interpolam de 120px a ~32px, garantindo legibilidade sem quebrar o layout.
- **Mobile** (`hidden max-md:flex`): Bloco novo construído a partir do Figma mobile (320px). Ocorre a transição em `max-md` (768px).

### Breakpoints (Tailwind v4)

| Token | Largura | Uso |
|-------|---------|-----|
| `sm` | 480px | — |
| `md` | 768px | **Divide mobile/desktop** |
| `lg` | 1280px | Ajustes intermediários desktop |
| `xl` | 1440px | Desktop full |
| `2xl` | 1920px | — |

Prefixo `max-md:` = aplica abaixo de 768px (mobile). Prefixo `max-lg:` = ajustes tablet/desktop médio.

### Padrão de Implementação por Seção

```tsx
export default function SomeSection({ className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      {/* ====== Desktop ====== */}
      <div className="max-md:hidden ...">
        {/* Markup desktop original — INTOCÁVEL */}
      </div>

      {/* ====== Mobile ====== */}
      <div className="hidden max-md:flex flex-col w-full mt-[62px]" data-name="SomeSection-mobile">
        {/* Markup mobile do Figma 320px */}
      </div>
    </div>
  );
}
```

### Regras de Layout Mobile

| Regra | Detalhe |
|-------|---------|
| Root padding | `max-md:px-[24px]` no orquestrador → 272px de conteúdo a 320px |
| Section gaps | `max-md:gap-0` no parent + `mt-[62px]` individual por seção mobile |
| Full-bleed | `mx-[-24px]` + `style={{ width: 'calc(100% + 48px)' }}` para escapar o padding |
| Hero escape | `mx-[-12px]` + `calc(100% + 24px)` → 296px (12px margin lateral no Figma) |
| Tipografia | Classes Figma: `figma-font-georgia`, `figma-font-geist`, `figma-font-geist-mono` |
| Responsividade interna | Cards e containers mobile devem usar `w-full`/`inset-x-0`, não larguras fixas |

### Seções com Mobile Implementado

| Seção | Status | Notas |
|-------|--------|-------|
| BadgeHeader | ✅ | `max-md:hidden` (badge aparece dentro do Hero mobile) |
| HeroSection | ✅ | Badge + título + code block mobile |
| AboutSection | ✅ | Avatar full-bleed + texto com overlap negativo |
| CaseStudyIntro | ✅ | 3 cards mobile (substitui os 4 case studies desktop) |
| CaseStudyWAP/Coolhunting/ConnectHunt/Portal | ✅ | `max-md:hidden` via className prop |
| TestimonialSection | ✅ | Card decorativo responsivo + avatar + review |
| ONovoMercadoSection | ⏳ | Pendente |
| HighlightsSection | ⏳ | Pendente |
| ProjectsGrid | ⏳ | Pendente |
| CTASection | ✅ | CTA morph section reconstruída com scroll proprietário e validação via Playwright CLI |
| FooterSection | ⏳ | Pendente |

### Validação com Playwright CLI

```bash
# Screenshot mobile 320px
npx playwright screenshot --viewport-size="320,900" --full-page http://localhost:5173 /tmp/mobile-320.png

# Screenshot de seção específica
node -e "
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 320, height: 900 } });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(1000);
  const el = await page.locator('[data-name=\"SectionName-mobile\"]');
  await el.screenshot({ path: '/tmp/section.png' });
  await browser.close();
})();
"
```

- Sempre validar em **320px** (Figma baseline) e **390px** (responsividade).
- Sempre validar **1440px** após mudanças para confirmar zero regressão desktop.
- Usar `deviceScaleFactor: 2` para inspeção de detalhes finos.

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
6. ❌ Remover assets sem provar que não são usados
7. ❌ Alterar os nomes de classes gerados pelo extrator Figma
8. ❌ Adicionar rotas, SPA routing, ou code splitting antes de ter necessidade
9. ❌ Commitar sem checagem visual
10. ❌ **Modificar o bloco desktop (`max-md:hidden`) ao criar variante mobile**
11. ❌ Adicionar classes `max-md:*` responsivas no bloco desktop — criar bloco mobile separado
12. ❌ Usar larguras fixas em px nos containers mobile — usar `w-full`/`inset-x-0` para responsividade
13. ❌ Inventar layout mobile sem referência no Figma 320px
