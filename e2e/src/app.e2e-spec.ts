import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Protractor 訓練營');
  });

  afterEach(async () => {
    const cap = await browser.getCapabilities();
    browser.browserName = cap.get('browserName');

    if (['internet explorer', 'firefox'].includes(browser.browserName)) { return; }

    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
