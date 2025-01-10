import { test } from "../pages/base";
import { loginCredentials } from "../function/fn_Login"

test('Logout', async ({ page, homePage, loginPage }) => {
    const email = "bangjoeee@email.com"
    const pwd = "Test123!"
    const username = "Bang Joe"
    
    await loginCredentials({ homePage, loginPage }, email, pwd, username, 'valid' )

    await page.waitForTimeout(2000)

    await homePage.clickLogoutLink()

    await homePage.isLoginVisible()
 })