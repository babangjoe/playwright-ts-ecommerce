import { expect, Locator, Page } from "@playwright/test"

export class AccountCreatedPage {
    page: Page

    $accountCreatedLabel: Locator
    $accountCreatedContinueButton: Locator

    constructor(page: Page) {
        this.page = page

        this.$accountCreatedLabel = this.page.locator("//h2[@data-qa='account-created']")
        this.$accountCreatedContinueButton = this.page.locator("//a[@data-qa='continue-button']")
    }

    /**
     * verify label ACCOUNT CREATED! is visible
     */
    public async isAccountCreatedLabelVisible() {
        return expect(this.$accountCreatedLabel).toBeVisible()
    }

    /**
     * click Continue Button
     */
    public async clickContinueButton() {
        await this.$accountCreatedContinueButton.click()
    }
}