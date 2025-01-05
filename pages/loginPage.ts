import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{
    page: Page

    //Sign Up
    $newUserSignUpLabel: Locator
    $newUserNameField: Locator
    $newUserEmailField: Locator
    $newUserSignupButton: Locator

    //Login
    $loginLabel: Locator
    $loginEmailField: Locator
    $loginPasswordField: Locator
    $loginButton: Locator

    constructor(page: Page){
        this.page = page
        this.$newUserSignUpLabel = this.page.locator(".signup-form h2")
        this.$newUserNameField = this.page.locator("//input[@data-qa='signup-name']")
        this.$newUserEmailField = this.page.locator("//input[@data-qa='signup-email']")
        this.$newUserSignupButton = this.page.locator("//input[@data-qa='signup-button']")

        this.$loginLabel = this.page.locator(".login-form h2")
        this.$loginEmailField = this.page.locator("//input[@data-qa='login-email']")
        this.$loginPasswordField = this.page.locator("//input[@data-qa='login-password']")
        this.$loginButton = this.page.locator("//input[@data-qa='login-button']")
    }

    /**
     * verify link label New User Signup! is visible
     */
    public async isNewUserLabelVisible() {
        return expect(this.$newUserSignUpLabel).toBeVisible()
    }

    /**
     * verify link label Login to your account is visible
     */
    public async isLoginLabelVisible() {
        return expect(this.$loginLabel).toBeVisible()
    }
}