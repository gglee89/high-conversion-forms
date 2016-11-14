import { HighConversionFormsPage } from './app.po';

describe('high-conversion-forms App', function() {
  let page: HighConversionFormsPage;

  beforeEach(() => {
    page = new HighConversionFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
