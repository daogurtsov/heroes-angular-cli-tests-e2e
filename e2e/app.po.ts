import { browser, element, by } from 'protractor';

export class HeroesWebpackTddPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphSubtitle() {
    return element(by.css('app-root h2')).getText();
  }

  getNameInput() {
    return element(by.css('app-root input')).getAttribute('value');
  }
}
