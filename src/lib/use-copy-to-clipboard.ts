import { useCallback, useState } from 'react'
import { copyTextToClipboard } from '../utils/clipboard'

export interface UseCopyToClipboardResult {
	copiedText: string | null
	onCopy: (text: string) => Promise<boolean>
}

/**
 * React hook to copy content to clipboard when needed.
 *
 * @returns an object with a `copiedText` state and a `onCopy` function to execute the copy
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
