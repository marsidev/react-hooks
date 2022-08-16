import { useEffect, useState } from 'react'

/**
 * React hook to check if a component has rendered.
 * @returns True if the component has rendered.
 * @example
 * ```jsx
 * import { useRendered } from '@marsidev/react-hooks'
 * import { Box, useColorModeValue } from '@chakra-ui/react'
 * ...
 * const rendered = useRendered()
 * const themedBg = useColorModeValue('gray.200', 'gray.800')
 * ...
 * return	<Box bg={rendered ? themedBg : 'auto'} />
 * ```
 */
export const useRendered = () => {
	const [rendered, setRendered] = useState(false)
	useEffect(() => setRendered(true), [])
	return rendered
}

export default useRendered
