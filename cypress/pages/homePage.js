export class homePage {
  weblocators = {
    searchbar: "input[placeholder='Search']",
    click_search: "button[class='btn btn-default btn-lg']",
    product: "img[title='MacBook']",
    addtocart: "div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1) i:nth-child(1)",
    success_message: ".alert.alert-success.alert-dismissible",
  };

  searchProduct(productName) {
    cy.get(this.weblocators.searchbar).type(productName);
    cy.get(this.weblocators.click_search).click();
  }

  addToCart() {
    cy.get(this.weblocators.addtocart).click();
  }

  verifySuccess() {
    return cy.get(this.weblocators.success_message);
  }
}
