import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCountdown } from '../hooks/useCountdown'

export default function Hero() {
  const { timeLeft, label } = useCountdown()

  useEffect(() => {
    const handler = () => {
      const hero = document.getElementById('hero')
      if (hero) hero.style.backgroundPositionY = `calc(center + ${window.scrollY * 0.3}px)`
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-title-row">
          <img src="/nhcup_logo.png" alt="NHCUP 2026" className="hero-logo" />
          <h1 className="hero-title">
            State Level Inter-School<br />
            <span className="highlight">Sports Championship</span>
          </h1>
        </div>

        <p className="hero-sub">
          The ultimate battle of pride &amp; sportsmanship. 11 sports disciplines,
          50+ schools, 1200+ athletes across Bangalore's finest campuses.
        </p>

        <div className="countdown-wrap">
          <div className="countdown-label">{label}</div>
          <div className="countdown">
            <div className="cd-block">
              <div className="cd-num">{timeLeft.d}</div>
              <div className="cd-unit">Days</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-block">
              <div className="cd-num">{timeLeft.h}</div>
              <div className="cd-unit">Hours</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-block">
              <div className="cd-num">{timeLeft.m}</div>
              <div className="cd-unit">Mins</div>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-block">
              <div className="cd-num">{timeLeft.s}</div>
              <div className="cd-unit">Secs</div>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/register" className="btn-primary">
            <i className="fas fa-trophy"></i> Register Your Team
          </Link>
          <a href="#schedule" className="btn-outline">
            <i className="fas fa-calendar-alt"></i> View Schedule
          </a>
        </div>
      </div>
    </section>
  )
}
