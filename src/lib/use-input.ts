import { useCallback, useEffect, useRef } from 'react'

export interface UseInputResult {
	ref: React.RefObject<HTMLInputElement>
	focus: (options?: FocusOptions) => void
	blur: () => void
}

/**
 * React hook to control the focus and blur of an input element
 * @param [autoFocus=false] - boolean - Whether or not to focus the input on mount. Defaults to false.
 * @returns An object with a `ref`, `focus()`, and `blur()` properties.
 *
 * @example
 * ```jsx
 * import { useInput } from '@marsidev/react-hooks'
 * import { MyInput } from '~/components'
 * ...
 * const { ref, focus, blur } = useInput()
 * ...
 * // you can add here your logic to decide when to focus or blur the input
 * ...
 * return (
 *		<MyInput ref={ref} />
 * )
 * ```
 */
export const useInput = (autoFocus = false): UseInputResult => {
	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		autoFocus && ref.current?.focus()
	}, [ref, autoFocus])

	const focus = useCallback((opts?: FocusOptions) => {
		ref.current?.focus(opts)
	}, [ref])

	const blur = useCallback(() => {
		ref.current?.blur()
	}, [ref])

	return { ref, focus, blur }
}

export default useInput
