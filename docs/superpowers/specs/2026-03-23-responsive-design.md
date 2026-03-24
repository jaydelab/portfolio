# Responsive Design Spec — Portfolio 2026

> Aprovada em 2026-03-23. Desktop (≥1200px) é intocável.

## Abordagem

**Fluid + Breakpoints cirúrgicos.** Dimensões fixas convertem para unidades fluidas (`clamp()`, `%`) abaixo de 1280px. Desktop resolve nos mesmos px atuais. Responsivo é aditivo — zero regressão.

Referência visual: [huly.io em 320px](https://huly.io) — título impactante, visual presente mas reduzido, ritmo vertical generoso.

---

## Breakpoints

Derivados do conteúdo, não de frameworks.

| Breakpoint | Razão | Comportamento |
|------------|-------|---------------|
| `≥1280px` | Conteúdo de 1200px + padding cabe inteiro | Desktop original, intocado |
| `768–1279px` | 2-col grids ficam apertados | Containers fluidos, algumas cols empilham |
| `480–767px` | Telefone, tudo empilha | Single column, tipografia reduzida |
| `<480px` | Telefone estreito (320-430px) | Compressão máxima, padding mínimo |

Implementação via `@media (max-width: 1279px)` e `@media (max-width: 767px)` e `@media (max-width: 479px)`. Valores fluidos via `clamp()` cujo `max` resolve exatamente nos px atuais.

---

## Escala Tipográfica

| Token | Desktop | Mobile 320px | Implementação |
|-------|---------|-------------|---------------|
| hero | 70px / 90px lh | 36px | `clamp(36px, 8vw, 70px)` |
| h1 | 56px / 68px lh | 30px | `clamp(30px, 5.5vw, 56px)` |
| h2 | 48px / 64px lh | 28px | `clamp(28px, 4.8vw, 48px)` |
| h3 | 32px | 22px | `clamp(22px, 3.5vw, 32px)` |
| h4 | 24px | 18px | `clamp(18px, 2.8vw, 24px)` |
| body xl | 20px / 32px lh | 16px | `clamp(16px, 2.2vw, 20px)` |
| body lg | 18px / 27px lh | 15px | `clamp(15px, 2vw, 18px)` |
| body | 16px / 26px lh | 16px | Fixo — mínimo legível |
| caption | 14px | 13px | `clamp(13px, 1.5vw, 14px)` |
| badge | 13px | 13px | Fixo |

Line-heights escalam proporcionalmente. Letter-spacing mantém valores desktop.

---

## Escala de Espaçamento

| Uso | Desktop | Mobile 320px | Implementação |
|-----|---------|-------------|---------------|
| Gap entre seções (pageGap) | 150px | 48px | `clamp(48px, 12.5vw, 150px)` |
| Gap seção-a-seção (sectionGap) | 180px | 56px | `clamp(56px, 15vw, 180px)` |
| Gap interno seções | 42–52px | 24px | `clamp(24px, 4.34vw, 52px)` |
| Padding da página | 24px | 16px | `clamp(16px, 2.5vw, 24px)` |
| Gap de cards | 24px | 16px | `clamp(16px, 2.5vw, 24px)` |

---

## Stage Wrapper

**Antes:**
```
width: 1440px (inline style)
height: 12550px (inline style)
max-width: 100%
```

**Depois:**
```
width: 100%
max-width: 1440px
height: auto
margin: 0 auto
```

Inline styles de dimensão removidos. CSS class mantém `max-width: 100%` existente. Altura ditada pelo conteúdo.

---

## Adaptações por Seção

### BadgeHeader
- **Desktop**: sem mudança
- **<768px**: texto encurta para "Disponível ▾". Tap abre dropdown com âncoras (Cases, Sobre, Contato). Touch target ≥44px. Fecha ao tocar fora. Z-index mantém.

### HeroSection
- **Desktop**: sem mudança (996px, código ao lado)
- **<768px**: flex-col. Título hero com `clamp(36px, 8vw, 70px)`. Descrição full-width. Bloco de código empilha abaixo, altura reduzida (~60%), font 12px, trecho parcial visível. Slideshow image escala proporcionalmente.
- **<480px**: código pode reduzir mais. Padding interno do code block reduz.

### AboutSection
- **Desktop**: sem mudança (486px info + 690px image)
- **<768px**: flex-col-reverse. Imagem no topo, full-width, altura proporcional (~300px). Texto abaixo. Nametag e cursor escalam com o container. Label pill e heading via clamp().

### CaseStudyIntro
- **Desktop**: sem mudança (690px image + 486px text)
- **<768px**: flex-col. Texto primeiro (prioriza contexto), imagem abaixo full-width. Checklist items mantêm layout. Heading h1 via clamp().

### CaseStudyWAP
- **Desktop**: sem mudança (588px + 612px)
- **<768px**: flex-col. Texto full-width, imagem abaixo altura proporcional. Label pill adapta.

### CaseStudyCoolhunting
- **Desktop**: sem mudança (1200px, bento grid complexo)
- **<768px**: Cover full-width, altura proporcional, mask `mask-size` recalcula. Bento abaixo: helper card full-width, thermometer + rating 2-col lado a lado, graph full-width abaixo. Mantém riqueza visual.
- **<480px**: thermometer + rating podem empilhar se necessário.

### CaseStudyConnectHunt
- **Desktop**: sem mudança (1200×580)
- **<768px**: Full-width, altura proporcional (~280px). Texto overlay reposiciona (topo-esquerdo). Phone mockup escala dentro do container. Mask recalcula.

### CaseStudyPortal
- **Desktop**: sem mudança (792px + 384px)
- **<768px**: flex-col. Imagem full-width, texto abaixo.

### TestimonialSection
- **Desktop**: sem mudança (avatar blocks + 680px texto)
- **<768px**: Blocos decorativos (grid de retângulos) escondem — puramente decorativos. Avatar do reviewer inline ao lado do nome. Citação domina, full-width. Navigation via dots ou swipe.

### ONovoMercadoSection
- **Desktop**: sem mudança (510px + 588px)
- **<768px**: flex-col. Heading + label + texto full-width. Imagem principal full-width. Dois mockups mobile mantêm 2-col (cabem em 320px: ~140px cada + gap).

### HighlightsSection
- **Desktop**: sem mudança (1200×1274)
- **<768px**: Full-width, height auto (não 1274px fixo). Background image via aspect-ratio proporcional. Descrição full-width. Dock: scroll horizontal (`overflow-x: auto`, `flex-wrap: nowrap`), ícones mantêm 50px.
- Gap interno (843px entre heading e dock) → `clamp(120px, 30vw, 843px)`

### ProjectsGrid
- **Desktop**: sem mudança (bento 690+486 / 486+690)
- **<768px**: Todos os cards full-width, empilhados (flex-col). Altura dos cards: auto (não 399px fixo). Imagens internas adaptam proporcionalmente. Masks recalculam pra largura do card.

### CTASection
- **Desktop**: sem mudança (3×384px)
- **<768px**: Header full-width. Botão CTA centralizado, touch target ≥44px. Imagens empilham (flex-col). Ícones (82px → ~60px), mantêm 4-col.
- **<480px**: Ícones podem reduzir mais.

### FooterSection
- **Desktop**: sem mudança (1392px keyboard, inline-grid)
- **<768px**: Keyboard image full-width via object-cover. Heading reposiciona centro, font via clamp(). Contact info empilha vertical. Social buttons abaixo do contato. Grid → flex-col.

### Vector Background (absolute)
- **Desktop**: sem mudança
- **<768px**: `display: none` — decorativo e pesado no mobile.

---

## Decisões Globais

| Regra | Implementação |
|-------|---------------|
| Desktop intocável | `@media (max-width: 1279px)` para toda mudança responsiva |
| Touch targets | Mínimo 44×44px em elementos interativos |
| Hover | Nenhuma interação depende de hover — tudo acessível via tap |
| Imagens | `max-width: 100%; height: auto`. Masks recalculam proporcionalmente |
| Scroll | Vertical natural. Dock: scroll horizontal. Sem scroll excessivo |
| Content widths | 1200px, 996px, 792px etc. → `width: 100%` abaixo de 1280px |

---

## Validação Playwright

Screenshots comparativos a cada commit nos seguintes viewports:

| Viewport | Device Reference |
|----------|-----------------|
| 320×844 | iPhone SE / mínimo |
| 375×812 | iPhone 13 mini |
| 390×844 | iPhone 14 |
| 430×932 | iPhone 14 Pro Max |
| 768×1024 | iPad portrait |
| 1024×768 | iPad landscape |
| 1280×800 | Laptop |
| 1440×900 | Desktop baseline (regressão) |
| 1920×1080 | Ultrawide |

Método: `npx playwright screenshot --viewport-size="WxH" --full-page`

Critério: desktop 1440 deve ser byte-identical à baseline. Demais viewports: revisão visual manual.

---

## Fora de escopo (fase posterior)

- Performance (font loading, layout shifts, image optimization)
- Acessibilidade (heading hierarchy, landmarks, ARIA)
- Animações e motion
- PWA / offline
