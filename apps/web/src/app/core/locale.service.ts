import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Locale } from '../content/portfolio-content.model';

const STORAGE_KEY = 'portfolio-locale';

interface LocaleStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const unavailableStorage: LocaleStorage = {
  getItem: () => null,
  setItem: () => undefined,
};

export const LOCALE_STORAGE = new InjectionToken<LocaleStorage>('LOCALE_STORAGE', {
  providedIn: 'root',
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    return isPlatformBrowser(platformId) ? window.localStorage : unavailableStorage;
  },
});

export function resolveLocale(candidate: string | null | undefined): Locale {
  return candidate === 'en' || candidate === 'es' ? candidate : 'es';
}

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly router = inject(Router);
  private readonly storage = inject(LOCALE_STORAGE);

  persistedLocale(): Locale {
    return resolveLocale(this.storage.getItem(STORAGE_KEY));
  }

  rememberLocale(locale: Locale): void {
    this.storage.setItem(STORAGE_KEY, locale);
  }

  async selectLocale(locale: Locale): Promise<boolean> {
    this.rememberLocale(locale);
    return this.router.navigateByUrl(`/${locale}`);
  }
}
