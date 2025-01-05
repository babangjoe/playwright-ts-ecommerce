import { expect, Locator, Page } from "@playwright/test"

export class AccountDeletedPage{
    page: Page

    $accountDeletedLabel: Locator
    $accountDeletedContinueButton: Locator

    constructor(page: Page) {
        this.page = page

        this.$accountDeletedLabel = this.page.locator("//h2[@data-qa='account-deleted']")
        this.$accountDeletedContinueButton = this.page.locator("//a[@data-qa='continue-button']")
    }

    /**
     * verify label ACCOUNT DELETED! is visible
     */
    public async isAccountDeletedLabelVisible() {
        return expect(this.$accountDeletedLabel).toBeVisible()
    }
}