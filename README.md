# @marsidev/react-hooks [![npm][npm-badge]][npm]
A collection of common React hooks. Made with TypeScript. Bootstraped with [antfu/starter-ts]. Inspired by [usehooks-ts], and [@restart/hooks].

## Install
- Using npm
	```bash
	npm i @marsidev/react-hooks
	```

- Using yarn
	```bash
	yarn add @marsidev/react-hooks
	```

- Using pnpm
	```bash
	pnpm add @marsidev/react-hooks
	```

## Usage
```js
import { useScrollY } from '@marsidev/react-hooks'
const { offsetPassed, scrollDirection, scrollPosition } = useScrollY(300)
```

## Available Hooks
- `useScrollY`
- `useIsMounted`
- `useInput`
	
[npm-badge]: https://img.shields.io/npm/v/@marsidev/react-hooks.svg
[npm]: https://www.npmjs.com/package/@marsidev/react-hooks
[antfu/starter-ts]: https://github.com/antfu/starter-ts
[usehooks-ts]: https://usehooks-ts.com
[@restart/hooks]: https://www.npmjs.com/package/@restart/hooks
