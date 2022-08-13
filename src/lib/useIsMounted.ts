import { useEffect, useRef } from 'react'

/**
 * Check if a component is mounted
 * @returns returns a mutable ref object (from `useRef`) whose `.current` property is a boolean which is true if the component is mounted and false if it is not
 */
export const useIsMounted = () => {
	const isMounted = useRef(false)

	useEffect(() => {
		isMounted.current = true

		return () => {
			isMounted.current = false
		}
	}, [])

	return isMounted
}

export default useIsMounted
