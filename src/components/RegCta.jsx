import { Link } from 'react-router-dom'

export default function RegCta() {
  return (
    <section id="reg-cta">
      <div className="cta-inner">

        <div className="cta-left reveal-left">
          <div className="section-tag cta-tag">Join the Battle</div>
          <h2 className="cta-title">Ready to<br /><span className="highlight">Compete?</span></h2>
          <p className="cta-desc">
            Secure your spot at NHCUP 2026 — the premier inter-school sports
            championship across Bangalore's finest campuses.
          </p>
          <div className="cta-stats">
            <div className="cta-stat">
              <span className="cta-stat-num">11</span>
              <span className="cta-stat-label">Sports</span>
            </div>
            <div className="cta-stat-div"></div>
            <div className="cta-stat">
              <span className="cta-stat-num">50+</span>
              <span className="cta-stat-label">Schools</span>
            </div>
            <div className="cta-stat-div"></div>
            <div className="cta-stat">
              <span className="cta-stat-num">1200+</span>
              <span className="cta-stat-label">Athletes</span>
            </div>
          </div>
        </div>

        <div className="cta-right reveal-right">
          <div className="cta-card">
            <div className="cta-card-head">
              <i className="fas fa-trophy"></i>
              <span>NHCUP 2026</span>
            </div>
            <div className="cta-card-dates">
              <div className="cta-card-date">
                <div className="cta-card-date-label"><i className="fas fa-flag"></i> Registration Opens</div>
                <div className="cta-card-date-val">15 Jun 2026</div>
              </div>
              <div className="cta-card-date">
                <div className="cta-card-date-label"><i className="fas fa-hourglass-end"></i> Registration Closes</div>
                <div className="cta-card-date-val">24 Aug 2026</div>
              </div>
              <div className="cta-card-date">
                <div className="cta-card-date-label"><i className="fas fa-play-circle"></i> Events Begin</div>
                <div className="cta-card-date-val">31 Aug 2026</div>
              </div>
              <div className="cta-card-date">
                <div className="cta-card-date-label"><i className="fas fa-medal"></i> Events End</div>
                <div className="cta-card-date-val">8 Sep 2026</div>
              </div>
            </div>
            <Link to="/register" className="btn-primary cta-btn">
              <i className="fas fa-user-plus"></i> Register Your Team
            </Link>
            <a href="#schedule" className="cta-link">
              <i className="fas fa-calendar-alt"></i> View Full Schedule
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
