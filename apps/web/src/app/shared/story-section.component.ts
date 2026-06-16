import { Component, input } from '@angular/core';
import { PortfolioContent } from '../content/portfolio-content.model';

type StorySection = PortfolioContent['sections'][number];

@Component({
  selector: 'app-story-section',
  template: `
    <section [id]="section().id" [attr.aria-labelledby]="section().id + '-title'">
      <div class="section-grid">
        <p class="eyebrow">{{ section().eyebrow }}</p>
        <div>
          <h2 [id]="section().id + '-title'">{{ section().title }}</h2>
          @for (paragraph of section().body; track paragraph) {
            <p>{{ paragraph }}</p>
          }
          @if (section().highlights; as highlights) {
            <ul>
              @for (highlight of highlights; track highlight) {
                <li>{{ highlight }}</li>
              }
            </ul>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './story-section.component.scss',
})
export class StorySectionComponent {
  readonly section = input.required<StorySection>();
}
