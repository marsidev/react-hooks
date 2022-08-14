export const isBrowser = () => {
	return Boolean(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	)
}
