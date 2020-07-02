import { Step } from 'allure-cookies';
import { Browser } from "selenidejs";

export class Home {

  private readonly browser: Browser;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  @Step()
  async startEvaluation() {
    await this.browser.element('[ data-shortpoint-type="button" ]').click();
  }

}
