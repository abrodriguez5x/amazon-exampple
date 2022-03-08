/// <reference types="cypress" />

class Cart {
    constructor(){

        this.search = '#twotabsearchtextbox'               //cy.get('#twotabsearchtextbox')
        this.search_bttn = '#nav-search-submit-button'         //cy.get('#nav-search-submit-button')
        this.item = 'img[alt="Mario Kart 8 Deluxe - Standard Edition - Nintendo Switch"]'               //cy.get('[data-asin="B0932KK5PW"] > .sg-col-inner > .celwidget > .s-include-content-margin > .a-spacing-medium > .rush-component > .a-link-normal > .a-section > .s-image')
        this.addcart_bttn = '#add-to-cart-button'      //cy.get('#add-to-cart-button')
        this.viewcart_bttn = '#attach-sidesheet-view-cart-button'    //cy.get('#attach-sidesheet-view-cart-button')

    }

    add (product) {

        cy.get(this.search).type(product)                         //this.search.type(product)
        cy.get(this.search_bttn).click()                        //this.search_bttn.click()
        cy.get(this.item).click()                       //this.item.click()
        cy.get(this.addcart_bttn).click()                      //this.addcart_bttn.click()
        cy.wait(3000)                     //wait(3000)
        cy.get(this.viewcart_bttn).click()                    //this.viewcart_bttn.click()

    }
}

export default new Cart()

