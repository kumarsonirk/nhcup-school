export default function MobileMenu({ open, closeMobile }) {
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`}>
      <a href="#sports"   onClick={closeMobile}>Sports</a>
      <a href="#schedule" onClick={closeMobile}>Schedule</a>
      <a href="#reg-cta"  onClick={closeMobile} className="btn-primary" style={{ justifyContent: 'center' }}>
        Register Now
      </a>
    </div>
  )
}
