import { BillingProductApplicationPage } from './app.po';

describe('billing-product-application App', () => {
  let page: BillingProductApplicationPage;

  beforeEach(() => {
    page = new BillingProductApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
