import { HeroesWebpackTddPage } from './app.po';

describe('heroes-webpack-tdd App', function() {
  let page: HeroesWebpackTddPage;

  beforeEach(() => {
    page = new HeroesWebpackTddPage();
  });

  it('should display message saying Tour of Heroes', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });

  it('should display message saying Windstorm details!', () => {
    page.navigateTo();
    expect(page.getParagraphSubtitle()).toEqual('Windstorm details!');
  });

  it('default name should be Windstorm', () => {
    page.navigateTo();
    expect(page.getNameInput()).toEqual('Windstorm');
  });
});
