import { homePage } from "../../pages/homepage";
const homeObj = new homePage();
import testData from "../../fixtures/testData.json";
describe("add to cart", () => {
  before( () => {
     cy.login(testData.login.email, testData.login.password)
  })
  it("cart", () => {
    homeObj.searchProduct(testData.product.productName)
    homeObj.addToCart()
    homeObj.verifySuccess().should('contain',testData.message.successMessage).and('contain',testData.product.productName)
  });
});
