import { PortalsPage } from './app.po';

describe('portals App', () => {
  let page: PortalsPage;

  beforeEach(() => {
    page = new PortalsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
