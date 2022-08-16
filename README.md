<h1 align="center">
  <p align="center">@marsidev/react-hooks</p>
</h1>

<p align="center">
	<a href="https://www.npmjs.com/package/@marsidev/react-hooks"><img src="https://img.shields.io/npm/v/@marsidev/react-hooks.svg?style=flat" alt="npm version"></a>
  <a href="https://github.com/marsidev/react-hooks/actions/workflows/ci.yaml"><img src="https://github.com/marsidev/react-hooks/actions/workflows/ci.yaml/badge.svg" alt="GitHub Actions status"></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"></a>
  <a href="https://github.com/vitest-dev/vitest"><img src="https://img.shields.io/badge/tested_with-vitest-edd532.svg" alt="Tested with Vitest"></a>
  <a href="https://meercode.io/marsidev/react-hooks"><img src="https://meercode.io/badge/marsidev/react-hooks?type=ci-score" alt="CI Score"></a>
	<a href="https://twitter.com/marsigliacr"><img src="https://img.shields.io/twitter/follow/marsigliacr.svg?style=social" alt="Twitter Follow" /></a>
</p>

## Introduction

This is a collection of common React Hooks that I use in my React projects.

Bootstraped with [antfu/starter-ts]. 

Inspired by [usehooks-ts], [@restart/hooks], and [@chakra-ui/hooks].

## Installation
- Using npm
  ```bash
  npm i @marsidev/react-hooks
  ```

- Using pnpm
  ```bash
  pnpm add @marsidev/react-hooks
  ```

- Using yarn
  ```bash
  yarn add @marsidev/react-hooks
  ```

## Example
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

[antfu/starter-ts]: https://github.com/antfu/starter-ts
[usehooks-ts]: https://usehooks-ts.com
[@restart/hooks]: https://www.npmjs.com/package/@restart/hooks
[@chakra-ui/hooks]: https://github.com/chakra-ui/chakra-ui/tree/main/packages/hooks
