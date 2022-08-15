/* eslint-disable @typescript-eslint/no-empty-interface */
import type { Options } from 'html-to-image/lib/options'
import type { RefObject } from 'react'
import { useCallback, useRef, useState } from 'react'
import { toBlob as refToBlob } from 'html-to-image'
import { copyBlobToClipboard } from '../utils/clipboard'

export type CopyElementToClipboardOptions = Options

/**
 * React hook to copy a HTML DOM element as a blob image to the clipboard
 *
 * @example
 * ```jsx
 * import { useCopyElementAsBlobToClipboard } from "@marsidev/react-hooks"
 * ...
 * const { onCopy, copiedBlob, isCopying, ref } = useCopyElementToClipboard<HTMLDivElement>()
 * ...
 * return (
 * 	<>
 *   	<MyButton onClick={onCopy} isLoading={isCopying}>Copy element 👇</MyButton>
 *   	<div ref={ref}>This is the element to be copied</div>
 * 	<>
 * )
 * ```
 */
export function useCopyElementToClipboard<T extends HTMLElement>(): {
	/**
	 * Weather the element is being copied
	 */
	isCopying: boolean
	/**
	 * Function to copy the element to the clipboard.
	 * It receive an optional `options` parameter. Check {@link https://github.com/bubkoo/html-to-image#options this} to see the available options.
	 */
	onCopy: (options?: CopyElementToClipboardOptions) => Promise<boolean>
	/**
	 * The latest blob of the element that has being copied
	 */
	copiedBlob: Blob | null
	/**
	 * The reference to a DOM element to copy
	 */
	ref: RefObject<T>
} {
	const [isCopying, setIsCopying] = useState(false)
	const [copiedBlob, setCopiedBlob] = useState<Blob | null>(null)
	const ref = useRef<T>(null)

	const onCopy = useCallback(
		async (opts: CopyElementToClipboardOptions = {}) => {
			setCopiedBlob(null)

			if (ref.current === null) {
				console.warn('There is no element to copy')
				return false
			}

			setIsCopying(true)
			const blob = await refToBlob(ref.current, opts)
			const hasCopied = await copyBlobToClipboard(blob)
			hasCopied && setCopiedBlob(blob)
			setIsCopying(false)
			return hasCopied
		},
		[ref]
	)

	return { isCopying, onCopy, copiedBlob, ref }
}

export default useCopyElementToClipboard
