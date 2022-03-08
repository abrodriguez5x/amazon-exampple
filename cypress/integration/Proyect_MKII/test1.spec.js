/// <reference types="cypress" />

import app from './Login.spec.js'
import car from './Cart.spec.js'

const item = 'nintendo';
const user = 'test.bot.runner@gmail.com';
const pass = 'core//0907';

describe("Buying on amazon", () => {


    it("Login to account test", () => {

        cy.visit("https://www.amazon.com.mx/");
        app.login(user, pass)
        

    })

    it("Adding iten to cart", () => {

        car.add(item)

        
    })



})

