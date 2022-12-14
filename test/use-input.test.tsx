import React from 'react'
import { render, renderHook, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { UseInputResult, useInput } from '~/lib/use-input'
import { resetDom } from './helpers/reset-dom'

const ControlledInput: React.FC<{
	refProp: React.RefObject<HTMLInputElement>
	id: string
}> = ({ id, refProp }) => {
	return <input ref={refProp} data-testid={id} />
}

export type LocalTestContext = UseInputResult
const INPUT_ID = 'my-input'

describe('useFocus()', () => {
	beforeEach<LocalTestContext>(ctx => {
		resetDom()

		const { result } = renderHook(() => useInput())
		const { ref, focus, blur } = result.current
		render(<ControlledInput id={INPUT_ID} refProp={ref} />)

		ctx.focus = focus
		ctx.blur = blur
	})

	it('is defined', () => {
		expect(useInput).toBeDefined()
	})

	it('an input has not initial focus', () => {
		const input = screen.getByTestId(INPUT_ID)

		expect(input).not.toHaveFocus()
	})

	it<LocalTestContext>('an input can be focused', ({ focus }) => {
		const input = screen.getByTestId(INPUT_ID)

		expect(input).not.toHaveFocus()

		focus()
		expect(input).toHaveFocus()
	})

	it<LocalTestContext>('an input can be focused and then blurred', ({ focus, blur }) => {
		const input = screen.getByTestId(INPUT_ID)

		expect(input).not.toHaveFocus()

		focus()
		expect(input).toHaveFocus()

		blur()
		expect(input).not.toHaveFocus()
	})
})
