import { It } from './base';


describe('Test tasks', () => {

	It({ name: 'First'  }, async (app) => {
    await app.signin.open();
    await app.signin.login();
    await app.home.startEvaluation();
    await app.goToNextTab();
    await app.task.shouldBeOpened();
	});

  It({ name: 'Second' }, async (app) => {
    await app.signin.open();
    await app.signin.login();
    await app.home.startEvaluation();
    await app.goToNextTab();
    await app.task.shouldHaveCarouselItems(['Picture 1', 'Picture 2', 'Picture 3', 'Picture 4'], 3);
  });

  It({ name: 'Third', skip: true }, async (app) => {
    await app.signin.open();
    await app.signin.login();
    await app.home.startEvaluation();
    await app.goToNextTab();
    // await app.home.shouldHaveAnimationsWorking();
  });

});
