import { t } from 'testcafe';
import { LoginPage } from '../pages/login.page';
import { getWindowLocation } from '../utils/get-window-location.util';
import { inventoryUrl } from './urls.fixture';
import { validUser } from './user_data.fixture';

export async function loginUser(user: typeof validUser) {
  const loginPage = new LoginPage();
  await loginPage.typeInUserNameField(user.userName);
  await loginPage.typeInPasswordField(user.password);
  await loginPage.clickInLoginButton();
  await t.expect(await getWindowLocation()).eql(inventoryUrl);
}
