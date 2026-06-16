import { describe, expect, it } from 'vitest';
import { EN_CONTENT } from './en';
import { ES_CONTENT } from './es';
import { contentShape } from './portfolio-content.model';

describe('portfolio content', () => {
  it('keeps Spanish and English content structurally equivalent', () => {
    expect(contentShape(EN_CONTENT)).toEqual(contentShape(ES_CONTENT));
  });

  it.each([
    ['es', ES_CONTENT],
    ['en', EN_CONTENT],
  ] as const)(
    'provides complete %s navigation, narrative, actions, and accessibility copy',
    (locale, content) => {
      expect(content.locale).toBe(locale);
      expect(content.navigation.items.map((item) => item.sectionId)).toEqual([
        'profile',
        'capabilities',
        'journey',
        'work',
        'contact',
      ]);
      expect(content.sections.map((section) => section.id)).toEqual([
        'profile',
        'capabilities',
        'journey',
        'work',
        'contact',
      ]);
      expect(content.actions.primary.href).toBe('mailto:salvadorrodriguezblanco.dev@gmail.com');
      expect(content.actions.cv.available).toBe(false);
      expect(content.actions.socials.map((social) => social.id)).toEqual([
        'linkedin',
        'github',
        'x',
      ]);
      expect(content.metadata.title.length).toBeGreaterThan(20);
      expect(content.metadata.description.length).toBeGreaterThan(80);
      expect(content.accessibility.skipToContent.length).toBeGreaterThan(0);
    },
  );
});
