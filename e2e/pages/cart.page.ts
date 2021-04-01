import { Selector } from 'testcafe';

export class CartPage {
  async getItemData(item: number) {
    const parentSelector = `.cart_item:nth-child(${item + 2})`;
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
}
