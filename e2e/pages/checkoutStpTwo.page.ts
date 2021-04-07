import { Selector, t } from 'testcafe';

export class CheckoutStpTwo {
  finishButton = Selector('#finish');
  async getItemData(itemNumber: number) {
    const parentSelector = `.cart_item:nth-child(${itemNumber + 2})`;
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
  async clickFinishButton() {
    return await t.click(this.finishButton);
  }
}
