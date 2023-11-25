import { checkoutPage } from "../../pages/checkout";
const checkoutObj = new checkoutPage();
import checkoutData from "../../fixtures/checkoutData.json";
describe("Checkout", () => {
    before(() => {
        cy.login(checkoutData.login.email, checkoutData.login.password);
      });

  it("checkout", () => {
    checkoutObj.shoppingCart();
    checkoutObj.checkOut();
    checkoutObj.newAddress();
    checkoutObj.firstName(checkoutData.fName);
    checkoutObj.lastName(checkoutData.lName);
    checkoutObj.comPany(checkoutData.compName);
    checkoutObj.addresses(checkoutData.add1,checkoutData.add2);
    checkoutObj.cityName(checkoutData.cityAdd);
    checkoutObj.postCode(checkoutData.post_name);
    checkoutObj.countryName(checkoutData.count_name);
    checkoutObj.regionName(checkoutData.r_name);
    checkoutObj.continues1();
    checkoutObj.comment_Name(checkoutData.words);
    checkoutObj.termCondi();
    checkoutObj.continues2();
    checkoutObj.verify_error().should("contain", checkoutData.errorMessage)
  });
});
