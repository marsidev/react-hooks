/* eslint-disable @typescript-eslint/ban-ts-comment */
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { RenderHookResult, act, renderHook } from '@testing-library/react'
import { UseCopyToClipboardResult, useCopyToClipboard } from 'lib'
import * as clipboard from '../src/utils/clipboard'

describe('useCopyToClipboard()', () => {
	let hook: RenderHookResult<UseCopyToClipboardResult, unknown>
	const textToCopy = 'lorem ipsum'

	const copyMockFn = vi
		.spyOn(clipboard, 'copyTextToClipboard')
		.mockReturnValue(new Promise(resolve => resolve(true)))

	beforeEach(() => {
		hook = renderHook(() => useCopyToClipboard())
	})

	afterAll(() => {
		vi.restoreAllMocks()
	})

	it('is defined', () => {
		expect(useCopyToClipboard).toBeDefined()
	})

	it('copiedText is null before onCopy is executed', async () => {
		const { copiedText: copiedBefore } = hook.result.current
		expect(copiedBefore).toBeNull()
	})

	it('onCopy returns false is no valid string is provided', async () => {
		const { onCopy } = hook.result.current

		await act(async () => {
			// @ts-ignore
			const hasCopied = await onCopy()
			expect(hasCopied).toBe(false)
		})

		await act(async () => {
			const hasCopied = await onCopy('')
			expect(hasCopied).toBe(false)
		})
	})

	it('can copy text to the clipboard', async () => {
		const { onCopy } = hook.result.current

		await act(async () => {
			const hasCopied = await onCopy(textToCopy)
			expect(hasCopied).toBe(true)
		})

		const { copiedText } = hook.result.current
		expect(copyMockFn).toBeCalledTimes(1)
		expect(copyMockFn).toBeCalledWith(textToCopy)
		expect(copiedText).toBe(textToCopy)
	})
})
