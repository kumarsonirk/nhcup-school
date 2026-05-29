export const SPORTS = [
  {
    id: 'basketball', icon: '🏀', name: 'Basketball',
    categories: ['U14', 'U16'], genders: ['Boys', 'Girls'],
    playerType: 'standard', maxPlayers: 12,
    fee: null,
    pdfEntry: '/pdf/Basket Ball_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/Basket Ball_NHCUP Rules & Reg.pdf',
  },
  {
    id: 'football', icon: '⚽', name: 'Football',
    categories: ['U10', 'U12', 'U14', 'U16', 'U18'], genders: ['Boys', 'Girls'],
    playerType: 'standard', maxPlayers: 18,
    fee: null,
    pdfEntry: '/pdf/FootBall_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/FootBall_NHCUP Rules & Reg.pdf',
  },
  {
    id: 'volleyball', icon: '🏐', name: 'Volleyball',
    categories: ['U14', 'U16'], genders: ['Boys', 'Girls'],
    playerType: 'standard', maxPlayers: 12,
    fee: 1000,
    pdfEntry: '/pdf/Volley Ball_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/Volley Ball_NHCUP Rules & Reg.pdf',
  },
  {
    id: 'badminton', icon: '🏸', name: 'Badminton',
    categories: ['U10', 'U12', 'U14', 'U16', 'U18'], genders: ['Boys', 'Girls'],
    playerType: 'standard', maxPlayers: 8,
    fee: null,
    pdfEntry: '/pdf/Badminton_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/Badminton_NHCUP Rules & Reg..pdf',
  },
  {
    id: 'chess', icon: '♟️', name: 'Chess',
    categories: ['U8', 'U10', 'U12', 'U14', 'U16'], genders: ['Boys', 'Girls'],
    playerType: 'rank', maxPlayers: 10,
    fee: null,
    pdfEntry: '/pdf/Chess_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/chess_NHCUP Rules & Reg.pdf',
  },
  {
    id: 'tabletennis', icon: '🏓', name: 'Table Tennis',
    categories: ['U14', 'U16'], genders: ['Boys', 'Girls'],
    playerType: 'rank', maxPlayers: 8,
    fee: 300,
    pdfEntry: '/pdf/Table Tennis_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/Table Tennis_NHCUP Rules & Reg.pdf',
  },
  {
    id: 'pickleball', icon: '🎾', name: 'Pickle Ball',
    categories: ['U14', 'U16'], genders: ['Boys', 'Girls'],
    playerType: 'rank', maxPlayers: 8,
    fee: 300,
    pdfEntry: '/pdf/PickeBall_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/Pickle Ball_NHCUP Rules & Reg.pdf',
  },
  {
    id: 'athletics', icon: '🏃', name: 'Athletics',
    categories: ['U8', 'U10', 'U12', 'U14', 'U16'], genders: ['Boys', 'Girls'],
    playerType: 'athletics', maxPlayers: 20,
    fee: null,
    pdfEntry: '/pdf/Athletic Meet_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/Athletic Meet_NHCUP Rules & Reg.pdf',
  },
  {
    id: 'taekwondo', icon: '🥋', name: 'Taekwondo',
    categories: ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'], genders: ['Boys', 'Girls'],
    playerType: 'taekwondo', maxPlayers: 7,
    fee: null,
    pdfEntry: '/pdf/Taekwondo_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/Taekwondo_NHCUP Rules & Reg.pdf',
  },
  {
    id: 'yoga', icon: '🧘', name: 'Yoga',
    categories: ['U10', 'U12', 'U14', 'U16'], genders: ['Boys', 'Girls'],
    playerType: 'standard', maxPlayers: 5,
    fee: null,
    pdfEntry: '/pdf/Yoga_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/Yoga_NHCUP Rules & Reg..pdf',
  },
  {
    id: 'throwball', icon: '🏐', name: 'Throwball',
    categories: ['U12', 'U14', 'U16'], genders: ['Girls'],
    playerType: 'standard', maxPlayers: 12,
    fee: null,
    pdfEntry: '/pdf/throwBall_NHCUP Entry Form.pdf',
    pdfRules: '/pdf/throwBall_NHCUP Rules & Reg.pdf',
  },
]

export const emptyPlayer = (type) => {
  const base = { name: '', dob: '', class: '' }
  if (type === 'rank')       return { ...base, rank: '' }
  if (type === 'athletics')  return { ...base, e60m: false, e80m: false, e100m: false, obstacle: false, hurdle: false, overarm: false, longjump: false, relay: false }
  if (type === 'taekwondo')  return { ...base, ageCategory: '', weight: '', belt: '', event: '' }
  return base
}
