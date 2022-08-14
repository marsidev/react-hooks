import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from '../utils/dom'

/**
 * Uses useLayoutEffect if the environment is a browser, otherwise uses useEffect.
 */
export const useSafeLayoutEffect = isBrowser() ? useLayoutEffect : useEffect
