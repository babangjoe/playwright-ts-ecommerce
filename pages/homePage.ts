import { expect, Locator, Page } from "@playwright/test"

export class HomePage {
    public url = "https://www.automationexercise.com/"

    page: Page

    $homePageLink: Locator
    $loginLink: Locator
    $productLink: Locator
    $cartLink: Locator
    $deleteAccountLink: Locator
    $loggedInLink: Locator
    $loggedOutLink: Locator

    constructor(page: Page){
        this.page = page
        this.$homePageLink = this.page.locator("//a[normalize-space()='Home']")
        this.$loginLink = this.page.locator("a[href='/login']")
        this.$productLink = this.page.locator("a[href='/products']")
        this.$cartLink = this.page.locator("a[href='/view_cart']")
        this.$deleteAccountLink = this.page.locator("a[href='/delete_account']")
        this.$loggedInLink = this.page.locator("a:has-text('Logged in as')")
        this.$loggedOutLink = this.page.locator("a[href='/logout']")
    }

    /**
     * Navigate to url 'http://automationexercise.com'
     */
    public async goto() {
        await this.page.goto(this.url)
    }

    /**
     * verify link button Home is visible
     */
    public async isHomeVisible() {
        return expect(this.$homePageLink).toBeVisible()
    }


    /**
     * verify link button Login is visible
     */
    public async isLoginVisible() {
        return expect(this.$loginLink).toBeVisible()
    }

    /**
     * click link Login
     */
    public async clickLoginLink() {
        await this.$loginLink.click()
    }

    /**
     * verify link button Logout is visible
     */
    public async isLogoutVisible() {
        return expect(this.$loggedOutLink).toBeVisible()
    }

    /**
     * click link button Logout
     */
    public async clickLogoutLink() {
        await this.$loggedOutLink.click()
    }

    /**
     * verify link button Product is visible
     */
    public async isProductVisible() {
        return expect(this.$productLink).toBeVisible()
    }

    /**
     * verify link button Cart is visible
     */
    public async isCartVisible() {
        return expect(this.$cartLink).toBeVisible()
    }

    /**
     * verify Logged in as username is visible
     */
    public async isLoggedInVisible(username: string) {
        return expect(this.$loggedInLink).toContainText(`Logged in as ${username}`)
    }

    /**
     * click link Delete Account
     */
    public async clickDeleteAccountLink() {
        await this.$deleteAccountLink.click()
    }
}