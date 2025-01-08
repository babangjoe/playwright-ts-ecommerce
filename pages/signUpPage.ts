import { expect, Locator, Page } from "@playwright/test"

export class SignUpPage {
    page: Page

    $signUpLabel: Locator
    $signUpTitleMrRadioButton: Locator
    $signUpNameField: Locator
    $signUpEmailField: Locator
    $signUpPasswordField: Locator
    $signUpDOBDayDropDown: Locator
    $signUpDOBMonthDropDown: Locator
    $signUpDOBYearDropDown: Locator
    $signUpNewsletterCheckBox: Locator
    $signUpSpecialOffersCheckBox: Locator
    $signUpAddressInfoFirstNameField: Locator
    $signUpAddressInfoLastNameField: Locator
    $signUpAddressInfoCompanyField: Locator
    $signUpAddressInfoAddress1Field: Locator
    $signUpAddressInfoAddress2Field: Locator
    $signUpAddressInfoCountryDropDown: Locator
    $signUpAddressInfoStateField: Locator
    $signUpAddressInfoCityField: Locator
    $signUpAddressInfoZipCodeField: Locator
    $signUpAddressInfoMobileNumberField: Locator
    $signUpCreateAccountButton: Locator

    constructor(page: Page) {
        this.page = page
        this.$signUpLabel = this.page.locator("//b[normalize-space()='Enter Account Information']")
        this.$signUpTitleMrRadioButton = this.page.locator("#id_gender1")
        this.$signUpNameField = this.page.locator("#name")
        this.$signUpEmailField = this.page.locator("#email")
        this.$signUpPasswordField = this.page.locator("#password")
        this.$signUpDOBDayDropDown = this.page.locator("#days")
        this.$signUpDOBMonthDropDown = this.page.locator("#months")
        this.$signUpDOBYearDropDown = this.page.locator("#years")
        this.$signUpNewsletterCheckBox = this.page.locator("#newsletter")
        this.$signUpSpecialOffersCheckBox = this.page.locator("#optin")
        this.$signUpAddressInfoFirstNameField = this.page.locator("#first_name")
        this.$signUpAddressInfoLastNameField = this.page.locator("#last_name")
        this.$signUpAddressInfoCompanyField = this.page.locator("#company")
        this.$signUpAddressInfoAddress1Field = this.page.locator("#address1")
        this.$signUpAddressInfoAddress2Field = this.page.locator("#address2")
        this.$signUpAddressInfoCountryDropDown = this.page.locator("#country")
        this.$signUpAddressInfoStateField = this.page.locator("#state")
        this.$signUpAddressInfoCityField = this.page.locator("#city")
        this.$signUpAddressInfoZipCodeField = this.page.locator("#zipcode")
        this.$signUpAddressInfoMobileNumberField = this.page.locator("#mobile_number")
        this.$signUpCreateAccountButton = this.page.locator("//button[@data-qa='create-account']")
    }

    /**
     * verify link label ENTER ACCOUNT INFORMATION is visible
     */
    public async isSignUpLabelVisible() {
        return expect(this.$signUpLabel).toBeVisible()
    }

    /**
     * click radio button Mr
     */
    public async clickRadioButtonMr() {
        await this.$signUpTitleMrRadioButton.click()
    }

    /**
     * fill in field Password
     */
    public async fillPassword(pwd: string) {
        await this.$signUpPasswordField.fill(pwd)
    }

    /**
     * fill in check Newsletter check box
     */
    public async checkNewsletterCheckBox() {
        await this.$signUpNewsletterCheckBox.check()
    }

    /**
     * fill in check Newsletter check box
     */
    public async checkSpecialOffersCheckBox() {
        await this.$signUpSpecialOffersCheckBox.check()
    }

    /**
     * fill in field First Name
     */
    public async fillFirstName(firstname: string) {
        await this.$signUpAddressInfoFirstNameField.fill(firstname)
    }

    /**
     * fill in field Last Name
     */
    public async fillLastName(lastname: string) {
        await this.$signUpAddressInfoLastNameField.fill(lastname)
    }

    /**
     * fill in field Company
     */
    public async fillCompany(company: string) {
        await this.$signUpAddressInfoCompanyField.fill(company)
    }

    /**
     * fill in field Address 1
     */
    public async fillAddress1(address: string) {
        await this.$signUpAddressInfoAddress1Field.fill(address)
    }

    /**
     * fill in field Address 2
     */
    public async fillAddress2(address: string) {
        await this.$signUpAddressInfoAddress2Field.fill(address)
    }
    
    /**
     * fill in field State
     */
    public async fillState(state: string) {
        await this.$signUpAddressInfoStateField.fill(state)
    }

    /**
     * fill in field City
     */
    public async fillCity(city: string) {
        await this.$signUpAddressInfoCityField.fill(city)
    }

    /**
     * fill in field ZIP Code
     */
    public async fillZipCode(zipcode: string) {
        await this.$signUpAddressInfoZipCodeField.fill(zipcode)
    }

    /**
     * fill in field Mobile Number
     */
    public async fillMobileNumber(mobilenumber: string) {
        await this.$signUpAddressInfoMobileNumberField.fill(mobilenumber)
    }

    /**
     * click button Create Account
     */
    public async clickCreateAccountBtn() {
        await this.$signUpCreateAccountButton.click()
    }
}