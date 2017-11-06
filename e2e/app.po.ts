import { browser, element, by } from 'protractor';

export class HyundaiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hyu-root h1')).getText();
  }
}
