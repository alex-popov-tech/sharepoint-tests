import { Step } from "allure-cookies";
import { be, Browser, have } from "selenidejs";

export class Task {
  private readonly browser: Browser;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  @Step()
  async shouldBeOpened() {
    await this.browser.should(have.url('https://antongshortpoint.sharepoint.com/sites/HomeSite/internalsite/testtask'));
  }

  @Step()
  async shouldHaveCarouselItems(items: string[], visibleItemsCount: number) {
    for (let i = 0; i + visibleItemsCount < items.length; i += 1) {
      await this.browser.all('.slick-active')
        .filteredBy(be.visible)
        .should(have.texts(...items.slice(i, i + visibleItemsCount)));
    }
  }
}
