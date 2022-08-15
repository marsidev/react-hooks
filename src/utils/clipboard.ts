/**
 * Copy a text to the clipboard
 * If the browser supports the Clipboard API, use it. Otherwise, fall back to the legacy
 * `document.execCommand('copy')` method
 * @param text - The text to copy to the clipboard.
 * @returns The return value is a boolean indicating whether the copy operation was successful.
 */
export const copyTextToClipboard = async (text: string) => {
	const clipboardTextAPISupported =
		'clipboard' in navigator && 'writeText' in navigator.clipboard

	const canCopyText = !!clipboardTextAPISupported || 'execCommand' in document

	if (!canCopyText) {
		console.warn('Copy to clipboard not supported')
		return false
	}

	try {
		if (clipboardTextAPISupported) {
			await navigator.clipboard.writeText(text)
		} else {
			document.execCommand('copy', true, text)
		}
		return true
	} catch (error) {
		console.warn('Error copying text to clipboard', error)
		return false
	}
}

/**
 * Copy a blob to the clipboard, using the Clipboard API
 * @param blob - The blob to copy to the clipboard.
 * @returns The return value is a boolean indicating whether the copy operation was successful.
 */
export const copyBlobToClipboard = async (blob: Blob | null) => {
	const canCopyBlob =
		'clipboard' in navigator &&
		'write' in navigator.clipboard &&
		'ClipboardItem' in window &&
		'toBlob' in HTMLCanvasElement.prototype

	if (!blob) {
		throw new Error('There is nothing to copy')
	}

	if (!canCopyBlob) {
		throw new Error('Copy blob to clipboard not supported')
	}

	try {
		const item = new ClipboardItem({ 'image/png': blob })
		await navigator.clipboard.write([item])
		return true
	} catch (error) {
		console.warn('Error copying blob to clipboard', error)
		return false
	}
}
