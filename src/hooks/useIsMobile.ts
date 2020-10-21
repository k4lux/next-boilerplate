import { useEffect, useState } from 'react'

import { SMALL } from '../styles/utils/media'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function verify() {
      if (window.innerWidth <= SMALL) {
        setIsMobile(true)
        return
      }

      setIsMobile(false)
    }

    verify()
    window.addEventListener('resize', verify)

    return () => {
      window.removeEventListener('resize', verify)
    }
  }, [])

  return isMobile
}

export default useIsMobile
