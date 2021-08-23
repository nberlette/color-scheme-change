
<h1 align="center">

  <code> 📦  @nberlette/color-scheme-change</code>
</h1>

Detect when a user's system color scheme has changed, allowing your site to change virtually simultaneously, making them feel right at home. Setup and implementation only takes a minute or two.  

<div align="center">
  
[![yarn add @nberlette/color-scheme-change][yarn-image]][yarn-url] [![npm install @nberlette/color-scheme-change][npm-image]][npm-url] [![Try on RunKit!][runkit-image3]][runkit-url]   
</div>

- - -

## `💿  Installation`

### [Yarn](https://yarnpkg.com) (highly recommended)

```bash
yarn add @nberlette/color-scheme-change
```

### [NPM](https://npmjs.com)

```bash
# shorthand for `npm install --save`, saves to dependencies.
npm i -S @nberlette/color-scheme-change
```

- - -   

## `Usage and Examples`

Both CommonJS `require` and ECMAscript `import` are supported.

### `🟨  ES Module (import, .mjs)`

##### _"Named" import_

```js
import { colorSchemeChange } from '@nberlette/color-scheme-change'

colorSchemeChange((theme) => console.log(`[named] color scheme: ${theme}`))
```

##### _"Aliased" import_

This is preferred over default imports, and has essentially the same effect. You can name it whatever you like.

```js
import { colorSchemeChange as onScheme } from '@nberlette/color-scheme-change'

onScheme((theme) => console.log(`[aliased] color scheme: ${theme}`))
```

> ***Note***: `@nberlette/color-scheme-change` will work with *both* default and named ES imports.
> That being said, the official ECMA specification now recommends ***named imports*** whenever possible.

##### _"Default" import_

```js
import colorSchemeChange from '@nberlette/color-scheme-change'

colorSchemeChange((theme) => console.log(`[default] color scheme: ${theme}`))
```

- - -    

### `🟩  CommonJS Module (require, .cjs)`

##### Recommended import (Object Destructuring)

```js
const { colorSchemeChange } = require('@nberlette/color-scheme-change')

colorSchemeChange((theme) => console.log(`[colorSchemeChange]: ${theme}`))
```

##### Alternative: aliased method name
```js
const { colorSchemeChange: onScheme } = require('@nberlette/color-scheme-change')

onScheme((theme) => console.log(`[onScheme] color scheme: ${theme}`))
```

##### Default import

```js
const colorSchemeChange = require('@nberlette/color-scheme-change').default

colorSchemeChange((theme) => console.log(`[colorSchemeChange]: ${theme}`))
```

- - -

## API

### `remove = colorSchemeChange(onChange)`

Listen for changes to the system color scheme in the web browser. Detect when
the system switches between Light Mode and Dark Mode.

### `onChange`

A callback function of the following form: `function(colorScheme) {}` where
`colorScheme` is either `'light'` or `'dark'`. The function is called whenever
the system enters Light Mode or Dark Mode, respectively.

### `remove`

When the returned `remove` function is called, all event listeners are cleaned
up and the `onChange` function will no longer be called when the system color
scheme changes.

- - - 

<!-- <details>
<summary><code>remove = colorSchemeChange(onChange)</code></summary>

Listen for changes to the system color scheme in the web browser. Detect when
the system switches between Light Mode and Dark Mode.
</details>

<details>
<summary><code>onChange</code></summary>

A callback function of the following interface: `function(colorScheme) {}` where
`colorScheme` is either `'light'` or `'dark'`. The function is called whenever
the system enters Light Mode or Dark Mode, respectively.

</details>

<details>
<summary><code>remove</code></summary>

When the returned `remove` function is called, all event listeners are cleaned
up and the `onChange` function will no longer be called when the system color
scheme changes.

</details> -->

<!-- - - - -->

##### © 2021 [Nicholas Berlette](https://nick.berlette.com) • [v1.0.x](https://github.com/feross/color-scheme-change) © [feross](https://feross.org) • [MIT License](https://nick.mit-license.org)

<!-- [npm-image]: https://nodei.co/npm/@nberlette/color-scheme-change.png?mini=true -->

[npm-image]: https://img.shields.io/badge/-npm%20i%20--S%20%40nberlette%2Fcolor%E2%80%90scheme%E2%80%90change-red?labelColor=565656&style=for-the-badge&logo=npm
[npm-image2]: https://img.shields.io/badge/npm%20i%20--S%20-%40nberlette%2Fcolor--scheme--change-red?style=for-the-badge&logo=npm
[yarn-image]: https://img.shields.io/badge/-yarn%20add%20%40nberlette%2Fcolor--scheme--change-9cf?labelColor=565656&logo=yarn&style=for-the-badge
[yarn-image2]: https://img.shields.io/badge/yarn%20add-%40nberlette%2Fcolor--scheme--change-9cf?labelColor=444444&logo=yarn&style=for-the-badge
[runkit-image]: https://badge.runkitcdn.com/@nberlette/color-scheme-change.svg?style=social
[runkit-image2]: https://img.shields.io/badge/try%20on%20runkit-%40nberlette%2Fcolor--scheme--change-ff69b4?style=for-the-badge&logo=runkit&logoColor=ff69b4
[runkit-image3]: https://img.shields.io/badge/Try-%20on%20RunKit-ff69b4?style=for-the-badge&logo=runkit&logoColor=ff69b4

[npm-url]: https://npmjs.org/package/@nberlette/color-scheme-change
[yarn-url]: https://yarnpkg.com/packages/@nberlette/color-scheme-change
[runkit-url]: https://npm.runkit.com/@nberlette/color-scheme-change
