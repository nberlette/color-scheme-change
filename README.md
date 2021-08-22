
# 📦 `@nberlette/color-scheme-change`

Detect when a user's system color scheme has changed, allowing your site to change virtually simultaneously, making them feel right at home.

Setup and implementatio only takes a minute or two. You can try it on RunKit if you want a sample!

- - -

### 💿 Installation [![npm install @nberlette/color-scheme-change][npm-image]][npm-url]  

--- 

<div style="width: 49%; float: left;">

```bash
yarn add @nberlette/color-scheme-change
```

</div>

<div style="margin-left: 51%;">

```bash
npm install --save @nberlette/color-scheme-change
```
  
</div>

**I highly recommend switching to [Yarn](https://yarnpkg.com) for your package management if you haven't already.**

<br clear="all">

## 🟨 ES6 Usage (browser)

```js
import { colorSchemeChange } from '@nberlette/color-scheme-change'

colorSchemeChange(theme => console.log(`User's color scheme: ${theme}`))
```


## 🟩 CommonJS Usage (Node.js)

```js
const { colorSchemeChange } = require('@nberlette/color-scheme-change')

colorSchemeChange(theme => console.log(`User's color scheme: ${theme}`))
```

## 🟪 [Try it on RunKit!][runkit-url]

[![Try @nberlette/color-scheme-change on RunKit][runkit-image]][runkit-url]

- - -

## API

<details>
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

</details>

- - -

### MIT © 2021 [Nicholas Berlette](https://berlette.com) • original by [@feross](https://feross.org)  

[npm-image]: https://nodei.co/npm/@nberlette/color-scheme-change.png?mini=true
[npm-url]: https://npmjs.org/package/@nberlette/color-scheme-change
[runkit-image]: https://badge.runkitcdn.com/@nberlette/color-scheme-change.svg
[runkit-url]: https://npm.runkit.com/@nberlette/color-scheme-change