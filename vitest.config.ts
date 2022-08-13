import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
	test: {
		globals: false,
		reporters: 'verbose',
		environment: 'jsdom',
		setupFiles: [r('test/helpers/setup.ts')]
	},
	resolve: {
		alias: {
			'~': r('./src/'),
			lib: r('./src/lib')
		}
	},
	root: r('./test')
})
