import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useIsMounted } from 'lib'

describe('useMount()', () => {
	it('is defined', () => {
		expect(useIsMounted).toBeDefined()
	})

	it('should return true when component is mounted', () => {
		const { result } = renderHook(() => useIsMounted())
		const isMounted = result.current()
		expect(isMounted).toBe(true)
	})

	it('should return false when component is unmounted', () => {
		const { result, unmount } = renderHook(() => useIsMounted())
		unmount()
		const isMounted = result.current()
		expect(isMounted).toBe(false)
	})
})
