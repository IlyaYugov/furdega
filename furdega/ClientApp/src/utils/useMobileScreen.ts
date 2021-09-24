import { useEffect, useState } from 'react'

const MOBILE_SCREEN_WIDTH = '576px'

function useMobileScreen() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobileScreenEvent = window.matchMedia(`(max-width: ${MOBILE_SCREEN_WIDTH})`)
    const mobileScreenEventHandler = () => {
      setIsMobile(mobileScreenEvent.matches)
    }
    mobileScreenEventHandler()
    mobileScreenEvent.onchange = mobileScreenEventHandler
  }, [])

  return isMobile
}

export default useMobileScreen
