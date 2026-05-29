import { useState } from 'react'

const nhpsCards = [
  { icon: '🏀', date: '31 Aug – 1 Sep', sport: 'Basketball',      teams: 'U14 Boys & Girls',          venue: 'NHPS', status: 'upcoming', gold: false },
  { icon: '🏀', date: '2 Sep – 3 Sep',  sport: 'Basketball',      teams: 'U16 Boys & Girls',          venue: 'NHPS', status: 'upcoming', gold: false },
  { icon: '🏀', date: '4 Sep',          sport: 'Basketball Finals',teams: 'All Categories',            venue: 'NHCE', status: 'open',     gold: true  },
  { icon: '🏐', date: '7 – 8 Sep',      sport: 'Volleyball',       teams: 'U14 & U16 Boys & Girls',   venue: 'NHPS', status: 'upcoming', gold: false },
  { icon: '♟️', date: '1 – 2 Sep',     sport: 'Chess',            teams: 'U8, U10, U12 Mixed',       venue: 'NHPS', status: 'upcoming', gold: false },
  { icon: '🏓', date: '3 Sep',          sport: 'Table Tennis',     teams: 'U14 & U16 Boys & Girls',   venue: 'NHPS', status: 'upcoming', gold: false },
]

const nhgCards = [
  { icon: '🏸', date: '2 – 4 Sep',      sport: 'Badminton',   teams: 'U14, U16 & U18 Boys & Girls',      venue: 'NHG', status: 'upcoming', gold: false },
  { icon: '⚽', date: '31 Aug – 3 Sep', sport: 'Football',    teams: 'U10, U12 & U14 Boys & Girls',      venue: 'NHG', status: 'upcoming', gold: false },
  { icon: '🎾', date: '31 Aug',          sport: 'Pickle Ball', teams: 'U16 Boys & Girls',                 venue: 'NHG', status: 'upcoming', gold: false },
  { icon: '🎾', date: '1 Sep',           sport: 'Pickle Ball', teams: 'U14 Boys & Girls',                 venue: 'NHG', status: 'upcoming', gold: false },
  { icon: '🧘', date: '4 Sep',           sport: 'Yoga',        teams: 'U10, U12, U14 & U16 Boys & Girls', venue: 'NHG', status: 'upcoming', gold: false },
]

const nhisCards = [
  { icon: '🏃', date: '3 Sep',          sport: 'Athletics',  teams: 'U8–U16 Boys & Girls',      venue: 'NHIS', status: 'upcoming', gold: false },
  { icon: '🏸', date: '31 Aug – 1 Sep', sport: 'Badminton',  teams: 'U10, U12 Boys & Girls',    venue: 'NHIS', status: 'upcoming', gold: false },
  { icon: '♟️', date: '3 Sep',         sport: 'Chess',      teams: 'U14, U16 Mixed',            venue: 'NHIS', status: 'upcoming', gold: false },
  { icon: '⚽', date: '4 – 8 Sep',      sport: 'Football',   teams: 'U16 & U18 Boys & Girls',   venue: 'NHIS', status: 'upcoming', gold: false },
  { icon: '🏐', date: '4 Sep',           sport: 'Throwball',  teams: 'U12, U14, U16 Girls',      venue: 'NHIS', status: 'upcoming', gold: false },
  { icon: '🥋', date: '3 – 4 Sep',      sport: 'Taekwondo',  teams: 'Grade 3–8 Boys & Girls',   venue: 'NHIS', status: 'upcoming', gold: false },
]

function SchCard({ card }) {
  return (
    <div className="sch-card reveal">
      <div className={`sch-card-header${card.gold ? ' sch-card-header--gold' : ''}`}>
        <span className="sch-card-icon">{card.icon}</span>
        <span className="sch-card-date">{card.date}</span>
      </div>
      <div className="sch-card-body">
        <div className="sch-card-sport">{card.sport}</div>
        <div className="sch-card-teams">{card.teams}</div>
        <div className="sch-card-foot">
          <span className="sch-card-venue">
            <i className="fas fa-location-dot"></i> {card.venue}
          </span>
          <span className={`sch-status status-${card.status}`}>
            {card.status === 'open' ? 'Finals' : 'Upcoming'}
          </span>
        </div>
      </div>
    </div>
  )
}

const tabs = [
  { id: 'nhps', label: 'NHPS', cards: nhpsCards },
  { id: 'nhg',  label: 'NHG',  cards: nhgCards  },
  { id: 'nhis', label: 'NHIS', cards: nhisCards  },
]

export default function Schedule() {
  const [active, setActive] = useState('nhps')

  return (
    <section id="schedule">
      <div className="schedule-header reveal">
        <div className="section-tag">Event Timeline</div>
        <h2 className="section-title">Event <span className="highlight">Schedule</span></h2>
        <div className="divider"></div>
        <p className="section-desc">Stay updated with all key dates, matches, and events throughout the championship.</p>
      </div>

      <div className="tabs reveal">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`tab-btn${active === t.id ? ' active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tabs.map(t => (
        <div key={t.id} className={`tab-content${active === t.id ? ' active' : ''}`}>
          <div className="schedule-grid">
            {t.cards.map((card, i) => <SchCard key={i} card={card} />)}
          </div>
        </div>
      ))}

      <div className="reg-notice reveal">
        <i className="fas fa-info-circle"></i>
        <div className="reg-notice-text">
          <strong>Events run from 31st August to 8th September 2026</strong>
          <p>All events are held across NHPS, NHG, and NHIS campuses. Basketball Finals on 4th Sep at NHCE.</p>
        </div>
      </div>
    </section>
  )
}
