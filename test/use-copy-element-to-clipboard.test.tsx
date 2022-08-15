import type { RenderHookResult } from '@testing-library/react'
import React from 'react'
import { act, render, renderHook } from '@testing-library/react'
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'
import * as htmlToImage from 'html-to-image'
import { useCopyElementToClipboard } from 'lib'
import * as clipboard from '../src/utils/clipboard'

describe('useCopyElementAsBlobToClipboard()', () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let hook: RenderHookResult<any, unknown>

	const copySpy = vi
		.spyOn(clipboard, 'copyBlobToClipboard')
		.mockReturnValue(new Promise(resolve => resolve(true)))

	const toBlobSpy = vi.spyOn(htmlToImage, 'toBlob')

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	const consoleWarnSpy = vi.spyOn(global.console, 'warn').mockImplementation(() => {})

	vi.mock('html-to-image', () => {
		return {
			toBlob: vi
				.fn()
				.mockReturnValue(
					new Promise(resolve => resolve(new Blob([], { type: 'image/png' })))
				)
		}
	})

	beforeEach(() => {
		hook = renderHook(() => useCopyElementToClipboard<HTMLDivElement>())
	})

	afterAll(() => {
		vi.restoreAllMocks()
	})

	it('is defined', () => {
		expect(useCopyElementToClipboard).toBeDefined()
	})

	it('has expected default props before executing onCopy method', () => {
		const { onCopy, copiedBlob, isCopying, ref } = hook.result.current
		expect(onCopy).toBeDefined()
		expect(typeof onCopy).toBe('function')
		expect(copiedBlob).toBeNull()
		expect(isCopying).toBe(false)
		expect(ref.current).toBeNull()
	})

	it('onCopy returns false is ref is null', async () => {
		const { onCopy } = hook.result.current

		await act(async () => {
			const hasCopied = await onCopy()
			expect(hasCopied).toBe(false)
			expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
		})
	})

	it('can copy an image to the clipboard', async () => {
		const { onCopy, ref } = hook.result.current

		render(<div ref={ref} />)

		await act(async () => {
			const hasCopied = await onCopy()
			expect(hasCopied).toBe(true)
		})

		const { copiedBlob } = hook.result.current
		expect(toBlobSpy).toBeCalledTimes(1)
		expect(toBlobSpy).toBeCalledWith(ref.current, {})
		expect(copySpy).toBeCalledTimes(1)
		expect(copySpy).toBeCalledWith(new Blob([], { type: 'image/png' }))
		expect(copiedBlob).toBeDefined()
		expect(copiedBlob).toBeInstanceOf(Blob)
	})
})
