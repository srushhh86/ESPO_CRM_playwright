import {expect, test as setup} from "@playwright/test"
import {LoginPage} from "../POM/LoginPage"
import logindata from "../TestData/commondata.json"


setup('login',async ({page}) => {
    let login=new LoginPage(page)

    await page.goto(logindata.url)
    await login.username.fill(logindata.username)
    await login.password.fill(logindata.password)
    await login.loginButton.click()

  await page.waitForLoadState('networkidle');


    await page.context().storageState(
        {
            path:"playwright/.auth/.user.json"
        }
    )
    
    
})