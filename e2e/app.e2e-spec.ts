import { AnimationsV4Page } from './app.po';

describe('animations-v4 App', () => {
  let page: AnimationsV4Page;

  beforeEach(() => {
    page = new AnimationsV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
