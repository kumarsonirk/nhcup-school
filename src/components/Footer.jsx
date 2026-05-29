export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <img src="/nhcup_logo.png" alt="NHCUP 2026" className="footer-logo" />
        <p className="footer-tagline">State Level Inter-School Sports Championship</p>

        <nav className="footer-nav">
          <a href="#sports">Sports</a>
          <a href="#schedule">Schedule</a>
          <a href="#reg-cta">Register</a>
        </nav>

        <div className="footer-contact">
          <p className="footer-contact-label">For further clarifications, please contact</p>
          <div className="footer-contact-links">
            <a href="tel:9663412000"><i className="fas fa-phone"></i> 96634 12000</a>
            <a href="mailto:nhcup@newhorizonindia.edu"><i className="fas fa-envelope"></i> nhcup@newhorizonindia.edu</a>
          </div>
        </div>

        <div className="footer-socials">
          <a className="social-link" href="#"><i className="fab fa-instagram"></i></a>
          <a className="social-link" href="#"><i className="fab fa-facebook"></i></a>
          <a className="social-link" href="#"><i className="fab fa-youtube"></i></a>
          <a className="social-link" href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NHCUP — New Horizon College, Bangalore. All rights reserved.</p>
        <p>Registration: <span>15 Jun – 24 Aug 2026</span></p>
      </div>
    </footer>
  )
}
