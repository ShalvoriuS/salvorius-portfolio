import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type FoundationLocale = 'es' | 'en';

@Component({
  selector: 'app-foundation-page',
  template: `
    <main>
      <p class="eyebrow">Portfolio foundation</p>
      <h1>Foundation ready</h1>
      <p data-testid="locale-route">Locale route: {{ locale }}</p>
    </main>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100dvh;
    }

    main {
      display: grid;
      min-height: 100dvh;
      place-content: center;
      gap: 0.75rem;
      padding: 2rem;
      text-align: center;
    }

    .eyebrow {
      color: #86efac;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    h1,
    p {
      margin: 0;
    }
  `,
})
export class FoundationPage {
  protected readonly locale = inject(ActivatedRoute).snapshot.data['locale'] as FoundationLocale;
}
