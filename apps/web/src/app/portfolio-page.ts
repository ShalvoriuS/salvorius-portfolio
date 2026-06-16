import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EN_CONTENT } from './content/en';
import { ES_CONTENT } from './content/es';
import { Locale, PortfolioContent } from './content/portfolio-content.model';
import { LocaleService } from './core/locale.service';
import { ContactActionsComponent } from './shared/contact-actions.component';
import { SiteHeaderComponent } from './shared/site-header.component';
import { StorySectionComponent } from './shared/story-section.component';

const CONTENT_BY_LOCALE: Record<Locale, PortfolioContent> = {
  es: ES_CONTENT,
  en: EN_CONTENT,
};

@Component({
  selector: 'app-portfolio-page',
  imports: [ContactActionsComponent, SiteHeaderComponent, StorySectionComponent],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss',
})
export class PortfolioPage {
  private readonly route = inject(ActivatedRoute);
  private readonly localeService = inject(LocaleService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly locale = this.route.snapshot.data['locale'] as Locale;
  protected readonly content = CONTENT_BY_LOCALE[this.locale];

  constructor() {
    if (
      this.route.snapshot.data['restorePersistedLocale'] === true &&
      isPlatformBrowser(this.platformId)
    ) {
      void this.localeService.selectLocale(this.localeService.persistedLocale());
      return;
    }

    this.localeService.rememberLocale(this.locale);
    this.document.documentElement.lang = this.locale;
    this.title.setTitle(this.content.metadata.title);
    this.meta.updateTag({ name: 'description', content: this.content.metadata.description });
    this.meta.updateTag({ property: 'og:title', content: this.content.metadata.title });
    this.meta.updateTag({
      property: 'og:description',
      content: this.content.metadata.description,
    });
  }

  protected selectLocale(locale: Locale): void {
    void this.localeService.selectLocale(locale);
  }

  protected focusMainContent(event: Event): void {
    event.preventDefault();

    const mainContent = this.document.getElementById('main-content');
    mainContent?.focus();
    mainContent?.scrollIntoView({ block: 'start' });
  }
}
