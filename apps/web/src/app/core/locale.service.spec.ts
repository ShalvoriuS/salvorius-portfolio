import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LocaleService, LOCALE_STORAGE, resolveLocale } from './locale.service';

describe('resolveLocale', () => {
  it.each([
    ['en', 'en'],
    ['es', 'es'],
  ] as const)('accepts the supported locale %s', (candidate, expected) => {
    expect(resolveLocale(candidate)).toBe(expected);
  });

  it.each([null, undefined, '', 'fr', 'EN'])(
    'falls back unsupported locale %s to Spanish',
    (candidate) => {
      expect(resolveLocale(candidate)).toBe('es');
    },
  );
});

describe('LocaleService', () => {
  const storage = {
    getItem: vi.fn<(key: string) => string | null>(),
    setItem: vi.fn<(key: string, value: string) => void>(),
  };

  beforeEach(() => {
    storage.getItem.mockReset();
    storage.setItem.mockReset();

    TestBed.configureTestingModule({
      providers: [provideRouter([]), LocaleService, { provide: LOCALE_STORAGE, useValue: storage }],
    });
  });

  it('falls back to Spanish when persisted data is unsupported', () => {
    storage.getItem.mockReturnValue('fr');

    expect(TestBed.inject(LocaleService).persistedLocale()).toBe('es');
  });

  it('persists a supported locale before navigating to its route', async () => {
    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);

    await TestBed.inject(LocaleService).selectLocale('en');

    expect(storage.setItem).toHaveBeenCalledWith('portfolio-locale', 'en');
    expect(navigate).toHaveBeenCalledWith('/en');
  });
});
