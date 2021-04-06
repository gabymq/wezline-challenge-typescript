import { Selector, t } from 'testcafe';

export class CheckoutStpOne {
  continueButton = Selector('#continue');
  errorMessage = Selector('h3[data-test="error"]');

  async clickContinueButton() {
    return await t.click(this.continueButton);
  }
}
