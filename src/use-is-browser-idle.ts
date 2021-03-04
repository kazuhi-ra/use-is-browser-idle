import { useState, useEffect } from 'react'

export const useIsBrowserIdle = (): boolean => {
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    try {
      requestIdleCallback(() => setIsIdle(true))
    } catch (_) {
      // when IE or Safari
      setIsIdle(true)
    }
  }, [])

  return isIdle
}
