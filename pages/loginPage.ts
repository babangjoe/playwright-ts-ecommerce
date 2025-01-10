import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{
    page: Page

    //Sign Up
    $newUserSignUpLabel: Locator
    $newUserNameField: Locator
    $newUserEmailField: Locator
    $newUserSignupButton: Locator
    $emailAlreadyExistMsg: Locator

    //Login
    $loginLabel: Locator
    $loginEmailField: Locator
    $loginPasswordField: Locator
    $loginButton: Locator
    $incorrectUsernameMsg: Locator

    constructor(page: Page){
        this.page = page
        this.$newUserSignUpLabel = this.page.locator(".signup-form h2")
        this.$newUserNameField = this.page.locator("//input[@data-qa='signup-name']")
        this.$newUserEmailField = this.page.locator("//input[@data-qa='signup-email']")
        this.$newUserSignupButton = this.page.locator("//button[@data-qa='signup-button']")
        this.$emailAlreadyExistMsg = this.page.locator("//p[normalize-space()='Email Address already exist!']")

        this.$loginLabel = this.page.locator(".login-form h2")
        this.$loginEmailField = this.page.locator("//input[@data-qa='login-email']")
        this.$loginPasswordField = this.page.locator("//input[@data-qa='login-password']")
        this.$loginButton = this.page.locator("//button[@data-qa='login-button']")
        this.$incorrectUsernameMsg = this.page.locator("//p[normalize-space()='Your email or password is incorrect!']")
    }

    /**
     * verify Email Address Already Exist Message is visible
     */
    public async isEmailAlreadyExistMsgVisible() {
        return expect(this.$emailAlreadyExistMsg).toBeVisible()
    }

    /**
     * fill in field Email Login
     */
    public async fillEmailLogin(email: string) {
        await this.$loginEmailField.fill(email)
    }

    /**
     * fill in field Password Login
     */
    public async fillPasswordLogin(pwd: string) {
        await this.$loginPasswordField.fill(pwd)
    }

    /**
     * fill in field Password Login
     */
    public async clickLoginButton() {
        await this.$loginButton.click()
    }

    /**
     * verify Incorrect Username Message is visible
     */
    public async isIncorrectUsernameMsgVisible() {
        return expect(this.$incorrectUsernameMsg).toBeVisible()
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