# @nberlette/color-scheme-change 

## Installation with Yarn (recommended)

```sh
yarn add @nberlette/color-scheme-change
```

## [![npm][npm-image]][npm-url]  

```sh
npm install --save @nberlette/color-scheme-change
```

## Usage

### ES6

```js
import { colorSchemeChange } from '@nberlette/color-scheme-change'

colorSchemeChange((colorScheme) => {
  console.log(`Entering ${colorScheme} mode`)
})
```

### CommonJS

```js
const { colorSchemeChange } = require('@nberlette/color-scheme-change')

colorSchemeChange((colorScheme) => {
  console.log(`Detected ${colorScheme} mode... Now modify some CSS?`)
})
```

## API

### `remove = colorSchemeChange(onChange)`

Listen for changes to the system color scheme in the web browser. Detect when
the system switches between Light Mode and Dark Mode.

#### `onChange`

A callback function of the following interface: `function(colorScheme) {}` where
`colorScheme` is either `'light'` or `'dark'`. The function is called whenever
the system enters Light Mode or Dark Mode, respectively.

#### `remove`

When the returned `remove` function is called, all event listeners are cleaned
up and the `onChange` function will no longer be called when the system color
scheme changes.

## License

MIT. Copyright (c) [Nicholas Berlette](https://berlette.com). Original copyright (c) [Feross Aboukhadijeh](https://feross.org).

[npm-image]: https://nodei.co/npm/@nberlette/color-scheme-change.png?mini=true
[npm-url]: https://npmjs.org/package/@nberlette/color-scheme-change

