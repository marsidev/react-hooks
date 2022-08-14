import { useCallback, useEffect, useState } from 'react'

interface WindowSize {
	width: number | null | undefined
	height: number | null | undefined
}

/**
 * It returns an object with the current window width and height
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
