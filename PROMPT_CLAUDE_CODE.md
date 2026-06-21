# Prompt Inicial — Claude Code (Sessão 0: Setup do Projeto)

Use este prompt como primeira mensagem para o Claude Code, na pasta onde o
projeto deve ser criado.

---

Quero criar um projeto de UI Component Library pessoal, para portfólio. Configure o setup completo seguindo exatamente estas especificações:

## Stack
- Vite + React + TypeScript
- Tailwind CSS
- Storybook (configurado para React + Vite + TypeScript)
- Vitest + Testing Library (@testing-library/react) para testes de interação
- npm como gerenciador de pacotes, projeto único (sem monorepo)

## Estrutura de pastas

```
src/
  components/
  tokens/
    colors.css
    typography.css
    spacing.css
  styles/
    globals.css
  lib/
    utils.ts
```

## Design Tokens

Crie os tokens como CSS Variables e integre ao Tailwind via `theme.extend` no
`tailwind.config.ts`:

- **Cores**: escala neutra `slate` (50–900), cor primária `indigo` (50–900), e
  cores semânticas `success`, `warning`, `error`, `info` (cada uma com pelo
  menos um tom base e um tom claro para background)
- **Tipografia**: fonte `Inter` com fallback para system font stack. Escala
  modular: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`
- **Espaçamento**: usar a escala padrão do Tailwind (base 4px), sem necessidade
  de token customizado
- **Border radius**: definir um token `radius-md` consistente, usado como
  padrão em todos os componentes futuros
- **Sombras**: 3 níveis — `shadow-sm`, `shadow-md`, `shadow-lg`

## Configurações adicionais

- Configure aliases de import (`@/components`, `@/lib`, `@/tokens`) no
  `tsconfig.json` e `vite.config.ts`
- Configure ESLint + Prettier com regras básicas para React + TypeScript
- Adicione os scripts no `package.json`:
  - `dev`: rodar o Vite
  - `build`: build de produção
  - `storybook`: rodar o Storybook
  - `build-storybook`: build do Storybook
  - `test`: rodar o Vitest
  - `test:watch`: rodar o Vitest em modo watch
- Crie um arquivo `README.md` inicial explicando o objetivo do projeto (biblioteca
  de componentes pessoal para portfólio) e como rodar o projeto localmente

## Validação final

Ao terminar, garanta que os seguintes comandos funcionam sem erro:
- `npm run dev`
- `npm run storybook`
- `npm run test`

Não crie nenhum componente de UI ainda (Button, Input, etc.) — esta sessão é
apenas o setup da fundação do projeto. Os componentes serão criados nas
próximas sessões.
