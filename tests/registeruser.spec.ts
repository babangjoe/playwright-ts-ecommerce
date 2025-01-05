import { sign } from "crypto";
import { test } from "../pages/base";

test("Register User", async ({ homePage, loginPage, signUpPage, accountCreatedPage }) => {
    let userName: string = "babangjoe"
    
    await homePage.goto() // Launch browser & Navigate to url 'http://automationexercise.com'
    await homePage.isLoginVisible() // Verify that home page is visible successfully
    await homePage.$loginLink.click() // Click on 'Signup / Login' button
    await loginPage.isNewUserLabelVisible() // Verify 'New User Signup!' is visible
    await loginPage.$newUserNameField.fill(userName)
    await loginPage.$newUserEmailField.fill("babangjoe@email.com")
    await loginPage.$newUserSignupButton.click()
    await signUpPage.isSignUpLabelVisible() // Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await signUpPage.$signUpTitleMrRadioButton.click() // Click radio button Mr.
    await signUpPage.$signUpPasswordField.fill("Test123!") // Input password
    await signUpPage.$signUpDOBDayDropDown.selectOption({label:"1"}) // Select 1 as day of birth
    await signUpPage.$signUpDOBMonthDropDown.selectOption({value: "3"}) // Select March as month of birth
    await signUpPage.$signUpDOBYearDropDown.selectOption({label:"1982"}) // Select 1982 as year of birth
    await signUpPage.$signUpNewsletterCheckBox.check() // Check newsletter checkbox
    await signUpPage.$signUpSpecialOffersCheckBox.check() // Check special offers checkbox
    await signUpPage.$signUpAddressInfoFirstNameField.fill("Bang") // Input first name
    await signUpPage.$signUpAddressInfoLastNameField.fill("Joe") // Input last name
    await signUpPage.$signUpAddressInfoCompanyField.fill("Test Company") // Input company
    await signUpPage.$signUpAddressInfoAddress1Field.fill("Test Address 1") // Input address 1
    await signUpPage.$signUpAddressInfoAddress2Field.fill("Test Address 2") // Input address 2
    await signUpPage.$signUpAddressInfoCountryDropDown.selectOption({label:"Australia"}) // Select Australia as country
    await signUpPage.$signUpAddressInfoStateField.fill("Test State") // Input state
    await signUpPage.$signUpAddressInfoCityField.fill("Test City") // Input city
    await signUpPage.$signUpAddressInfoZipCodeField.fill("123456") // Input zip
    await signUpPage.$signUpAddressInfoMobileNumberField.fill("1234567890") // Input mobile number
    await signUpPage.$signUpCreateAccountButton.click()
    await accountCreatedPage.isAccountCreatedLabelVisible() // Verify that 'Account Created!' is visible
    await accountCreatedPage.$accountCreatedContinueButton.click() // Click button Continue
    await homePage.isLoggedInVisible(userName) // Verify that 'Logged in as username' is visible
})