# rate-it

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
### Compile Sass to the correct folder
```sh
npm run sass
```

### Compile and Minify for Production

```sh
npm run build
```

### dont forget tot add the /src/config.js file it should look something like this

```js
export const _api = 'http://localhost/api';
```
### we have a database isue with uploading images to the database
### we have a little fix by setting the image column to longblob manually in the database
```sql
use rate_it;
alter table ratables
    modify image longblob not null;
```
### this must be done because laravel does not support longblob by default