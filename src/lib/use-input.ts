import { useCallback, useEffect, useRef } from 'react'

export interface UseInputResult {
	ref: React.RefObject<HTMLInputElement>
	focus: (options?: FocusOptions) => void
	blur: () => void
}

/**
 * Control the focus and blur of an input element
 * @param [initialFocus=false] - boolean - Whether or not to focus the input on mount.
 * @returns An object with a `ref`, `focus()`, and `blur()` properties.
 */
export const useInput = (initialFocus = false): UseInputResult => {
	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		initialFocus && ref.current?.focus()
	}, [ref, initialFocus])

	const focus = useCallback((opts?: FocusOptions) => {
		ref.current?.focus(opts)
	}, [ref])

	const blur = useCallback(() => {
		ref.current?.blur()
	}, [ref])

	return { ref, focus, blur }
}

export default useInput
