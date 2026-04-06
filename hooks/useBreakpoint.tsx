import { useEffect, useState } from 'react'

export const useBreakpoint = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const check = () => setWidth(window.innerWidth)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return {
    isMobile: width > 0 && width < 446,
  }
}
