// TODO: A test for this hook is missing.
import { useCallback, useEffect, useState } from 'react'

interface WindowSize {
	width: number | null | undefined
	height: number | null | undefined
}

/**
 * React hook to manage the dimensions of the current window.
 * @returns An object with current `width` and `height` of the window.
 * @example
 * ```jsx
 * import { useWindowSize } from '@marsidev/react-hooks'
 * import { useEffect } from 'react'
 * import useStore from '~/store'
 * ...
 * const windowSize = useWindowSize()
 * const mobileMenuIsOpen = useStore(s => s.mobileMenuIsOpen)
 * const closeMobileMenu = useStore(s => s.closeMobileMenu)
 * ...
 * // auto close the mobile menu when the window is increased
 * useEffect(() => {
 *   if (mobileMenuIsOpen && windowSize.width && windowSize.width > 600) {
 *     closeMobileMenu()
 *   }
 * }, [windowSize.width, mobileMenuIsOpen])
 * ```
 */
export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		width: undefined,
		height: undefined
	})

	const handleResize = useCallback(() => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight
		})
	}, [])

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

export default useWindowSize
