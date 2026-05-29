import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SPORTS, emptyPlayer } from '../data/sports'
import './Register.css'

/* ─── Sport Selector ─── */
function SportSelector({ onSelect }) {
  return (
    <div className="reg-page">
      <div className="reg-page-header">
        {/* <Link to="/" className="reg-back-btn"><i className="fas fa-arrow-left"></i> Back to Home</Link> */}
        <img src="/nhcup_logo.png" alt="NHCUP 2026" style={{ height: '100px', width: 'auto', margin: '0 auto 15px', display: 'block' }} />
        <h1 className="reg-page-title">Select Your <span className="highlight">Sport</span></h1>
        <p className="reg-page-sub">Choose the sport you want to register for. Each form is tailored to the specific event requirements.</p>
      </div>
      <div className="reg-sport-grid">
        {SPORTS.map(s => (
          <button key={s.id} className="reg-sport-card" onClick={() => onSelect(s)}>
            <span className="reg-sport-icon">{s.icon}</span>
            <span className="reg-sport-name">{s.name}</span>
            <span className="reg-sport-cats">{s.categories.join(' / ')}</span>
            <div className="reg-sport-pdfs">
              <a href={s.pdfEntry} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
                <i className="fas fa-file-pdf"></i> Entry Form
              </a>
              <a href={s.pdfRules} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
                <i className="fas fa-book"></i> Rules
              </a>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─── Player Row ─── */
function PlayerRow({ idx, player, onChange, type }) {
  const set = (field, val) => onChange(idx, { ...player, [field]: val })
  const chk = (field) => <input type="checkbox" checked={player[field]} onChange={e => set(field, e.target.checked)} />

  return (
    <>
      <td>{idx + 1}</td>
      <td><input className="reg-input" value={player.name} onChange={e => set('name', e.target.value)} placeholder="Full Name" required /></td>
      <td><input className="reg-input" type="date" value={player.dob} onChange={e => set('dob', e.target.value)} required /></td>
      <td><input className="reg-input" value={player.class} onChange={e => set('class', e.target.value)} placeholder="e.g. 8A" required /></td>

      {type === 'rank' && (
        <td><input className="reg-input" value={player.rank} onChange={e => set('rank', e.target.value)} placeholder="Rank (if any)" /></td>
      )}

      {type === 'athletics' && (<>
        <td className="chk-cell">{chk('e60m')}</td>
        <td className="chk-cell">{chk('e80m')}</td>
        <td className="chk-cell">{chk('e100m')}</td>
        <td className="chk-cell">{chk('obstacle')}</td>
        <td className="chk-cell">{chk('hurdle')}</td>
        <td className="chk-cell">{chk('overarm')}</td>
        <td className="chk-cell">{chk('longjump')}</td>
        <td className="chk-cell">{chk('relay')}</td>
      </>)}

      {type === 'taekwondo' && (<>
        <td><input className="reg-input" value={player.ageCategory} onChange={e => set('ageCategory', e.target.value)} placeholder="Age Category" /></td>
        <td><input className="reg-input" value={player.weight} onChange={e => set('weight', e.target.value)} placeholder="kg" /></td>
        <td>
          <select className="reg-input" value={player.belt} onChange={e => set('belt', e.target.value)}>
            <option value="">Select</option>
            {['White','Yellow','Green','Blue','Red','Black'].map(b => <option key={b}>{b}</option>)}
          </select>
        </td>
        <td>
          <select className="reg-input" value={player.event} onChange={e => set('event', e.target.value)}>
            <option value="">Select</option>
            <option>Kyorgi</option>
            <option>Poomsae</option>
          </select>
        </td>
      </>)}
    </>
  )
}

/* ─── Main Registration Form ─── */
function RegistrationForm({ sport, onBack }) {
  const [school, setSchool] = useState({ name: '', address: '', mobile: '', email: '' })
  const [categories, setCategories] = useState('')
  const [genders, setGenders] = useState([])
  const [players, setPlayers] = useState([emptyPlayer(sport.playerType)])
  const [admin, setAdmin] = useState({ coach: '', coachMobile: '', principal: '', principalMobile: '' })
  const [submitted, setSubmitted] = useState(false)

  const setSchoolField = (f, v) => setSchool(s => ({ ...s, [f]: v }))
  const setAdminField  = (f, v) => setAdmin(a => ({ ...a, [f]: v }))

  const toggleItem = (arr, setArr, val) =>
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val])

  const updatePlayer = (i, val) => setPlayers(p => p.map((r, idx) => idx === i ? val : r))
  const addPlayer    = () => setPlayers(p => [...p, emptyPlayer(sport.playerType)])
  const removePlayer = (i) => setPlayers(p => p.filter((_, idx) => idx !== i))

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ sport: sport.id, school, categories, genders, players, coach: admin.coach, coachMobile: admin.coachMobile, principal: admin.principal, principalMobile: admin.principalMobile })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="reg-success">
        <div className="reg-success-card">
          <div className="reg-success-icon"><i className="fas fa-check-circle"></i></div>
          <h2>Registration Submitted!</h2>
          <p>Your <strong>{sport.name}</strong> registration has been received. We'll contact you at <strong>{school.email}</strong> with confirmation details.</p>
          <div className="reg-success-btns">
            <button className="btn-primary" onClick={() => { setSubmitted(false); setPlayers([emptyPlayer(sport.playerType)]) }}>Register Another Team</button>
            <Link to="/" className="btn-outline">Back to Home</Link>
          </div>
        </div>
      </div>
    )
  }

  const type = sport.playerType

  return (
    <div className="reg-form-page">
      {/* Top bar */}
      <div className="reg-form-topbar">
        <button className="reg-back-btn" onClick={onBack}><i className="fas fa-arrow-left"></i> Change Sport</button>
        <div className="reg-form-sport-badge">{sport.icon} {sport.name}</div>
        <div className="reg-form-pdf-links">
          <a href={sport.pdfEntry} target="_blank" rel="noreferrer"><i className="fas fa-file-pdf"></i> Entry Form PDF</a>
          <a href={sport.pdfRules} target="_blank" rel="noreferrer"><i className="fas fa-book"></i> Rules PDF</a>
        </div>
      </div>

      <form className="reg-form" onSubmit={handleSubmit}>
        {/* School Info */}
        <div className="reg-section">
          <h3 className="reg-section-title"><i className="fas fa-school"></i> School Information</h3>
          <div className="reg-grid-2">
            <div className="reg-field">
              <label>School Name *</label>
              <input className="reg-input" value={school.name} onChange={e => setSchoolField('name', e.target.value)} placeholder="Full name of school" required />
            </div>
            <div className="reg-field">
              <label>School Address *</label>
              <input className="reg-input" value={school.address} onChange={e => setSchoolField('address', e.target.value)} placeholder="Address" required />
            </div>
            <div className="reg-field">
              <label>Mobile / Tel No *</label>
              <input className="reg-input" type="tel" value={school.mobile} onChange={e => setSchoolField('mobile', e.target.value)} placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="reg-field">
              <label>Email *</label>
              <input className="reg-input" type="email" value={school.email} onChange={e => setSchoolField('email', e.target.value)} placeholder="school@example.com" required />
            </div>
            <div className="reg-field">
              <label>Coach / PET Name *</label>
              <input className="reg-input" value={admin.coach} onChange={e => setAdminField('coach', e.target.value)} placeholder="Coach or PET name" required />
            </div>
            <div className="reg-field">
              <label>Coach / PET Contact *</label>
              <input className="reg-input" type="tel" value={admin.coachMobile} onChange={e => setAdminField('coachMobile', e.target.value)} placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="reg-field">
              <label>Principal Name *</label>
              <input className="reg-input" value={admin.principal} onChange={e => setAdminField('principal', e.target.value)} placeholder="Principal name" required />
            </div>
            <div className="reg-field">
              <label>Principal Contact *</label>
              <input className="reg-input" type="tel" value={admin.principalMobile} onChange={e => setAdminField('principalMobile', e.target.value)} placeholder="+91 XXXXX XXXXX" required />
            </div>
          </div>
        </div>

        {/* Category Selection */}
        <div className="reg-section">
          <h3 className="reg-section-title"><i className="fas fa-list-check"></i> Category Selection</h3>
          <div className="reg-categories">
            <div>
              <p className="reg-cat-label">Age Category</p>
              <div className="reg-checkbox-group">
                {sport.categories.map(c => (
                  <label key={c} className={`reg-checkbox${categories === c ? ' checked' : ''}`}>
                    <input type="radio" name="ageCategory" checked={categories === c} onChange={() => setCategories(c)} /> {c}
                  </label>
                ))}
              </div>
            </div>
            {sport.genders.length > 0 && (
              <div>
                <p className="reg-cat-label">Gender</p>
                <div className="reg-checkbox-group">
                  {sport.genders.map(g => (
                    <label key={g} className={`reg-checkbox${genders.includes(g) ? ' checked' : ''}`}>
                      <input type="checkbox" checked={genders.includes(g)} onChange={() => toggleItem(genders, setGenders, g)} /> {g}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Players Table */}
        <div className="reg-section">
          <div className="reg-section-head">
            <h3 className="reg-section-title"><i className="fas fa-users"></i> Player Details</h3>
            <button type="button" className="reg-add-btn" onClick={addPlayer} disabled={players.length >= sport.maxPlayers}>
              <i className="fas fa-plus"></i> Add Player
            </button>
          </div>
          <div className="reg-table-wrap">
            <table className="reg-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name *</th>
                  <th>Date of Birth *</th>
                  <th>Class *</th>
                  {type === 'rank'      && <th>Rank (if any)</th>}
                  {type === 'athletics' && <>
                    <th>60m</th><th>80m</th><th>100m</th>
                    <th>Obstacle</th><th>Hurdle</th>
                    <th>Overarm Throw</th><th>Long Jump</th><th>Shuttle Relay</th>
                  </>}
                  {type === 'taekwondo' && <>
                    <th>Age Cat.</th><th>Weight (kg)</th><th>Belt</th><th>Event</th>
                  </>}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {players.map((p, i) => (
                  <tr key={i}>
                    <PlayerRow idx={i} player={p} onChange={updatePlayer} type={type} />
                    <td>
                      {players.length > 1 &&
                        <button type="button" className="reg-remove-btn" onClick={() => removePlayer(i)}>
                          <i className="fas fa-trash"></i>
                        </button>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="reg-table-note">Maximum {sport.maxPlayers} players. {players.length}/{sport.maxPlayers} added.</p>
        </div>

        {/* Declaration */}
        <div className="reg-section reg-declaration">
          <label className="reg-declaration-check">
            <input type="checkbox" required />
            <span>I hereby certify that all the information provided is accurate. The players listed are eligible as per NHCUP 2026 rules and regulations. The school accepts all terms and conditions of the championship.</span>
          </label>
        </div>

        <div className="reg-form-footer">
          <div className="reg-fee-display">
            <span className="reg-fee-label">Registration Fee</span>
            {sport.fee
              ? <span className="reg-fee-amount">₹{sport.fee.toLocaleString()}</span>
              : <span className="reg-fee-free">FREE</span>
            }
          </div>
          <div className="reg-submit-side">
            <button type="submit" className="btn-primary reg-submit-btn">
              <i className="fas fa-paper-plane"></i>
              {sport.fee ? 'Pay & Submit' : 'Submit Registration'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

/* ─── Page Root ─── */
export default function Register() {
  const { sportId } = useParams()
  const [selectedSport, setSelectedSport] = useState(
    sportId ? SPORTS.find(s => s.id === sportId) ?? null : null
  )

  return (
    <div className="register-root">
      <div className="reg-topnav">
        <Link to="/" className="reg-home-link"><i className="fas fa-arrow-left"></i> Back to Home</Link>
      </div>

      {!selectedSport
        ? <SportSelector onSelect={setSelectedSport} />
        : <RegistrationForm sport={selectedSport} onBack={() => setSelectedSport(null)} />
      }
    </div>
  )
}
