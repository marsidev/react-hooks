/* eslint-disable @typescript-eslint/ban-ts-comment */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { copyTextToClipboard } from '../src/utils/clipboard'

describe('copyTextToClipboard()', () => {
	const originalClipboard = { ...global.navigator.clipboard }

	beforeEach(() => {
		let clipboardData = ''
		const mockClipboard = {
			writeText: vi.fn(data => {
				clipboardData = data
			}),
			readText: vi.fn(() => {
				return clipboardData
			})
		}
		// @ts-ignore
		global.navigator.clipboard = mockClipboard
	})

	afterEach(() => {
		vi.resetAllMocks()
		// @ts-ignore
		global.navigator.clipboard = originalClipboard
	})

	it('is defined', () => {
		expect(copyTextToClipboard).toBeDefined()
	})

	it('should copy to the clipboard when executing onCopy', async () => {
		const text = 'lorem ipsum'
		const res = await copyTextToClipboard(text)
		expect(res).toBe(true)
		expect(navigator.clipboard.writeText).toBeCalledTimes(1)
		expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text)
		expect(navigator.clipboard.readText()).toBe(text)
	})
})
