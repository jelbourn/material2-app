import { M2AppPage } from './app.po';

describe('m2-app App', () => {
  let page: M2AppPage;

  beforeEach(() => {
    page = new M2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
