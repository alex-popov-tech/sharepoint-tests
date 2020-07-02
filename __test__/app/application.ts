import { Home } from './home';
import { Task } from './task';
import { Signin } from './signin';
import { Browser } from 'selenidejs';


export class Application {

	private readonly browser: Browser;
	readonly home: Home;
  readonly task: Task;
	readonly signin: Signin;

	constructor(browser: Browser) {
		this.browser = browser;
		this.home = new Home(this.browser);
    this.task = new Task(this.browser);
		this.signin = new Signin(this.browser);
	}

  async goToNextTab() {
    await this.browser.goToNextTab();
  }
}
