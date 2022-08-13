/* eslint-disable @typescript-eslint/no-namespace */
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import { expect, vi } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'

/* tweak to avoid errors between vitest and @testing-library/jest-dom
  @ref: https://github.com/testing-library/jest-dom/issues/439#issuecomment-1087504347
  @ref: https://github.com/testing-library/jest-dom/issues/427#issuecomment-1110985202
*/
declare global {
	namespace Vi {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		interface JestAssertion<T = any>
			extends jest.Matchers<void, T>,
			TestingLibraryMatchers<T, void> {}
	}
}
expect.extend(matchers)

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: vi.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(), // deprecated
		removeListener: vi.fn(), // deprecated
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	}))
})
