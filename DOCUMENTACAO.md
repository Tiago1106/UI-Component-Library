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

- [ ] Scaffold inicial (Vite + Tailwind + Storybook + Vitest)
- [ ] Design tokens definidos
- [ ] V1: Button, Input, Badge, Avatar
- [ ] V2: Modal, Toast, Tabs, Tooltip
- [ ] V3: Card, Checkbox, Radio, Switch
- [ ] V4: Select, Dropdown Menu, Pagination, Accordion
- [ ] V5: Blocos (Sidebar+Header, Card de Login)
