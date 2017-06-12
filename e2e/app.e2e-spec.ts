import { Material2AppPage } from './app.po';

describe('material2-app App', () => {
  let page: Material2AppPage;

  beforeEach(() => {
    page = new Material2AppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
