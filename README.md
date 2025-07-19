# Kelvi Pascoal User View

Aplicação React para visualização, filtro e gerenciamento de usuários, utilizando Redux Toolkit, Redux-Saga, Styled Components e i18n.

## 🔗 Links de Produção

- **Página Principal:** [https://kelvi-pascoal-user-view.vercel.app/](https://kelvi-pascoal-user-view.vercel.app/)
- **Storybook:** [https://kelvi-pascoal-user-view-docs.vercel.app](https://kelvi-pascoal-user-view-docs.vercel.app)

---

## Sumário

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Estilo e Temas](#estilo-e-temas)
- [Testes](#testes)
- [Configuração de Lint e Prettier](#configuração-de-lint-e-prettier)
- [Publicação](#publicação)

---

## Visão Geral

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app) e tem como objetivo listar usuários, permitir busca, favoritar e visualizar detalhes de cada usuário. O Storybook está disponível para documentação e visualização dos componentes.

## Instalação

```sh
yarn install
```

## Scripts Disponíveis

- `yarn start` — Inicia o servidor de desenvolvimento.
- `yarn build` — Gera o build de produção.
- `yarn test` — Executa os testes.
- `yarn storybook` — Inicia o Storybook local.
- `yarn build-storybook` — Gera o build do Storybook.
- `yarn eject` — Eject do Create React App.

## Estrutura de Pastas

```
src/
  components/         // Componentes reutilizáveis (Button, Flex, Loader, etc)
  pages/              // Páginas principais (Home, UserProfile)
  store/              // Redux, Sagas e Tipos
  styles/             // Temas e estilos globais
  features/           // Funcionalidades extras (FavoriteButton, TranslateButton)
public/               // Arquivos estáticos
.storybook/           // Configuração do Storybook
```

## Principais Funcionalidades

- **Listagem de Usuários:** Página inicial ([Home](src/pages/Home/index.tsx)) lista usuários vindos da API.
- **Busca:** Filtro por nome de usuário.
- **Favoritos:** Adição/remoção de usuários favoritos.
- **Detalhes:** Visualização detalhada do usuário ([UserProfile](src/pages/UserProfile/index.tsx)).
- **Persistência:** Estado gerenciado via Redux Toolkit e Redux-Saga.
- **Internacionalização:** Suporte a múltiplos idiomas via i18n.
- **Storybook:** Visualização e documentação dos componentes ([Storybook](https://user-view-storybook.vercel.app)).

## Estilo e Temas

- Utiliza [styled-components](https://styled-components.com/) para estilização.
- Tema configurado em [`theme`](src/styles/theme.ts).
- Estilos globais em [`global.ts`](src/styles/global.ts).

## Testes

- Configuração de testes com [Testing Library](https://testing-library.com/).
- Arquivo de setup: [`setupTests.ts`](src/setupTests.ts).

## Configuração de Lint e Prettier

- ESLint configurado em [`.eslintrc.js`](.eslintrc.js).
- Prettier configurado em [`.prettierrc`](.prettierrc).

## Publicação

- Deploy automático via GitHub Actions para Vercel.
- Storybook publicado separadamente em ambiente próprio.

---

## Referências

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [React Router](https://reactrouter.com/)