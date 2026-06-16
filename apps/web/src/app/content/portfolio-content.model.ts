export type Locale = 'es' | 'en';
export type SectionId = 'profile' | 'capabilities' | 'journey' | 'work' | 'contact';

export interface PortfolioContent {
  locale: Locale;
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    label: string;
    localeLabel: string;
    items: readonly { sectionId: SectionId; label: string }[];
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    summary: string;
    location: string;
  };
  sections: readonly {
    id: SectionId;
    eyebrow: string;
    title: string;
    body: readonly string[];
    highlights?: readonly string[];
  }[];
  actions: {
    primary: { label: string; href: string };
    cv: { label: string; unavailableLabel: string; available: false };
    socials: readonly { id: 'linkedin' | 'github' | 'x'; label: string; href: string }[];
  };
  accessibility: {
    skipToContent: string;
    openNavigation: string;
    closeNavigation: string;
    externalLinkSuffix: string;
  };
}

export function contentShape(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(contentShape);
  }

  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, child]) => [key, contentShape(child)]),
    );
  }

  return typeof value;
}
