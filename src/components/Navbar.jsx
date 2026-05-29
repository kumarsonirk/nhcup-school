export default function Navbar({ mobileOpen, setMobileOpen }) {
  return (
    <nav id="navbar">
      <div className="nav-campus-logos">
        <img src="/nhps.png"    alt="NHPS" className="nav-campus-logo" />
        <img src="/gurukul.png" alt="NHG"  className="nav-campus-logo" />
        <img src="/nhis.png"    alt="NHIS" className="nav-campus-logo" />
      </div>
      <ul className="nav-links"></ul>
      <div
        className={`hamburger${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(o => !o)}
      >
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}
