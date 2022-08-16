import { useCallback, useState } from 'react'
import { copyTextToClipboard } from '../utils/clipboard'

export interface UseCopyToClipboardResult {
	copiedText: string | null
	onCopy: (text: string) => Promise<boolean>
}

/**
 * React hook to copy content to clipboard when needed.
 *
 * @returns An object with a `copiedText` state and a `onCopy` function to execute the copy
 *
 * @example
 * ```jsx
 * import { useCopyToClipboard } from '@marsidev/react-hooks'
 * import { MyButton } from '~/components'
 * ...
 * const { copiedText, onCopy } = useCopyToClipboard()
 * ...
 * return (
 *		<MyButton onClick={() => onCopy('text to copy')}>
 *			Copy to clipboard
 *		</MyButton>
 * )
 * ```
 */
export const useCopyToClipboard = (): UseCopyToClipboardResult => {
	const [copiedText, setCopiedText] = useState<string | null>(null)

	const onCopy = useCallback(async (text: string) => {
		setCopiedText(null)

		if (!text) return false

		const hasCopied = await copyTextToClipboard(text)
		if (!hasCopied) return false
		setCopiedText(text)
		return true
	}, [])

	return { copiedText, onCopy }
}

export default useCopyToClipboard
