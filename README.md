# `vite-ts-starter`

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/wtchnm/Vitamin/blob/main/LICENSE)

This is a boilerplate build with Vite, TypeScript, Vitest, Eslint and Prettier, Husky and lint-staged.

## Features

- [Vite](https://vitejs.dev) and [TypeScript](https://www.typescriptlang.org) and [absolute imports](https://github.com/aleclarson/vite-tsconfig-paths).

- Use [ESLint](https://eslint.org) and [Prettier](https://prettier.io) on VSCode and before you commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- Write unit and integration tests with [Vitest](https://vitest.dev/).

## Getting started

Use [degit](https://github.com/Rich-Harris/degit) to clone to your machine with an empty git history:

```
npx degit abetoots/vite-ts-starter#main my-app
```

Then, install the dependencies:

```
pnpm install
```

## Before you start coding

- [ ] Modify or delete the `LICENSE` file.
- [ ] Change the `name` field in package.json.

## Committing your code using `commitizen`

```
npm run commit
```

## Optional

1. If publishing to npm

   - remove private:true
   - add exports field to package.json
   - specify your peer dependencies

2. If you to want to add eslint to Vite dev server and output logs to console
   - add `-D @nabla/vite-plugin-eslint`
