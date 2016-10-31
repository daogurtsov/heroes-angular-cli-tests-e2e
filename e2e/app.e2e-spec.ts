import { HeroesWebpackTddPage } from './app.po';
import { browser } from 'protractor';

describe('heroes-webpack-tdd App', function() {
  let page: HeroesWebpackTddPage;

  beforeEach(() => {
    page = new HeroesWebpackTddPage();
  });

  it('should display message saying "Tour of Heroes"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });

  it('should display message saying "My Heroes"', () => {
    page.navigateTo();
    expect(page.getParagraphSubtitle()).toEqual('My Heroes!');
  });

  it('default name should be "Mr. Nice"', () => {
    page.navigateTo();
    expect(page.getNameInput()).toEqual('Mr. Nice');
  });

  it('should show list of heroes', () => {
    page.navigateTo();
    expect(page.getListOfHeroes()).toBeDefined();
  });

  it('select hero from list', () => {
    page.navigateTo();
    browser.debugger();
    let li = page.getHeroFromHeroes(); 
    li.click().then(function(){
      expect(li.getAttribute('class')).toEqual('selected');
     })   
  });
});
