import { loginUser } from '../fixtures/login-user.fixture';
import { baseurl } from '../fixtures/urls.fixture';
import { validUser } from '../fixtures/user_data.fixture';
import { InventoryPage } from '../pages/inventory.page';
import { getWindowLocation } from '../utils/get-window-location.util';

let inventoryPage: InventoryPage = null;

fixture`logout suite`.page`${baseurl}`.beforeEach(async t => {
  inventoryPage = new InventoryPage();
  await loginUser(validUser);

  return t;
});

test('Logout from products page', async t => {
  await inventoryPage.clickInHamburgerButton();
  await inventoryPage.clickInLogoutLink();
  await t.expect(await getWindowLocation()).eql(baseurl);
});
