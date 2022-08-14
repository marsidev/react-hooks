import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useRendered } from 'lib'

describe('useRendered()', () => {
	it('is defined', () => {
		expect(useRendered).toBeDefined()
	})

	it('should return true when component is mounted', () => {
		const { result } = renderHook(() => useRendered())
		const rendered = result.current
		expect(rendered).toBe(true)
	})
})
