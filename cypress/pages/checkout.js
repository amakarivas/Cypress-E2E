export class checkoutPage {
  weblocators = {
    addtocart: "a[title='Shopping Cart'] i[class='fa fa-shopping-cart']",
    checkout: "a[class='btn btn-primary']",
    exsaddress: "input[value='new']",
    firstname: "#input-payment-firstname",
    lastname: "#input-payment-lastname",
    company: "#input-payment-company",
    address1: "#input-payment-address-1",
    address2: "#input-payment-address-2",
    city: "#input-payment-city",
    postcode: "#input-payment-postcode",
    country: "#input-payment-country",
    region: "#input-payment-zone",
    continue1: "#button-payment-address",
    comment: "textarea[name='comment']",
    terms: "input[value='1']",
    continue2: "#button-payment-method",
    error_message: ".alert.alert-danger.alert-dismissible",
  };

  shoppingCart() {
    cy.get(this.weblocators.addtocart).click();
  }

  checkOut() {
    cy.get(this.weblocators.checkout).click();
  }

  newAddress() {
    cy.get(this.weblocators.exsaddress).check().should("be.checked");
  }

  firstName(fName) {
    cy.get(this.weblocators.firstname).type(fName);
  }

  lastName(lName) {
    cy.get(this.weblocators.lastname).type(lName);
  }

  comPany(compName) {
    cy.get(this.weblocators.company).type(compName);
  }

  addresses(add1, add2) {
    cy.get(this.weblocators.address1).type(add1);
    cy.get(this.weblocators.address2).type(add2);
  }

  cityName(cityAdd) {
    cy.get(this.weblocators.city).type(cityAdd);
  }

  postCode(post_name) {
    cy.get(this.weblocators.postcode).type(post_name);
  }

  countryName(count_name) {
    cy.get(this.weblocators.country).select(count_name);
  }

  regionName(r_name) {
    cy.get(this.weblocators.region).select(r_name);
  }

  continues1() {
    cy.get(this.weblocators.continue1).click();
  }

  comment_Name(words) {
  cy.get(this.weblocators.comment).type(words);
  }

  termCondi() {
    cy.get(this.weblocators.terms).check().should("be.checked");
  }

  continues2() {
    cy.get(this.weblocators.continue2).click();
  }

  verify_error() {
    return cy.get(this.weblocators.error_message);
  }
}
