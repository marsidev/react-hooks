import { useEffect, useState } from 'react'

/**
 * Check if a component has rendered.
 * @returns True if the component has rendered.
 */
export const useRendered = () => {
	const [rendered, setRendered] = useState(false)
	useEffect(() => setRendered(true), [])
	return rendered
}

export default useRendered
