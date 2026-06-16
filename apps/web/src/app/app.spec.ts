import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('locale routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    });
  });

  it.each([
    ['/es', 'Desarrollador Full Stack'],
    ['/en', 'Full Stack Developer'],
  ])('renders complete localized content for %s', async (url, expectedText) => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl(url);

    expect(harness.routeNativeElement?.textContent).toContain(expectedText);
    expect(harness.routeNativeElement?.querySelectorAll('main section')).toHaveLength(5);
    expect(harness.routeNativeElement?.querySelector('a[href^="mailto:"]')?.textContent).toContain(
      url === '/es' ? 'Contactar por correo' : 'Contact by email',
    );
  });
});
