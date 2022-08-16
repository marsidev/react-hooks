# @marsidev/react-hooks [![npm][npm-badge]][npm]
A collection of common React hooks. Made with TypeScript. 

Bootstraped with [antfu/starter-ts]. 

Inspired by [usehooks-ts], [@restart/hooks], and [@chakra-ui/hooks].

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
```jsx
import { useScrollY } from '@marsidev/react-hooks'
import { Header, Footer, ScrollToTop } from '~/components'

export const Layout = ({ children }) => {
  const { offsetPassed } = useScrollY(400)

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      {offsetPassed && <ScrollToTop />}
    </div>
  )
}
```

## Available Hooks
- `useCopyElementToClipboard`
- `useCopyToClipboard`
- `useInput`
- `useRendered`
- `useSafeLayoutEffect`
- `useScrollY`
- `useWindowSize`

[npm-badge]: https://img.shields.io/npm/v/@marsidev/react-hooks.svg
[npm]: https://www.npmjs.com/package/@marsidev/react-hooks
[antfu/starter-ts]: https://github.com/antfu/starter-ts
[usehooks-ts]: https://usehooks-ts.com
[@restart/hooks]: https://www.npmjs.com/package/@restart/hooks
[@chakra-ui/hooks]: https://github.com/chakra-ui/chakra-ui/tree/main/packages/hooks
