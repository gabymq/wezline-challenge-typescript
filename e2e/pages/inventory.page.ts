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
}
