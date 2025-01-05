import { test as base } from '@playwright/test'
import { HomePage } from './homePage'
import { LoginPage } from './loginPage'
import { SignUpPage } from './signUpPage'
import { AccountCreatedPage } from './accountCreatedPage'
import { AccountDeletedPage } from './accountDeletedPage'

type MyFixtures = {
    homePage: HomePage
    loginPage: LoginPage
    signUpPage: SignUpPage
    accountCreatedPage: AccountCreatedPage
    accountDeletedPage: AccountDeletedPage
}

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },    
    
    loginPage: async ({ page}, use) => {
        await use(new LoginPage(page))
    },

    signUpPage: async ({ page}, use) => {
        await use(new SignUpPage(page))
    },

    accountCreatedPage: async ({ page}, use) => {
        await use(new AccountCreatedPage(page))
    },

    accountDeletedPage: async ({ page}, use) => {
        await use(new AccountDeletedPage(page))
    },

})

export { expect } from '@playwright/test'