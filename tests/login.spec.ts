import { test } from "../pages/base";
import { loginCredentials } from "../function/loginFunction"

test('Login with Valid Credential', async ({ homePage, loginPage }) => {
    const email = "bangjoeee@email.com"
    const pwd = "Test123!"
    const username = "Bang Joe"
    
    await loginCredentials({ homePage, loginPage }, email, pwd, username, 'valid' )
 })

 test('Login with Invalid Credential', async ({ homePage, loginPage }) => {
    const email = "bangjoeee@email.com"
    const pwd = "Test1234!"
    const username = ""
    
    await loginCredentials({ homePage, loginPage }, email, pwd, username, 'invalid' )
 })