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
}