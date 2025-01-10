export async function registerUser({ page, homePage, loginPage, signUpPage, accountCreatedPage, accountDeletedPage }, userName: string, email: string, registrationType: string) {
    // let userName: string = "babangjoe"
    
    await homePage.goto() // Launch browser & Navigate to url 'http://automationexercise.com'
    await homePage.isLoginVisible() // Verify that home page is visible successfully
    await homePage.clickLoginLink() // Click on 'Signup / Login' button
    await loginPage.isNewUserLabelVisible() // Verify 'New User Signup!' is visible
    await loginPage.$newUserNameField.fill(userName)
    await loginPage.$newUserEmailField.fill(email)
    await loginPage.$newUserSignupButton.click()

    await page.waitForTimeout(3000) // wait for 3 seconds, for testing purpose only

    if(registrationType == 'new'){
        await signUpPage.isSignUpLabelVisible() // Verify that 'ENTER ACCOUNT INFORMATION' is visible
        await signUpPage.clickRadioButtonMr() // Click radio button Mr.
        await signUpPage.fillPassword("Test123!") // Input password
        await signUpPage.$signUpDOBDayDropDown.selectOption({label:"1"}) // Select 1 as day of birth
        await signUpPage.$signUpDOBMonthDropDown.selectOption({value: "3"}) // Select March as month of birth
        await signUpPage.$signUpDOBYearDropDown.selectOption({label:"1982"}) // Select 1982 as year of birth
        await signUpPage.checkNewsletterCheckBox() // Check newsletter checkbox
        await signUpPage.checkSpecialOffersCheckBox() // Check special offers checkbox
        await signUpPage.fillFirstName("Bang") // Input first name
        await signUpPage.fillLastName("Joe") // Input last name
        await signUpPage.fillCompany("Test Company") // Input company
        await signUpPage.fillAddress1("Test Address 1") // Input address 1
        await signUpPage.fillAddress2("Test Address 2") // Input address 2
        await signUpPage.$signUpAddressInfoCountryDropDown.selectOption({label:"Australia"}) // Select Australia as country
        await signUpPage.fillState("Test State") // Input state
        await signUpPage.fillCity("Test City") // Input city
        await signUpPage.fillZipCode("123456") // Input zip
        await signUpPage.fillMobileNumber("1234567890") // Input mobile number
        await signUpPage.clickCreateAccountBtn()

        await page.waitForTimeout(2000) // wait for 3 seconds, for testing purpose only

        await accountCreatedPage.isAccountCreatedLabelVisible() // Verify that 'Account Created!' is visible
        await accountCreatedPage.clickContinueButton() // Click button Continue

        await page.waitForTimeout(2000) // wait for 3 seconds, for testing purpose only

        await homePage.isLoggedInVisible(userName) // Verify that 'Logged in as username' is visible

        await page.waitForTimeout(2000) // wait for 3 seconds, for testing purpose only

        await homePage.clickDeleteAccountLink() // Click 'Delete Account' button 
        await accountDeletedPage.isAccountDeletedLabelVisible() // Verify that 'ACCOUNT DELETED!' is visible
        await accountDeletedPage.clickContinue() // click 'Continue' button

        await page.waitForTimeout(2000) // wait for 3 seconds, for testing purpose only
    } else if(registrationType == 'existing'){
        await loginPage.isEmailAlreadyExistMsgVisible() // Email already exist message visible
    }
    
}