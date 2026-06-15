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
    ['/es', 'Locale route: es'],
    ['/en', 'Locale route: en'],
  ])('renders the %s foundation route', async (url, expectedText) => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl(url);

    expect(harness.routeNativeElement?.textContent).toContain(expectedText);
  });
});
