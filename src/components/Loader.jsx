import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div id="loader" className={hidden ? 'hide' : ''}>
      <img src="/nhcup_logo.png" alt="NHCUP 2026" className="loader-logo-img" />
      <div className="loader-bar-wrap"><div className="loader-bar"></div></div>
      <div className="loader-text">Loading...</div>
    </div>
  )
}
