import { useEffect, useState } from 'react'

function useIsMobile() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

export default useIsMobile
