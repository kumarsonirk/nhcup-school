import { Link } from 'react-router-dom'

const sports = [
  { id: 'football',    icon: '⚽', name: 'Football',     teams: 'U10 / U12 / U14 / U16 / U18',  badge: 'NHG & NHIS' },
  { id: 'basketball',  icon: '🏀', name: 'Basketball',   teams: 'U14 / U16 Boys & Girls',         badge: 'NHPS' },
  { id: 'volleyball',  icon: '🏐', name: 'Volleyball',   teams: 'U14 / U16 Boys & Girls',         badge: 'NHPS' },
  { id: 'chess',       icon: '♟️', name: 'Chess',        teams: 'U8 / U10 / U12 / U14 / U16',    badge: 'NHPS & NHIS' },
  { id: 'tabletennis', icon: '🏓', name: 'Table Tennis', teams: 'U14 / U16 Boys & Girls',         badge: 'NHPS' },
  { id: 'badminton',   icon: '🏸', name: 'Badminton',    teams: 'U10 / U12 / U14 / U16 / U18',   badge: 'NHG & NHIS' },
  { id: 'pickleball',  icon: '🎾', name: 'Pickle Ball',  teams: 'U14 / U16 Boys & Girls',         badge: 'NHG' },
  { id: 'athletics',   icon: '🏃', name: 'Athletics',    teams: 'U8 / U10 / U12 / U14 / U16',    badge: 'NHIS' },
  { id: 'yoga',        icon: '🧘', name: 'Yoga',         teams: 'U10 / U12 / U14 / U16',          badge: 'NHG' },
  { id: 'taekwondo',   icon: '🥋', name: 'Taekwondo',    teams: 'Grade 3 – 8 Boys & Girls',       badge: 'NHIS' },
  { id: 'throwball',   icon: '🏐', name: 'Throwball',    teams: 'U12 / U14 / U16 Girls',          badge: 'NHIS' },
]

export default function Sports() {
  return (
    <section id="sports">
      <div className="sports-header reveal">
        <div className="section-tag">Disciplines</div>
        <h2 className="section-title">Sports <span className="highlight">Categories</span></h2>
        <div className="divider"></div>
        <p className="section-desc">Eight thrilling sports disciplines. One ultimate championship. Choose your battleground.</p>
      </div>
      <div className="sports-grid">
        {sports.map((s, i) => (
          <Link to={`/register/${s.id}`} className="sport-card reveal" key={i} style={{ textDecoration: 'none' }}>
            <span className="sport-icon">{s.icon}</span>
            <div className="sport-name">{s.name}</div>
            <div className="sport-teams">{s.teams}</div>
            <div className="sport-badge">{s.badge}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
