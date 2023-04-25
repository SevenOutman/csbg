# **c**on**s**ole.**b**ad**g**e()

Print badges in your console.

[![npm version](https://badgen.net/npm/v/csbg)](https://npm.im/csbg) [![npm downloads](https://badgen.net/npm/dm/csbg)](https://npm.im/csbg)

![Screenshot](./screenshot.png)

## Install

    npm i csbg

## Usage

Use `printBadge()` function to print a shields.io style badge in your console.

```js
import { printBadge } from "csbg"

printBadge("npm", "v1.0.0", "#007ec6")
```

Or you can install `.badge()` method on `console`.

```js
import "csbg/install"

console.badge("npm", "v1.0.0")
```

## License

MIT &copy; [Doma](https://github.com/SevenOutman)
