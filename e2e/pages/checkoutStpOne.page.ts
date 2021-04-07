import { Selector, t } from 'testcafe';

export class CheckoutStpOne {
  firstNameField = Selector('#first-name');
  lastNameField = Selector('#last-name');
  zipCodeField = Selector('#postal-code');
  continueButton = Selector('#continue');
  errorMessage = Selector('h3[data-test="error"]');

  async clickContinueButton() {
    return await t.click(this.continueButton);
  }
  async typeInFirstNameField(value: string) {
    return await t.typeText(this.firstNameField, value);
  }
  async typeInLastNameField(value: string) {
    return await t.typeText(this.lastNameField, value);
  }

  async typeInZipCodeField(value: string) {
    return await t.typeText(this.zipCodeField, value);
  }
}
