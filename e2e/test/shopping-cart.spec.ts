import { loginUser } from '../fixtures/login-user.fixture';
import { baseurl, cartUrl } from '../fixtures/urls.fixture';
import { validUser } from '../fixtures/user_data.fixture';
import { InventoryPage } from '../pages/inventory.page';
import { getWindowLocation } from '../utils/get-window-location.util';

let inventoryPage: InventoryPage = null;

fixture`Shopping_cart suite`.page`${baseurl}`.beforeEach(async t => {
  inventoryPage = new InventoryPage();
  await loginUser(validUser);

  return t;
});

test('Navigate to the shopping cart', async t => {
  await inventoryPage.clickInShoppingCartLInk();
  await t.expect(await getWindowLocation()).eql(cartUrl);
});
