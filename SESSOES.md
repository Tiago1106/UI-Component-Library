# Plano de Sessões — UI Component Library

Este arquivo organiza como vamos trabalhar, sessão por sessão. Cada sessão tem
um objetivo claro e um entregável. A ideia é dar pra fechar uma sessão, comitar,
e continuar depois sem perder o fio.

## Como vamos trabalhar

- Cada sessão foca em **uma entrega fechada** (ex: scaffold, ou um lote de componentes)
- Ao final de cada sessão: commit + Storybook atualizado + testes passando
- Componentes seguem sempre o mesmo "molde": `Componente.tsx`, `.stories.tsx`, `.test.tsx`, `index.ts`
- Tokens de design são definidos antes do V1 e só ajustados depois (não recriados)
- Cada versão (V1, V2...) é uma branch ou um conjunto de commits agrupados

## Sessões

### Sessão 0 — Setup do Projeto
- Scaffold Vite + React + TypeScript
- Configurar Tailwind CSS (v4)
- Configurar Storybook
- Configurar Vitest + Testing Library
- Criar estrutura de pastas (`components/`, `tokens/`, `styles/`, `lib/`)
- Definir e implementar design tokens (cores, tipografia, espaçamento, radius, sombras)
- Configurar Husky (pre-commit) + coverage gate por arquivo (90% em `src/components`, `src/lib`, `src/hooks`)
- **Entregável**: projeto rodando (`npm run dev`, `npm run storybook`, `npm run test`) ✅

### Sessão 1 — V1: Fundamentos
- Componentes: `Button`, `Input`, `Badge`, `Avatar`
- Variantes, tamanhos e estados de cada um
- Stories cobrindo todas as variantes
- Testes de interação básicos (clique, digitação, estados disabled)
- Convenção adotada: variantes/tamanhos via objetos JS (`Record<Variant, string>`) + `cn()` — sem `cva` ou libs de variantes (repetir em V2-V5)
- **Entregável**: V1 completo, documentado no Storybook ✅

### Sessão 2 — V2: Interação e Overlay
- Componentes: `Modal`, `Toast`, `Tabs`, `Tooltip`
- Foco em acessibilidade: navegação por teclado, ESC para fechar, foco preso (focus trap) no Modal, ARIA roles
- Stories com exemplos de uso real
- Testes de interação (abrir/fechar, navegação por teclado)
- **Entregável**: V2 completo, documentado no Storybook

### Sessão 3 — V3: Formulários e Composição
- Componentes: `Card`, `Checkbox`, `Radio`, `Switch`
- Integração entre eles (ex: Card com formulário dentro)
- Stories e testes de interação
- **Entregável**: V3 completo, documentado no Storybook

### Sessão 4 — V4: Componentes Complexos
- Componentes: `Select`, `Dropdown Menu`, `Pagination`, `Accordion`
- Foco em gerenciamento de estado mais elaborado (abertura/fechamento, seleção múltipla, navegação)
- Stories e testes de interação
- **Entregável**: V4 completo, documentado no Storybook

### Sessão 5 — V5: Blocos (Composição Real)
- Bloco 1: Sidebar + Header (layout de aplicação)
- Bloco 2: Card de Login (Card + Input + Button + validação simples)
- Esses blocos usam exclusivamente os componentes já criados nas versões anteriores
- **Entregável**: dois blocos documentados no Storybook, mostrando os átomos em produção

### Sessão 6 — Polimento e Portfólio
- Revisão geral de acessibilidade e consistência visual
- README do repositório com prints/gifs
- Deploy do Storybook (ex: Chromatic, Vercel ou GitHub Pages)
- Ajustes finais de documentação

## Convenção de Commits (sugestão)

```
feat(button): add Button component with variants and tests
feat(modal): add focus trap and ESC handling
docs(storybook): add stories for Avatar component
chore(setup): configure tailwind and design tokens
```

## Observação

Esse plano é um guia, não uma camisa de força. Se em alguma sessão quisermos
mudar a ordem ou adicionar/remover componentes, ajustamos aqui mesmo.
