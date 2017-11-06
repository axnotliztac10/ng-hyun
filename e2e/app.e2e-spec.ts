import { HyundaiPage } from './app.po';

describe('hyundai App', () => {
  let page: HyundaiPage;

  beforeEach(() => {
    page = new HyundaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hyu works!');
  });
});
