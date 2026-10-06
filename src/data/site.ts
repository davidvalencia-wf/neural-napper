export const features = [
  {
    icon: '◉',
    title: 'Contextual Nodding',
    body: 'A transformer trained on 2.1M hours of standups knows when to nod, tilt and do the slow "ah, interesting" blink.',
  },
  {
    icon: '✶',
    title: 'Dream-Time Notes',
    body: 'Summaries, decisions and action items land in your inbox before your alarm goes off.',
  },
  {
    icon: '◈',
    title: 'Voice Cloning (Polite Mode)',
    body: 'Says "sorry, I was on mute" and "happy to take that" in your exact timbre. Nothing else.',
  },
  {
    icon: '⬢',
    title: 'Deadlock Detector',
    body: 'Spots a meeting looping on the same point and quietly proposes taking it offline.',
  },
  {
    icon: '◐',
    title: 'Sleep Sync',
    body: 'Reads your sleep tracker and schedules your presence around your REM cycles.',
  },
  {
    icon: '✦',
    title: 'Panic Wake',
    body: 'If your name is said twice in ten seconds, your phone buzzes and the AI stalls for eight seconds.',
  },
];

export const tiers = [
  {
    name: 'Power Nap',
    price: '$0',
    cadence: '/ month',
    tagline: 'For the occasional afternoon fade.',
    features: ['3 meetings a month', 'Basic nodding', 'Text-only notes', 'Community support'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Deep Sleep',
    price: '$29',
    cadence: '/ month',
    tagline: 'For full-time calendar casualties.',
    features: [
      'Unlimited meetings',
      'Contextual nodding + micro-expressions',
      'Voice cloning (Polite Mode)',
      'Sleep Sync & Panic Wake',
      'Priority support',
    ],
    cta: 'Join waitlist',
    featured: true,
  },
  {
    name: 'Hibernation',
    price: '$99',
    cadence: '/ seat / month',
    tagline: 'For teams who have given up entirely.',
    features: [
      'Everything in Deep Sleep',
      'Multi-agent meetings (AIs talk to AIs)',
      'Org-wide note graph',
      'SSO & audit logs',
      'Dedicated sleep concierge',
    ],
    cta: 'Talk to us',
    featured: false,
  },
];

export const faqs = [
  {
    q: 'Is this legal?',
    a: 'In most jurisdictions, yes. We ship a consent banner that announces an AI assistant is present, which is both the law and, frankly, a flex.',
  },
  {
    q: 'Will my manager notice?',
    a: 'Our nodding model scores higher on perceived engagement than the median human attendee. Statistically, you will look more interested asleep.',
  },
  {
    q: 'What if someone asks me a direct question?',
    a: 'Panic Wake buzzes your phone and the AI buys you roughly eight seconds with a confident "great question, let me pull that up."',
  },
  {
    q: 'Where does my meeting data live?',
    a: 'Encrypted at rest in your chosen region, deleted after 30 days by default, and never used to train the public model.',
  },
  {
    q: 'Can it attend my performance review?',
    a: 'It can. We strongly recommend it does not.',
  },
  {
    q: 'When do you launch?',
    a: 'Public beta opens this quarter. Waitlist members get in first, in order, with no queue-jumping.',
  },
];
