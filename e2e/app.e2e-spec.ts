import { PluralsightExamplePage } from './app.po';

describe('pluralsight-example App', function() {
  let page: PluralsightExamplePage;

  beforeEach(() => {
    page = new PluralsightExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
