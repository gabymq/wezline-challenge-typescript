import { t } from 'testcafe';
import { errorMessage } from '../fixtures/error-messages.fixture';
import { loginUser } from '../fixtures/login-user.fixture';
import {
  baseurl,
  cartUrl,
  checkoutUrl,
  checkoutUrlTwo,
} from '../fixtures/urls.fixture';
import { informationUser, validUser } from '../fixtures/user_data.fixture';
import { CartPage } from '../pages/cart.page';
import { CheckoutStpOne } from '../pages/checkoutStpOne.page';
import { CheckoutStpTwo } from '../pages/checkoutStpTwo.page';
import { InventoryPage } from '../pages/inventory.page';
import { getWindowLocation } from '../utils/get-window-location.util';

let inventoryPage: InventoryPage = null;
let cartPage: CartPage = null;
let checkoutStpOnePage: CheckoutStpOne = null;
let checkoutStpTwoPage: CheckoutStpTwo = null;

fixture`Shopping_cart suite`.page`${baseurl}`.beforeEach(async t => {
  inventoryPage = new InventoryPage();
  cartPage = new CartPage();
  checkoutStpOnePage = new CheckoutStpOne();
  checkoutStpTwoPage = new CheckoutStpTwo();

  await loginUser(validUser);

  return t;
});

test('Navigate to the shopping cart', async t => {
  await inventoryPage.clickInShoppingCartLInk();
  await t.expect(await getWindowLocation()).eql(cartUrl);
});

test('Add a single item to the shopping cart', async t => {
  const itemNumber = 1;
  const itemData = await inventoryPage.getItemData(itemNumber);

  await inventoryPage.clickAddToCart(itemNumber);
  await t.expect(await inventoryPage.getShoppingCartBadge()).eql('1');
  await inventoryPage.clickInShoppingCartLInk();
  await t.expect(await getWindowLocation()).eql(cartUrl);

  const cartItemData = await cartPage.getItemData(itemNumber);

  await t.expect(itemData.name).eql(cartItemData.name);
  await t.expect(itemData.description).eql(cartItemData.description);
  await t.expect(itemData.price).contains(cartItemData.price);
});

test('Add multiples items to the shopping cart', async t => {
  const itemNumbers = [3, 5, 6];
  const data = [];

  for await (const itemNumber of itemNumbers) {
    const itemData = await inventoryPage.getItemData(itemNumber);

    await inventoryPage.clickAddToCart(itemNumber);
    data.push(itemData);
  }

  await t
    .expect(await inventoryPage.getShoppingCartBadge())
    .eql(`${itemNumbers.length}`);
  await inventoryPage.clickInShoppingCartLInk();
  await t.expect(await getWindowLocation()).eql(cartUrl);

  for (let index = 0; index < data.length; index++) {
    const itemData = data[index];
    const cartItemData = await cartPage.getItemData(index + 1);

    await t.expect(itemData.name).eql(cartItemData.name);
    await t.expect(itemData.description).eql(cartItemData.description);
    await t.expect(itemData.price).contains(cartItemData.price);
  }
});

test('Continue missing mail information', async t => {
  const itemNumbers = [3, 5, 6];
  const data = [];

  for await (const itemNumber of itemNumbers) {
    const itemData = await inventoryPage.getItemData(itemNumber);

    await inventoryPage.clickAddToCart(itemNumber);
    data.push(itemData);
  }

  await t
    .expect(await inventoryPage.getShoppingCartBadge())
    .eql(`${itemNumbers.length}`);
  await inventoryPage.clickInShoppingCartLInk();
  await t.expect(await getWindowLocation()).eql(cartUrl);

  for (let index = 0; index < data.length; index++) {
    const itemData = data[index];
    const cartItemData = await cartPage.getItemData(index + 1);

    await t.expect(itemData.name).eql(cartItemData.name);
    await t.expect(itemData.description).eql(cartItemData.description);
    await t.expect(itemData.price).contains(cartItemData.price);
  }

  await cartPage.clickCheckout();
  await t.expect(await getWindowLocation()).eql(checkoutUrl);

  await checkoutStpOnePage.clickContinueButton();
  await t.expect(checkoutStpOnePage.errorMessage.innerText).eql(errorMessage);
});

test("Fill user's information", async t => {
  const itemNumbers = [3, 5, 6];
  const data = [];

  for await (const itemNumber of itemNumbers) {
    const itemData = await inventoryPage.getItemData(itemNumber);

    await inventoryPage.clickAddToCart(itemNumber);
    data.push(itemData);
  }

  await t
    .expect(await inventoryPage.getShoppingCartBadge())
    .eql(`${itemNumbers.length}`);
  await inventoryPage.clickInShoppingCartLInk();
  await t.expect(await getWindowLocation()).eql(cartUrl);

  for (let index = 0; index < data.length; index++) {
    const itemData = data[index];
    const cartItemData = await cartPage.getItemData(index + 1);

    await t.expect(itemData.name).eql(cartItemData.name);
    await t.expect(itemData.description).eql(cartItemData.description);
    await t.expect(itemData.price).contains(cartItemData.price);
  }

  await cartPage.clickCheckout();
  await t.expect(await getWindowLocation()).eql(checkoutUrl);

  await checkoutStpTwoPage.typeInFirstNameField(informationUser.firstName);
  await checkoutStpTwoPage.typeInLastNameField(informationUser.lastName);
  await checkoutStpTwoPage.typeInZipCodeField(informationUser.zipCode);

  await checkoutStpOnePage.clickContinueButton();
  await t.expect(await getWindowLocation()).eql(checkoutUrlTwo);
});
