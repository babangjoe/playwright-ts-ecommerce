export async function loginCredentials({ homePage, loginPage }, email: string, pwd: string, username: string, logintype: string) {
    await homePage.goto() // Launch browser & Navigate to url 'http://automationexercise.com'
    
    await homePage.isLoginVisible() // Verify that home page is visible successfully
    await homePage.clickLoginLink() // Click on 'Signup / Login' button
    await loginPage.fillEmailLogin(email) // Enter valid username
    await loginPage.fillPasswordLogin(pwd) // Enter valid password
    await loginPage.clickLoginButton(); // Click login button
    
    if(logintype == 'valid'){
        await homePage.isLoggedInVisible(username) // Verify that 'Logged in as username' is visible
    } else if(logintype == 'invalid') {
        await loginPage.isIncorrectUsernameMsgVisible() // Verify incorrect username message is visible
    }
}