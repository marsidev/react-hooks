import { useCallback, useEffect, useRef } from 'react'

export interface UseFocusInput {
	ref: React.RefObject<HTMLInputElement>
	focus: (options?: FocusOptions) => void
	blur: () => void
}

export const useFocusInput = (initialFocus = false): UseFocusInput => {
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

export default useFocusInput
