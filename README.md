# UI Component Library

Biblioteca de componentes UI pessoal, construída para portfólio. Demonstra
habilidades de design system, arquitetura de componentes, acessibilidade e
documentação técnica.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4, com design tokens próprios (CSS Variables) integrados via `theme.extend`
- [Storybook](https://storybook.js.org/) para documentação visual dos componentes
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para testes de interação

## Estrutura

```
src/
  components/   # componentes da biblioteca (vazio nesta sessão)
  tokens/       # design tokens como CSS Variables (cores, tipografia, spacing/radius/shadow)
  styles/       # globals.css — importa o Tailwind e os tokens
  lib/          # utilitários compartilhados (ex: cn())
```

## Como rodar localmente

```bash
npm install

npm run dev              # app Vite em modo dev
npm run storybook        # Storybook em http://localhost:6006
npm run test             # roda os testes uma vez
npm run test:watch       # roda os testes em modo watch

npm run build             # build de produção do app
npm run build-storybook   # build estático do Storybook
```

## Status

Sessão 0 — setup do projeto (Vite, Tailwind, Storybook, Vitest, design tokens).
Os componentes (Button, Input, Badge, Avatar, etc.) serão adicionados nas
próximas sessões. Veja `SESSOES.md` e `DOCUMENTACAO.md` para o roadmap completo.
