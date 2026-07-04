import { Speaker, DateMilestone, SubTheme } from '../types';

export const SPEAKERS: Speaker[] = [
  {
    id: 'opening-1',
    name: 'Dr. Ahmad Imron Rozuli, S.E., M.Si',
    title: 'Dean of Faculty of Social and Political Science',
    affiliation: 'Universitas Brawijaya, Indonesia',
    type: 'opening',
    avatarUrl: '/images/ahmadimron.webp',
    bio: 'Delivering the opening remarks for the Southeast Asia Futures Conference on Social Sciences 2026.',
    isTBC: false
  },
  {
    id: 'keynote-1',
    name: 'Assoc. Prof. Dr. Akmar Hayati Ahmad Ghazali',
    title: 'DEPUTY DEAN (RESEARCH & INNOVATION)',
    affiliation: 'Faculty of Modern Languages and Communication, Universiti Putra Malaysia',
    type: 'keynote',
    avatarUrl: '/images/dr_akmar.jpeg',
    bio: 'Field of supervision : Journalism / Mass COmmunication / Youth Studies / Leadership Studies',
    isTBC: false
  },
  {
    id: 'panel-1',
    name: 'Dr. Anggun Trisnanto Hari Susilo, S.IP., M.IDEA.',
    title: 'Senior Lecturer, Department of International Relations',
    affiliation: 'Faculty of Social and Political Sciences (FISIP), Universitas Brawijaya. Indonesia',
    type: 'panel',
    avatarUrl: '/images/DR ANGGUN.jpeg',
    bio: 'Dr. Anggun is an esteemed researcher specialized in International Political Economy, Southeast Asian regional integration, and developmental network dynamics.',
    isTBC: false
  },
  {
    id: 'panel-2',
    name: 'Dr. Sharifah Sofiah Syed Zainudin',
    title: 'Senior Lecturer',
    affiliation: 'Faculty of Modern Languages and Communication, Universiti Putra Malaysia',
    type: 'panel',
    avatarUrl: '/images/dr_sofiah.jpeg',
    bio: 'Fiels of supervision: Communication Technology, Development Communication, Human Communication',
    isTBC: false
  },
  {
    id: 'panel-3',
    name: 'Prof. Amran Rasli',
    title: 'Professor of Management',
    affiliation: 'Faculty of Business and Communications (FBC), INTI International University, Malaysia',
    type: 'panel',
    avatarUrl: '/images/prof-amran.jpeg',
    bio: 'Prof. Amran specialized in Human Resource Management, Service Quality, Performance Measurement and Technology Management.',
    isTBC: false
  },
  {
    id: 'panel-4',
    name: 'Assoc. Prof. Dr Muhammad Shujaat Mubarik',
    title: 'Associate Professor of Logistics and Supply Chain Management',
    affiliation: 'Heriot-Watt University, Scotland (UK)',
    type: 'panel',
    avatarUrl: '/images/dr-shujaat.png',
    bio: 'Assoc. Prof. Dr Muhammad Shujaat Mubarik specializes in Resilience, Digitalilzation, Sustainable Supply Chain Management.',
    isTBC: false
  },
  {
    id: 'panel-5',
    name: 'Prof. Agata Wiktoria Zietek',
    title: 'Professor in International Relations Department,',
    affiliation: 'Faculty of Political Science and Journalism, Maria Curie Sklodowska University (UMCS), Poland',
    type: 'panel',
    avatarUrl: '/images/prof-agata.jpg',
    bio: 'Prof. Agata Wiktoria Zietek specializes in International Relations.',
    isTBC: false
  },
  {
    id: 'panel-6',
    name: 'Dr. Doris Ogueri',
    title: 'Lecturer',
    affiliation: 'Faculty of Management, Shinawatra University, Thailand',
    type: 'panel',
    avatarUrl: '/images/dr_doris.jpeg',
    bio: 'Dr. Doris Ogueri specializes in Enviromental Science, Water Quality, Pollution Control, Enviromental Education, and Sustainability',
    isTBC: false
  },
  {
    id: 'panel-7',
    name: 'Mrs Joanne Branicki-Tolchard',
    title: 'Head of Secondary, Vice President',
    affiliation: ' One World International School Nanyang Campus, Singapore',
    type: 'panel',
    avatarUrl: '/images/mrs_joanne.jpg',
    isTBC: false
  }
];

export const DATES: DateMilestone[] = [
  {
    id: 'date-1',
    label: 'Registration & Abstract Submission',
    originalDate: '10 June 2026 – 25 September 2026',
    currentDate: '10 June 2026 – 25 September 2026',
    isActive: true,
    type: 'submission'
  },
  {
    id: 'date-2',
    label: 'Full Paper Submission & Review',
    originalDate: '25 September 2026 - 10 October 2026',
    currentDate: '25 September 2026 - 10 October 2026',
    isActive: true,
    type: 'submission'
  },
  {
    id: 'date-3',
    label: 'Conference Day',
    originalDate: '31 October - 1 November 2026',
    currentDate: '31 October - 1 November 2026',
    isActive: false,
    type: 'event'
  }
];

export const SUB_THEMES: SubTheme[] = [
  {
    number: 1,
    title: 'Digital Society and Public Communication',
    description: 'Examining the interplay between emerging media ecosystems, community voices, public spheres, and digital communication networks in democratic and trans-regional contexts.'
  },
  {
    number: 2,
    title: 'Governance, Regulation, and Public Policy',
    description: 'Analyzing state capacity, constitutional frameworks, localized regulatory hurdles, and evolving public administration strategies facing modern Southeast Asia.'
  },
  {
    number: 3,
    title: 'Technology, Artificial Intelligence, and Social Transformation',
    description: 'Investigating ethical, social, and economic disruptions of automation, algorithmisation, and systemic AI deployment on traditional workforces and daily cultures.'
  },
  {
    number: 4,
    title: 'Democracy, Participation, and Political Dynamics',
    description: 'Deconstructing grassroots movements, gender-inclusive representations, institutional check-and-balances, electoral transformations, and civic engagement paradigms.'
  },
  {
    number: 5,
    title: 'Data Governance, Privacy, and Information Integrity',
    description: 'Addressing regulatory policies for user data security, computational surveillance frameworks, and the rise of synthetic media, deepfakes, and misinformation.'
  },
  {
    number: 6,
    title: 'Social Cohesion, Public Trust, and Crisis Governance',
    description: 'Assessing strategies for national reconciliation, crisis communication, healthcare resource equity, and civic institutional resilience under high-pressure scenarios.'
  },
  {
    number: 7,
    title: 'Digital Inequality and Inclusive Development',
    description: 'Highlighting infrastructure inequities, literacy gaps, agricultural empowerment, rural connectivity programs, and policies to buffer vulnerable populations.'
  },
  {
    number: 8,
    title: 'Youth, Digital Culture, Education, and Well-being',
    description: 'Shedding light on educational technology access, youth mental health in interconnected spaces, digital identity-building, and evolving learning formats.'
  },
  {
    number: 9,
    title: 'Media, Narratives, and Public Perception',
    description: 'Probing modern cinematic expressions, virtual fandom cultural corridors, journalistic values, and changing public beliefs in the post-truth era.'
  },
  {
    number: 10,
    title: 'Regional Development, Inequality, and Social Change',
    description: 'Detailing local-regional urbanization pathways, climate risk vulnerabilities, migrant worker conditions, and geographical wealth polarizations.'
  },
  {
    number: 11,
    title: 'International Relations, Regional Cooperation, and Global Networks',
    description: 'Focusing on ASEAN centrality, strategic maritime boundaries, international development aids, climate targets co-operation, and regional peace protocols.'
  },
  {
    number: 12,
    title: 'Culture, Identity, and Society in Southeast Asia',
    description: 'Preserving indigenous knowledge systems, artistic heritages, ethnic minority rights, religious pluralism and cultural identities under rapid modernization stresses.'
  }
];

export const SDGS_INFO = [
  {
    number: 4,
    title: 'Quality Education',
    color: '#C31F33',
    description: 'Promoting inclusive education and peer collaborations across transdisciplinary research pipelines.'
  },
  {
    number: 9,
    title: 'Industry, Innovation & Infrastructure',
    color: '#F36D25',
    description: 'Fostering digital transformation interfaces and modern sustainable systems throughout Southeast Asian industries.'
  },
  {
    number: 10,
    title: 'Reduced Inequalities',
    color: '#E11484',
    description: 'Addressing structural inequalities, youth support frameworks, and regional development parity.'
  },
  {
    number: 11,
    title: 'Sustainable Cities & Communities',
    color: '#F99D26',
    description: 'Guiding regional transformation, urban planning frameworks, and resilient community networks.'
  },
  {
    number: 16,
    title: 'Peace, Justice & Strong Institutions',
    color: '#136A9F',
    description: 'Supporting public trust build-ups, governance integrity, and inclusive policy dialogues.'
  },
  {
    number: 17,
    title: 'Partnerships for the Goals',
    color: '#14496B',
    description: 'Building regional and global academic and political coalitions to target sustainable growth objectives.'
  }
];

export const CORE_INFO = {
  title: 'Southeast Asia Futures Conference on Social Sciences 2026',
  abbreviation: 'SEA-FUTURES 2026',
  tagline: 'Connecting Ideas for Southeast Asia’s Future',
  location: 'Universiti Putra Malaysia, Selangor, Malaysia',
  dates: '31 October - 1 November 2026',
  host: {
    name: 'Faculty of Social and Political Sciences (FISIP), Universitas Brawijaya',
    short: 'FISIP UB',
    university: 'Universitas Brawijaya'
  },
  cohost: {
    name: 'Universiti Putra Malaysia',
    short: 'UPM'
  },
  email: 'info@seafutures2026.org',
  secondaryEmail: 'seafutures.fisip@ub.ac.id',
  subThemeMaster: 'Global Southeast Asia: Expanding Networks for Regional Development'
};
