import { Step } from 'allure-cookies';
import { Browser } from "selenidejs";

export class Signin {

  private readonly browser: Browser;

  constructor(browser: Browser) {
    this.browser = browser;
  }

  @Step()
  async open() {
    await this.browser.open('https://antongshortpoint.sharepoint.com/sites/HomeSite');
  }

  @Step()
  async login(username = 'sptestautomation@antongshortpoint.onmicrosoft.com', password = 'Testautomation1') {
    await this.browser.element('[ type = "email" ]').setValue(username);
    await this.browser.element('[ value = "Next" ]').click();
    await this.browser.element('[ type = "password" ]').setValue(password);
    await this.browser.element('[ value = "Sign in" ]').click();
    await this.browser.element('[ value = "No" ]').click();
  }

}
