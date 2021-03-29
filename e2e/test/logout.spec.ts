import { loginUser } from '../fixtures/login-user.fixture';
import { baseurl } from '../fixtures/urls.fixture';
import { validUser } from '../fixtures/user_data.fixture';
import { LogoutPage } from '../pages/logout.page';
import { getWindowLocation } from '../utils/get-window-location.util';

let logOutPage: LogoutPage = null;

fixture`logout suite`.page`${baseurl}`.beforeEach(async t => {
  logOutPage = new LogoutPage();
  await loginUser(validUser);

  return t;
});

test('Logout from products page', async t => {
  await logOutPage.clickInHamburgerButton();
  await logOutPage.clickInLogoutLink();
  await t.expect(await getWindowLocation()).eql(baseurl);
});
