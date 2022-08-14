import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from '~/utils/dom'

export const useSafeLayoutEffect = isBrowser() ? useLayoutEffect : useEffect
