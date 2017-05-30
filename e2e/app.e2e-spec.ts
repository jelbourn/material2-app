import { M2Page } from './app.po';

describe('m2-app App', () => {
  let page: M2Page;

  beforeEach(() => {
    page = new M2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    page.getParagraphText().then(output => expect(output).toEqual('m2 works!'));
  });
});
