import { SimpleShoppingPage } from './app.po';

describe('simple-shopping App', function() {
  let page: SimpleShoppingPage;

  beforeEach(() => {
    page = new SimpleShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
