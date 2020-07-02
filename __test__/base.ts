import { attachScreenshot, createAttachment, setScreenshotProvider } from 'allure-cookies';
import { Browser } from 'selenidejs';
import { Application } from './app';

jest.setTimeout(600 * 1000);

export const It = (
  options: { name: string, focus?: boolean, skip?: boolean },
  testFunc: (app: Application) => Promise<void>,
) => {

  const func = async () => {

    const browser = Browser
      .chromeWith()
      .timeout(5 * 1000)
      .build();
    const app = new Application(browser);

    setScreenshotProvider(() => browser.screenshot());

    try {
      await testFunc(app);
    } catch (error) {

      await attachScreenshot(options.name);
      await browser.driver.manage()
        .logs()
        .get('browser')
        .then((logs) => createAttachment('browser_logs.json', Buffer.from(JSON.stringify(logs)), 'application/json'));
      await browser.driver.getPageSource()
        .then((html) => createAttachment('page_source.html', Buffer.from(html), 'text/html'));
      throw error;
    } finally {
      await browser.quit();
    }
  };

  if (options.focus) {
    it.only(options.name, func);
  } else if (options.skip) {
    it.skip(options.name, func);
  } else {
    it(options.name, func);
  }
};

