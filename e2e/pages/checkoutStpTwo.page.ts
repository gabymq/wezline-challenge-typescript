import { Selector, t } from 'testcafe';

export class CheckoutStpTwo {
  firstNameField = Selector('#first-name');
  lastNameField = Selector('#last-name');
  zipCodeField = Selector('#postal-code');
  finishButton = Selector('#finish');

  async typeInFirstNameField(value: string) {
    return await t.typeText(this.firstNameField, value);
  }

  async getItemData(itemNumber: number) {
    const parentSelector = `.inventory_item:nth-child(${itemNumber})`;
    const name = await Selector(`${parentSelector} .inventory_item_name`)
      .innerText;
    const description = await Selector(`${parentSelector} .inventory_item_desc`)
      .innerText;
    const price = await Selector(`${parentSelector} .inventory_item_price`)
      .innerText;

    return {
      name,
      description,
      price,
    };
  }

  async getShoppingCartBadge() {
    return Selector('.shopping_cart_badge').innerText;
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

  async clickFinishButton() {
    return await t.click(this.clickFinishButton);
  }
}
