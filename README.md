# Foursales User View

Aplicação React para visualização, filtro e gerenciamento de usuários, utilizando Redux, Redux-Saga e Styled Components.

## Sumário

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Estilo e Temas](#estilo-e-temas)
- [Testes](#testes)
- [Configuração de Lint e Prettier](#configuração-de-lint-e-prettier)

---

## Visão Geral

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app) e tem como objetivo listar usuários, permitir busca, favoritar e visualizar detalhes de cada usuário.

## Instalação

```sh
yarn install
```

## Scripts Disponíveis

- `yarn start` — Inicia o servidor de desenvolvimento.
- `yarn build` — Gera o build de produção.
- `yarn test` — Executa os testes.
- `yarn eject` — Eject do Create React App.

## Estrutura de Pastas

```
src/
  components/         // Componentes reutilizáveis (Button, Flex, Loader, etc)
  pages/              // Páginas principais (Home, UserProfile)
  store/              // Redux, Sagas e Tipos
  styles/             // Temas e estilos globais
public/               // Arquivos estáticos
```

## Principais Funcionalidades

- **Listagem de Usuários:** Página inicial ([Home](src/pages/Home/index.tsx)) lista usuários vindos da API.
- **Busca:** Filtro por nome de usuário.
- **Favoritos:** Adição/remoção de usuários favoritos.
- **Detalhes:** Visualização detalhada do usuário ([UserProfile](src/pages/UserProfile/index.tsx)).
- **Persistência:** Estado gerenciado via Redux Toolkit e Redux-Saga.

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

---

## Referências

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [React Router](https://reactrouter.com/)