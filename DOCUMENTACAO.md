# UI Component Library — Documentação do Projeto

## Visão Geral

Biblioteca de componentes de UI pessoal, construída para portfólio. Demonstra
habilidades de design system, arquitetura de componentes, acessibilidade e
documentação técnica — diferenciando-se de projetos de integração de API.

## Objetivo

- Construir um conjunto de componentes reutilizáveis, acessíveis e bem documentados
- Documentar cada componente no Storybook (props, variantes, estados, exemplos de uso)
- Cobrir os componentes com testes de interação (Vitest + Testing Library)
- Evoluir de átomos simples até composições reais (blocos de layout)

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Build | Vite |
| Linguagem | TypeScript |
| UI Library | React |
| Estilização | Tailwind CSS + Design Tokens (CSS Variables) |
| Documentação | Storybook |
| Testes | Vitest + Testing Library |
| Gerenciador de pacotes | npm |
| Estrutura | Projeto único (não monorepo) |

## Design Tokens

### Cores
- Escala neutra: `slate` (50–900)
- Cor primária: indigo (substituível facilmente)
- Cores semânticas: `success`, `warning`, `error`, `info`

### Tipografia
- Fonte: Inter (fallback: system font stack)
- Escala modular: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`

### Espaçamento
- Escala base 4px (padrão Tailwind)

### Outros
- Border radius: padrão `md` consistente
- Sombras: 3 níveis (`sm`, `md`, `lg`)

> Tokens são definidos como CSS Variables no arquivo global de estilos, e
> consumidos via Tailwind (extend do theme), facilitando troca de tema futura
> (ex: dark mode).

> **Nota (Tailwind v4):** o projeto usa Tailwind v4, que é CSS-first
> (`@import "tailwindcss"` + `@theme`, sem exigir `tailwind.config.js`). Para
> manter o `tailwind.config.ts` com `theme.extend` mapeando os tokens acima,
> ele é carregado via `@config "../../tailwind.config.ts"` dentro de
> `src/styles/globals.css`.

## Gate de Qualidade (Husky + Coverage)

- Hook de pre-commit (Husky) roda `npm run test:coverage` antes de qualquer commit
- Threshold de coverage **por arquivo** (`perFile: true`, configurado em `vite.config.ts`) para tudo em `src/components`, `src/lib` e `src/hooks`: 90% em lines/functions/branches, no máximo 15 statements não cobertos por arquivo
- Na prática: nenhum componente, util ou hook novo pode ser commitado sem teste — cobre todos os branches condicionais, não só o caminho feliz
- Padrão de variantes/tamanhos dos componentes: objetos JS simples (`Record<Variant, string>`) combinados com o helper `cn()` (`src/lib/utils.ts`, clsx + tailwind-merge) — sem `cva` ou libs de variantes

## Convenções de API (Button e Input)

- **Button**: prop `iconOnly` renderiza o botão em formato quadrado, exibindo só os `children` (ícone). Exige `aria-label` no consumidor, já que não há texto visível.
- **Input**: duas props para conteúdo à direita do campo, com APIs separadas por intenção:
  - `icon` — conteúdo puramente decorativo (ex: ícone de busca). Recebe `aria-hidden`, não é focável.
  - `action` — elemento interativo (ex: botão de mostrar/ocultar senha). Não recebe `aria-hidden`; tem precedência sobre `icon` se ambos forem passados.
- **PasswordInput** (`src/components/Input/PasswordInput.tsx`): composição sobre `Input`, usa `action` internamente para o botão de toggle de visibilidade (`type="password" | "text"`), com `aria-label` dinâmico ("Mostrar senha" / "Ocultar senha").

## Estrutura de Pastas (proposta)

```
src/
  components/
    Button/
      Button.tsx
      Button.stories.tsx
      Button.test.tsx
      index.ts
    Input/
      ...
  tokens/
    colors.css
    typography.css
    spacing.css
  styles/
    globals.css
  lib/
    utils.ts
```

## Roadmap de Componentes

| Versão | Componentes | Foco |
|---|---|---|
| V1 | Button, Input, Badge, Avatar | Fundamentos: variantes, tamanhos, estados |
| V2 | Modal, Toast, Tabs, Tooltip | Interação, overlay, acessibilidade (foco, ESC, ARIA) |
| V3 | Card, Checkbox, Radio, Switch | Composição e formulários |
| V4 | Select, Dropdown Menu, Pagination, Accordion | Componentes complexos de estado |
| V5 | Bloco Sidebar + Header, Bloco Card de Login | Composição real (átomos → organismos) |

## Critérios de Qualidade por Componente

Cada componente, ao ser finalizado, deve ter:

- [ ] Tipagem TypeScript completa (props documentadas)
- [ ] Variantes e tamanhos cobertos (quando aplicável)
- [ ] Estados: default, hover, focus, disabled, loading/error (quando aplicável)
- [ ] Acessibilidade: ARIA labels, navegação por teclado, contraste
- [ ] Story no Storybook com todos os estados/variantes documentados
- [ ] Teste de interação cobrindo o comportamento principal
- [ ] Exportado no índice da biblioteca

## Status do Projeto

- [x] Scaffold inicial (Vite + Tailwind + Storybook + Vitest)
- [x] Design tokens definidos
- [x] V1: Button, Input, Badge, Avatar
- [ ] V2: Modal, Toast, Tabs, Tooltip
- [ ] V3: Card, Checkbox, Radio, Switch
- [ ] V4: Select, Dropdown Menu, Pagination, Accordion
- [ ] V5: Blocos (Sidebar+Header, Card de Login)
