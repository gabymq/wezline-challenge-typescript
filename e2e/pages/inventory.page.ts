import { Selector, t } from 'testcafe';

export class InventoryPage {
  hamburgerButton = Selector('#react-burger-menu-btn');

  logOutLink = Selector('#logout_sidebar_link');
  shoppingCartLink = Selector('.shopping_cart_link');

  async clickInHamburgerButton() {
    return await t.click(this.hamburgerButton);
  }

  async clickInLogoutLink() {
    return await t.click(this.logOutLink);
  }

  async clickInShoppingCartLInk() {
    return await t.click(this.shoppingCartLink);
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

  async clickAddToCart(item: number) {
    const selector = `.inventory_item:nth-child(${item}) .btn_inventory`;
    return await t.click(selector);
  }

  async getShoppingCartBadge() {
    return Selector('.shopping_cart_badge').innerText;
  }
}
