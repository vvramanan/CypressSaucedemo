describe('Create Product order test suit for swaglabs', () => {
    it('Successfull placement of product for test case backpack', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('a[class="shopping_cart_link"]').click()
        cy.get('button[name="checkout"]').click()
        cy.get('input[name="firstName"]').type('First Name')
        cy.get('input[name="lastName"]').type('Last Name')
        cy.get('input[name="postalCode"]').type('600101')
        cy.get('input[name="continue"]').click()
        cy.get('div[class="inventory_item_name"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('div[class="inventory_item_price"]').should('have.text', '$29.99')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(1)').should('have.text', 'Payment Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(2)').should('have.text', 'SauceCard #31337')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(3)').should('have.text', 'Shipping Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(4)').should('have.text', 'FREE PONY EXPRESS DELIVERY!')

        cy.get('div[class="summary_subtotal_label"]').should('have.text', 'Item total: $29.99')
        cy.get('div[class="summary_tax_label"]').should('have.text', 'Tax: $2.40')
        cy.get('div[class="summary_total_label"]').should('have.text', 'Total: $32.39')

        cy.get('button[name="finish"]').click()

        cy.get('h2[class="complete-header"]').should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get('div[class="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

        cy.get('button[name="back-to-products"]').should('be.visible')
        cy.get('button[name="back-to-products"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')

        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    });

    it('Successfull placement of product for test case bike light', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')
        cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('a[class="shopping_cart_link"]').click()
        cy.get('button[name="checkout"]').click()
        cy.get('input[name="firstName"]').type('First Name')
        cy.get('input[name="lastName"]').type('Last Name')
        cy.get('input[name="postalCode"]').type('600101')
        cy.get('input[name="continue"]').click()
        cy.get('div[class="inventory_item_name"]').should('have.text', 'Sauce Labs Bike Light')
        cy.get('div[class="inventory_item_price"]').should('have.text', '$9.99')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(1)').should('have.text', 'Payment Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(2)').should('have.text', 'SauceCard #31337')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(3)').should('have.text', 'Shipping Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(4)').should('have.text', 'FREE PONY EXPRESS DELIVERY!')

        cy.get('div[class="summary_subtotal_label"]').should('have.text', 'Item total: $9.99')
        cy.get('div[class="summary_tax_label"]').should('have.text', 'Tax: $0.80')
        cy.get('div[class="summary_total_label"]').should('have.text', 'Total: $10.79')

        cy.get('button[name="finish"]').click()

        cy.get('h2[class="complete-header"]').should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get('div[class="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

        cy.get('button[name="back-to-products"]').should('be.visible')
        cy.get('button[name="back-to-products"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')

        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    });

    
    it('Successfull placement of product for test case Bolt T-Shirt', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')
        cy.get('button[name="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('a[class="shopping_cart_link"]').click()
        cy.get('button[name="checkout"]').click()
        cy.get('input[name="firstName"]').type('First Name')
        cy.get('input[name="lastName"]').type('Last Name')
        cy.get('input[name="postalCode"]').type('600101')
        cy.get('input[name="continue"]').click()
        cy.get('div[class="inventory_item_name"]').should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get('div[class="inventory_item_price"]').should('have.text', '$15.99')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(1)').should('have.text', 'Payment Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(2)').should('have.text', 'SauceCard #31337')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(3)').should('have.text', 'Shipping Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(4)').should('have.text', 'FREE PONY EXPRESS DELIVERY!')

        cy.get('div[class="summary_subtotal_label"]').should('have.text', 'Item total: $15.99')
        cy.get('div[class="summary_tax_label"]').should('have.text', 'Tax: $1.28')
        cy.get('div[class="summary_total_label"]').should('have.text', 'Total: $17.27')

        cy.get('button[name="finish"]').click()

        cy.get('h2[class="complete-header"]').should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get('div[class="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

        cy.get('button[name="back-to-products"]').should('be.visible')
        cy.get('button[name="back-to-products"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')

        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    });

    it('Successfull placement of product for test case Fleece Jacket', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')
        cy.get('button[name="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('a[class="shopping_cart_link"]').click()
        cy.get('button[name="checkout"]').click()
        cy.get('input[name="firstName"]').type('First Name')
        cy.get('input[name="lastName"]').type('Last Name')
        cy.get('input[name="postalCode"]').type('600101')
        cy.get('input[name="continue"]').click()
        cy.get('div[class="inventory_item_name"]').should('have.text', 'Sauce Labs Fleece Jacket')
        cy.get('div[class="inventory_item_price"]').should('have.text', '$49.99')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(1)').should('have.text', 'Payment Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(2)').should('have.text', 'SauceCard #31337')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(3)').should('have.text', 'Shipping Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(4)').should('have.text', 'FREE PONY EXPRESS DELIVERY!')

        cy.get('div[class="summary_subtotal_label"]').should('have.text', 'Item total: $49.99')
        cy.get('div[class="summary_tax_label"]').should('have.text', 'Tax: $4.00')
        cy.get('div[class="summary_total_label"]').should('have.text', 'Total: $53.99')

        cy.get('button[name="finish"]').click()

        cy.get('h2[class="complete-header"]').should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get('div[class="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

        cy.get('button[name="back-to-products"]').should('be.visible')
        cy.get('button[name="back-to-products"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')

        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    });

    it('Successfull placement of product for test case Onesie and Red t-Shirt', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('input[name="login-button"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')
        cy.get('button[name="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('button[name="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('a[class="shopping_cart_link"]').click()
        cy.get('button[name="checkout"]').click()
        cy.get('input[name="firstName"]').type('First Name')
        cy.get('input[name="lastName"]').type('Last Name')
        cy.get('input[name="postalCode"]').type('600101')
        cy.get('input[name="continue"]').click()

        cy.get('#item_2_title_link > div').should('have.text', 'Sauce Labs Onesie')
        cy.get('#checkout_summary_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div').should('have.text', '$7.99')

        cy.get('#item_3_title_link > div').should('have.text', 'Test.allTheThings() T-Shirt (Red)')
        cy.get('#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div').should('have.text', '$15.99')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(1)').should('have.text', 'Payment Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(2)').should('have.text', 'SauceCard #31337')

        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(3)').should('have.text', 'Shipping Information:')
        cy.get('#checkout_summary_container > div > div.summary_info > div:nth-child(4)').should('have.text', 'FREE PONY EXPRESS DELIVERY!')

        cy.get('div[class="summary_subtotal_label"]').should('have.text', 'Item total: $23.98')
        cy.get('div[class="summary_tax_label"]').should('have.text', 'Tax: $1.92')
        cy.get('div[class="summary_total_label"]').should('have.text', 'Total: $25.90')

        cy.get('button[name="finish"]').click()

        cy.get('h2[class="complete-header"]').should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get('div[class="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

        cy.get('button[name="back-to-products"]').should('be.visible')
        cy.get('button[name="back-to-products"]').click()
        cy.get('span[class="title"]').should('have.text', 'Products')

        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    });
});