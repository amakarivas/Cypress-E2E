export class registerPage{

    weblocators={
        firstName:"#input-firstname",
        lastName:"#input-lastname",
        email:"#input-email",
        telephone:"#input-telephone",
        password:"#input-password",
        confirmPassword:"#input-confirm",
        policy:"input[value='1'][name='agree']",
        continue:"input[value='Continue']",
    }
     openURL(){
        cy.visit(Cypress.env('URL'))
     }

    enterFirstName(fName){
        cy.get(this.weblocators.firstName).type(fName)
    }

    enterLastName(lName){
        cy.get(this.weblocators.lastName).type(lName)
    }

    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

    enterTelephone(telephone){
        cy.get(this.weblocators.telephone).type(telephone)
    }

    enterPassword(password, confirmPassword){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.confirmPassword).type(confirmPassword)
    }

   
    selectPolicy(){
        cy.get(this.weblocators.policy).check()
    }

    enterContinue(){
        cy.get(this.weblocators.continue).click()
    }
}