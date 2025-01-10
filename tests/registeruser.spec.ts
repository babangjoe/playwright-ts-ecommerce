import { test } from "../pages/base";
import { registerUser } from "../function/fn_RegisterUser";

test("Register New User", async ({ page, homePage, loginPage, signUpPage, accountCreatedPage, accountDeletedPage }) => {
    const username = "babangjoe1"
    const email = "bangjoeee1@email.com"
    
    await registerUser({ page, homePage, loginPage, signUpPage, accountCreatedPage, accountDeletedPage }, username, email, 'new');
})

test("Register Existing User", async ({ page, homePage, loginPage, signUpPage, accountCreatedPage, accountDeletedPage }) => {
    const username = "babangjoe"
    const email = "bangjoeee@email.com"
    
    await registerUser({ page, homePage, loginPage, signUpPage, accountCreatedPage, accountDeletedPage }, username, email, 'existing');
})