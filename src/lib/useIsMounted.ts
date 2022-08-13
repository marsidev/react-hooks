import { useCallback, useEffect, useRef } from 'react'

/**
 * Check if a component is mounted
 * @returns returns a method to check if a component is mounted
 */
export const useIsMounted = () => {
	const isMounted = useRef(false)

	useEffect(() => {
		isMounted.current = true

		return () => {
			isMounted.current = false
		}
	}, [])

	return useCallback(() => isMounted.current, [])
}

export default useIsMounted
