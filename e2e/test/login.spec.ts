import { epicSadFace } from '../fixtures/error-messages.fixture';
import { baseurl, inventoryUrl } from '../fixtures/urls.fixture';
import { invalidUser, validUser } from '../fixtures/user_data.fixture';
import { LoginPage } from '../pages/login.page';
import { getWindowLocation } from '../utils/get-window-location.util';

let loginPage: LoginPage = null;

fixture`Login suite`.page`${baseurl}`.beforeEach(async t => {
  loginPage = new LoginPage();
  return t;
});

test('Login with a valid user', async t => {
  await loginPage.typeInUserNameField(validUser.userName);
  await loginPage.typeInPasswordField(validUser.password);
  await loginPage.clickInLoginButton();
  await t.expect(await getWindowLocation()).eql(inventoryUrl);
});

test('Login with an invalid user', async t => {
  await loginPage.typeInUserNameField(invalidUser.userName);
  await loginPage.typeInPasswordField(invalidUser.password);
  await loginPage.clickInLoginButton();
  await t.expect(loginPage.errorMessage.innerText).eql(epicSadFace);
});
