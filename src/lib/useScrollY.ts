import { useCallback, useEffect, useState } from 'react'

export type ScrollYDirection = 'up' | 'down' | null
export const DEFAULT_Y_OFFSET = 0

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
