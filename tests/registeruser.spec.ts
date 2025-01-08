import { test } from "../pages/base";
import { registerUser } from "../function/fn_RegisterUser";

test("Register User", async ({ page, homePage, loginPage, signUpPage, accountCreatedPage, accountDeletedPage }) => {
    
    await registerUser({ page, homePage, loginPage, signUpPage, accountCreatedPage, accountDeletedPage })
    
})