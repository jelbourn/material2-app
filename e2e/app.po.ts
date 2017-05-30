import { browser, by, element } from 'protractor';

export class M2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('m2-root h1')).getText();
  }
}
