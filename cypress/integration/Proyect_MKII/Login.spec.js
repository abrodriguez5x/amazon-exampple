/// <reference types="cypress" />

class Login {

    constructor() {

        this.account = 'span[class="nav-line-2 "]'      //cy.get('span[class="nav-line-2 "]')
        this.e_mail = "#ap_email"     //cy.get("#ap_email")
        this.continue_bttn = '.a-button-inner > #continue'         //cy.get('.a-button-inner > #continue')
        this.password = '#ap_password'          //cy.get('#ap_password')
        this.sigin_bttn = '#signInSubmit'      //cy.get('#signInSubmit')

    }

    login (email, pass) {


        cy.get(this.account).click()                                    //this.account.click()
        cy.get(this.e_mail).type(email)                                    //this.e_mail.type(email)
        cy.get(this.continue_bttn).click()                                    //this.continue_bttn.click()
        cy.get(this.password).type(pass)                                    //this.password.type(pass)
        cy.get(this.sigin_bttn).click()                                    //this.sigin_bttn.click()

    }


}

export default new Login()

