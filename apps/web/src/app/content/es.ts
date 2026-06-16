import { PortfolioContent } from './portfolio-content.model';

export const ES_CONTENT = {
  locale: 'es',
  metadata: {
    title: 'Salvador Rodríguez Blanco | Desarrollador Full Stack en Málaga',
    description:
      'Portfolio de Salvador Rodríguez Blanco, desarrollador Full Stack en Málaga centrado en Java, Spring Boot, Angular, TypeScript e ingeniería asistida por IA.',
  },
  navigation: {
    label: 'Navegación principal',
    localeLabel: 'Cambiar idioma',
    items: [
      { sectionId: 'profile', label: 'Perfil' },
      { sectionId: 'capabilities', label: 'Capacidades' },
      { sectionId: 'journey', label: 'Trayectoria' },
      { sectionId: 'work', label: 'Trabajo' },
      { sectionId: 'contact', label: 'Contacto' },
    ],
  },
  hero: {
    eyebrow: 'Ingeniería con criterio',
    name: 'Salvador Rodríguez Blanco',
    role: 'Desarrollador Full Stack',
    summary:
      'Construyo software entendible y mantenible, combinando fundamentos sólidos con herramientas de IA que aceleran el trabajo sin sustituir la verificación humana.',
    location: 'Málaga, España',
  },
  sections: [
    {
      id: 'profile',
      eyebrow: '01 · Perfil',
      title: 'Tecnología al servicio de problemas reales.',
      body: [
        'Soy desarrollador Full Stack en Málaga. Me interesa convertir necesidades complejas en sistemas claros, útiles y sostenibles.',
        'Trabajo con IA como herramienta de productividad: defino el problema, establezco restricciones, reviso la evidencia y mantengo la responsabilidad sobre el resultado.',
      ],
    },
    {
      id: 'capabilities',
      eyebrow: '02 · Capacidades',
      title: 'Del modelo de dominio a una interfaz accesible.',
      body: [
        'Diseño soluciones de extremo a extremo con Java, Spring Boot, Angular y TypeScript, apoyadas por bases de datos relacionales y documentales.',
        'Priorizo contratos explícitos, pruebas, observabilidad y una arquitectura que permita cambiar sin convertir cada mejora en una reconstrucción.',
      ],
      highlights: [
        'Java · Spring Boot',
        'Angular · TypeScript',
        'MySQL · PostgreSQL · MongoDB',
        'Ingeniería asistida por IA con verificación humana',
      ],
    },
    {
      id: 'journey',
      eyebrow: '03 · Trayectoria',
      title: 'La farmacia me enseñó a escuchar antes de construir.',
      body: [
        'Mi experiencia en farmacia reforzó una idea esencial: detrás de cada proceso hay personas, contexto y consecuencias. Una solución técnicamente correcta puede fracasar si ignora esa realidad.',
        'Esa perspectiva guía mi transición al desarrollo: comprender el dominio, reducir fricción y entregar herramientas que ayuden a trabajar mejor.',
      ],
    },
    {
      id: 'work',
      eyebrow: '04 · Trabajo',
      title: 'La evidencia se publica cuando puede verificarse.',
      body: [
        'Este portfolio no presenta resultados, clientes, métricas ni integraciones que todavía no estén respaldados por evidencia pública y revisable.',
        'Las demostraciones de proyectos se incorporarán como trabajo en curso o prototipos claramente etiquetados. Mientras tanto, el código público disponible puede consultarse en GitHub.',
      ],
    },
    {
      id: 'contact',
      eyebrow: '05 · Contacto',
      title: 'Hablemos del problema que necesitás resolver.',
      body: [
        'Estoy abierto a oportunidades profesionales y colaboraciones donde importen la calidad técnica, el aprendizaje continuo y el impacto práctico.',
        'El correo es el canal principal. El currículum descargable se añadirá cuando el archivo definitivo esté disponible.',
      ],
    },
  ],
  actions: {
    primary: {
      label: 'Contactar por correo',
      href: 'mailto:salvadorrodriguezblanco.dev@gmail.com',
    },
    cv: {
      label: 'Descargar CV',
      unavailableLabel: 'CV disponible próximamente',
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
    skipToContent: 'Saltar al contenido principal',
    openNavigation: 'Abrir navegación',
    closeNavigation: 'Cerrar navegación',
    externalLinkSuffix: 'se abre en una pestaña nueva',
  },
} as const satisfies PortfolioContent;
