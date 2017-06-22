import { FailedProjectPage } from './app.po';

describe('failed-project App', () => {
  let page: FailedProjectPage;

  beforeEach(() => {
    page = new FailedProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
