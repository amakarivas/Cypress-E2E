import { cartPage } from "../../pages/cart";
const cartObj = new cartPage();
import testData from "../../fixtures/testData.json";
describe("add to cart", () => {
  before(() => {
    cy.login(testData.login.email, testData.login.password);
  });
  it("cart", () => {
    cartObj.searchProduct(testData.product.productName);
    cartObj.addToCart();
    cartObj.verifySuccess().should("contain", testData.message.successMessage).and("contain", testData.product.productName);
  });
});