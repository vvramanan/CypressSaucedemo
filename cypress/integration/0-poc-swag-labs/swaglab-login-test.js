describe('Create Login test suit for swaglabs', () => {
    it('Successfull login test case', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.get('span[class="title"]').should('have.text','Products')
    });

    it('Un Successfull login test case', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('invalid_pwd')
        cy.get('input[name="login-button"]').click()
        cy.get('h3[data-test="error"]').should('be.visible')
        cy.get('h3[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    });

    it('Un Successfull login test case User Name is Mandatory', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.get('h3[data-test="error"]').should('be.visible')
        cy.get('h3[data-test="error"]').should('have.text','Epic sadface: Username is required')
    });

    it('Un Successfull login test case Password is Mandatory', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="login-button"]').click()
        cy.get('h3[data-test="error"]').should('be.visible')
        cy.get('h3[data-test="error"]').should('have.text','Epic sadface: Password is required')
    });
    
});