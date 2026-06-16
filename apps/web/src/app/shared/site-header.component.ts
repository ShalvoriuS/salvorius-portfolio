import { Component, input, output } from '@angular/core';
import { Locale, PortfolioContent } from '../content/portfolio-content.model';

@Component({
  selector: 'app-site-header',
  template: `
    <header class="site-header">
      <a class="brand" href="#profile" aria-label="Salvador Rodríguez Blanco">SRB</a>
      <nav [attr.aria-label]="content().navigation.label">
        @for (item of content().navigation.items; track item.sectionId) {
          <a [href]="'#' + item.sectionId">{{ item.label }}</a>
        }
      </nav>
      <div
        class="locale-switcher"
        role="group"
        [attr.aria-label]="content().navigation.localeLabel"
      >
        @for (option of locales; track option) {
          <button
            type="button"
            [attr.aria-pressed]="locale() === option"
            (click)="localeSelected.emit(option)"
          >
            {{ option.toUpperCase() }}
          </button>
        }
      </div>
    </header>
  `,
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  readonly content = input.required<PortfolioContent>();
  readonly locale = input.required<Locale>();
  readonly localeSelected = output<Locale>();
  protected readonly locales: readonly Locale[] = ['es', 'en'];
}
