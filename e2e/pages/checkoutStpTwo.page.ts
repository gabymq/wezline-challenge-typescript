import { Selector, t } from 'testcafe';

export class CheckoutStpTwo {
  firstNameField = Selector('#first-name');

  lastNameField = Selector('#last-name');

  zipCodeField = Selector('#postal-code');
  async typeInFirstNameField(value: string) {
    return await t.typeText(this.firstNameField, value);
  }

  async typeInLastNameField(value: string) {
    return await t.typeText(this.lastNameField, value);
  }

  async typeInZipCodeField(value: string) {
    return await t.typeText(this.zipCodeField, value);
  }

  async clickContinueButton() {
    return await t.click(this.clickContinueButton);
  }
}
