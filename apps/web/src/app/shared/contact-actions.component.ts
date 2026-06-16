import { Component, input } from '@angular/core';
import { PortfolioContent } from '../content/portfolio-content.model';

@Component({
  selector: 'app-contact-actions',
  template: `
    <div class="actions">
      <a class="primary" [href]="content().actions.primary.href">
        {{ content().actions.primary.label }}
      </a>
      <span class="secondary" aria-disabled="true">
        {{ content().actions.cv.unavailableLabel }}
      </span>
    </div>
    <ul [attr.aria-label]="content().navigation.label">
      @for (social of content().actions.socials; track social.id) {
        <li>
          <a [href]="social.href" target="_blank" rel="noopener noreferrer">
            {{ social.label }}
            <span class="sr-only">({{ content().accessibility.externalLinkSuffix }})</span>
          </a>
        </li>
      }
    </ul>
  `,
  styleUrl: './contact-actions.component.scss',
})
export class ContactActionsComponent {
  readonly content = input.required<PortfolioContent>();
}
