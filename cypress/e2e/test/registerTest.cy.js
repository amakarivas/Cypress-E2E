import { registerPage } from "../../pages/registerPage";
const registerObj = new registerPage();
import registerData from "../../fixtures/registerData.json";
describe("Registeration", () => {
  it("register", () => {
    registerObj.openURL();
    registerObj.enterFirstName(registerData.firstName);
    registerObj.enterLastName(registerData.lastName);
    registerObj.enterEmail(registerData.email);
    registerObj.enterTelephone(registerData.telephone);
    registerObj.enterPassword(registerData.password,registerData.confirmPassword);
    //registerObj.enterPassword(registerData.confirmPassword)
    registerObj.selectPolicy();
    registerObj.enterContinue();
  });
});
