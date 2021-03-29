import { Selector, t } from 'testcafe';

export class LogoutPage {
  hamburgerButton = Selector('#react-burger-menu-btn');

  logOutLink = Selector('#logout_sidebar_link');

  async clickInHamburgerButton() {
    return await t.click(this.hamburgerButton);
  }

  async clickInLogoutLink() {
    return await t.click(this.logOutLink);
  }
}
