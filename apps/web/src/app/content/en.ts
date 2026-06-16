import { PortfolioContent } from './portfolio-content.model';

export const EN_CONTENT = {
  locale: 'en',
  metadata: {
    title: 'Salvador Rodríguez Blanco | Full Stack Developer in Málaga',
    description:
      'Portfolio of Salvador Rodríguez Blanco, a Málaga-based Full Stack Developer focused on Java, Spring Boot, Angular, TypeScript, and AI-assisted engineering.',
  },
  navigation: {
    label: 'Primary navigation',
    localeLabel: 'Change language',
    items: [
      { sectionId: 'profile', label: 'Profile' },
      { sectionId: 'capabilities', label: 'Capabilities' },
      { sectionId: 'journey', label: 'Journey' },
      { sectionId: 'work', label: 'Work' },
      { sectionId: 'contact', label: 'Contact' },
    ],
  },
  hero: {
    eyebrow: 'Engineering with judgment',
    name: 'Salvador Rodríguez Blanco',
    role: 'Full Stack Developer',
    summary:
      'I build understandable, maintainable software by combining solid foundations with AI tools that accelerate delivery without replacing human verification.',
    location: 'Málaga, Spain',
  },
  sections: [
    {
      id: 'profile',
      eyebrow: '01 · Profile',
      title: 'Technology in service of real problems.',
      body: [
        'I am a Full Stack Developer based in Málaga. I turn complex needs into systems that are clear, useful, and sustainable.',
        'I use AI as a productivity tool: I define the problem, set constraints, review the evidence, and remain accountable for the outcome.',
      ],
    },
    {
      id: 'capabilities',
      eyebrow: '02 · Capabilities',
      title: 'From the domain model to an accessible interface.',
      body: [
        'I design end-to-end solutions with Java, Spring Boot, Angular, and TypeScript, supported by relational and document databases.',
        'I prioritize explicit contracts, testing, observability, and architecture that supports change without turning every improvement into a rebuild.',
      ],
      highlights: [
        'Java · Spring Boot',
        'Angular · TypeScript',
        'MySQL · PostgreSQL · MongoDB',
        'AI-assisted engineering with human verification',
      ],
    },
    {
      id: 'journey',
      eyebrow: '03 · Journey',
      title: 'Pharmacy taught me to listen before building.',
      body: [
        'My pharmacy experience reinforced an essential idea: every process involves people, context, and consequences. A technically correct solution can fail when it ignores that reality.',
        'That perspective guides my transition into development: understand the domain, reduce friction, and deliver tools that help people work better.',
      ],
    },
    {
      id: 'work',
      eyebrow: '04 · Work',
      title: 'Evidence is published when it can be verified.',
      body: [
        'This portfolio does not present results, clients, metrics, or integrations that are not yet supported by public, reviewable evidence.',
        'Project demonstrations will be added as clearly labelled work in progress or prototypes. Until then, available public code can be reviewed on GitHub.',
      ],
    },
    {
      id: 'contact',
      eyebrow: '05 · Contact',
      title: 'Let’s discuss the problem you need to solve.',
      body: [
        'I am open to professional opportunities and collaborations where technical quality, continuous learning, and practical impact matter.',
        'Email is the primary channel. A downloadable résumé will be added when the final file is available.',
      ],
    },
  ],
  actions: {
    primary: {
      label: 'Contact by email',
      href: 'mailto:salvadorrodriguezblanco.dev@gmail.com',
    },
    cv: {
      label: 'Download résumé',
      unavailableLabel: 'Résumé coming soon',
      available: false,
    },
    socials: [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/salvador-rodr%C3%ADguez-blanco-326505396',
      },
      { id: 'github', label: 'GitHub', href: 'https://github.com/ShalvoriuS' },
      { id: 'x', label: 'X', href: 'https://x.com/SalvoriusDev' },
    ],
  },
  accessibility: {
    skipToContent: 'Skip to main content',
    openNavigation: 'Open navigation',
    closeNavigation: 'Close navigation',
    externalLinkSuffix: 'opens in a new tab',
  },
} as const satisfies PortfolioContent;
