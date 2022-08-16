// TODO: A test for this hook is missing.
import { useCallback, useEffect, useState } from 'react'

export type ScrollYDirection = 'up' | 'down' | null
export const DEFAULT_Y_OFFSET = 0

/**
 * React hook to manage the vertical scroll position and direction of the window
 * @param [offset] - The number of pixels from the top of the page needed to scroll past
 * before the offsetPassed value is set to true. Default is 0.
 * @returns An object with `scrollPosition`, `offsetPassed`, and `scrollDirection` properties.
 * @example
 * ```jsx
 * import { useScrollY } from '@marsidev/react-hooks'
 * import { ScrollToTop } from '~/components'
 * ...
 * const { scrollPosition, offsetPassed, scrollDirection } = useScrollY(400)
 * ...
 * if (!offsetPassed) return null
 * return	<ScrollToTop />
 * ```
 */
export const useScrollY = (offset = DEFAULT_Y_OFFSET) => {
	const [offsetPassed, setOffsetPassed] = useState(false)
	const [prevScrollPosition, setPrevScrollPosition] = useState(0)
	const [scrollDirection, setScrollDirection] = useState<ScrollYDirection>(null)

	const listener = useCallback(() => {
		if (window.scrollY > prevScrollPosition) {
			setScrollDirection('down')
		} else {
			setScrollDirection('up')
		}

		if (window.pageYOffset > offset) {
			setOffsetPassed(true)
		} else {
			setOffsetPassed(false)
		}

		setPrevScrollPosition(window.scrollY)
	}, [offset, prevScrollPosition])

	useEffect(() => {
		window.addEventListener('scroll', listener)

		return () => {
			window.removeEventListener('scroll', listener)
		}
	}, [listener])

	return {
		scrollPosition: prevScrollPosition,
		offsetPassed,
		scrollDirection
	}
}

export default useScrollY
