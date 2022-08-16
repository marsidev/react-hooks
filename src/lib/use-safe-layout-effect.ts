/**
 * Credit goes to Chakra-UI.
 */
import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from '../utils/dom'

/**
 * React hook to use `useLayoutEffect` if the environment is a browser, otherwise uses `useEffect`.
 * The API is the same as `useLayoutEffect` and `useEffect`.
 */
export const useSafeLayoutEffect = isBrowser() ? useLayoutEffect : useEffect
