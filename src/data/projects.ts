export type Experience = {
  id: string
  role: string
  company: string
  href?: string
  location: string
  dates: string
  bullets: string[]
  tags: string[]
}

export const jobs: Experience[] = [
  {
    id: 'wego',
    role: 'Senior Front End Engineer',
    company: 'Wego',
    href: 'https://www.wego.com',
    location: 'Singapore (Remote)',
    dates: 'Feb 2025 — Apr 2026',
    bullets: [
      'Led the implementation of Prismic CMS for the Growth team, designing reusable slice architecture, producing technical documentation, and training stakeholders for self-serve content management.',
      'Developed reusable ReactJS/NextJS components for the Hotel Booking platform, integrating backend APIs and design specifications to ensure scalability and UI consistency.',
    ],
    tags: ['React', 'Next.js', 'Prismic'],
  },
  {
    id: 'locofy',
    role: 'Principal Front End Engineer',
    company: 'Locofy.ai',
    href: 'https://www.locofy.ai',
    location: 'Singapore (Remote)',
    dates: 'Sep 2021 — May 2024',
    bullets: [
      'Pioneered the creation and deployment of our premier website and critical landing pages, fortifying our digital footprint.',
      'Directed a high-performing team of web engineers in the successful rollout of initial offerings, featuring our Figma plugin and Web-based Builder.',
    ],
    tags: ['Preact', 'React', 'React Native'],
  },
  {
    id: 'canva',
    role: 'Front End Engineer',
    company: 'Canva',
    href: 'https://www.canva.com',
    location: 'Makati City',
    dates: 'Jan 2016 — Nov 2021',
    bullets: [
      'Expertly converted design mockups into pixel-perfect, responsive front-end interfaces across various languages, ensuring high-fidelity visual execution.',
      'Initially developed dynamic web pages utilizing PHP and WordPress, applying Object-Oriented Programming (OOP) principles for robust architecture.',
      'Led the transition to a modern front-end stack by reconstructing our landing page catalog with stateless React.js, integrating MobX for efficient state management.',
    ],
    tags: ['React', 'MobX', 'PHP', 'WordPress'],
  },
  {
    id: 'fetch-plus',
    role: 'Lead Front End Engineer',
    company: 'Fetch Plus',
    location: 'Quezon City',
    dates: 'Sep 2014 — Aug 2015',
    bullets: [
      'Spearheaded a small Front-end development team, seamlessly integrating design blueprints into polished, functional code.',
      'Fostered collaborative synergy with the Back-end team to guarantee robust front-to-back-end connectivity (Python).',
      'Actively contributed to codebase with hands-on programming to maintain high-quality standards.',
    ],
    tags: ['Python'],
  },
]

export type FreelanceProject = {
  id: string
  title: string
  href: string
  summary: string
  tags: string[]
}

export const freelanceProjects: FreelanceProject[] = [
  {
    id: 'miguel',
    title: 'MiguelSebastian.com',
    href: 'https://miguelsebastian.com',
    summary:
      'Actor and model website for Miguel Sebastian — a Sydney-based performer working in film, television, and dramatic theatre, with representation details for Sydney Talent Company.',
    tags: ['Next.js', 'React'],
  },
  {
    id: 'air-quality-support',
    title: 'Air Quality Support',
    href: 'https://airqualitysupport.com.au',
    summary:
      'Marketing site for an Australian air-quality consultancy, covering WRF meteorological datasets, GIS terrain and land-use data, and configured WRF workstations for dispersion modelling.',
    tags: ['Next.js', 'React', 'Sanity'],
  },
  {
    id: 'myuse',
    title: 'Myuse',
    href: 'https://www.instagram.com/myuseworld/',
    summary:
      'A personal style and travel assistant that helps travellers stop forgetting what they need — now on an early-access waitlist.',
    tags: ['React Native'],
  },
]

export const education = {
  school: 'Mapúa IT Center',
  location: 'Makati City',
  year: '2007',
  degree: 'Accelerated Associate Degree in Multimedia Arts',
  detail:
    'Specialization options in Web Development, Film & Sound Production, Graphic Design & Advertising, or 3D Animation.',
}

export const processSteps = [
  {
    id: 'connect',
    number: '01',
    title: 'Connect',
    copy: 'It all starts with discussing your project and the ideas to make your project become a success.',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    copy: 'Sketching, wireframing and designing. I always keep you up to date with the progress.',
  },
  {
    id: 'develop',
    number: '03',
    title: 'Develop',
    copy: 'I make sure all functionalities work for all your needs, on all platforms required.',
  },
  {
    id: 'maintain',
    number: '04',
    title: 'Maintain',
    copy: 'I ensure to keep your project up and running and keep thinking about new strategies and ideas.',
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]
