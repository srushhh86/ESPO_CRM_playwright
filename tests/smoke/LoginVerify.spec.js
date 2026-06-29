import {expect, test} from "@playwright/test"
import { LoginPage } from "../../POM/LoginPage"

import logindata from "../../TestData/commondata.json"

test("verify Login",async ({page}) => {
    
    let login=new LoginPage(page)
    await login.loginToPage(logindata.url,logindata.username,logindata.password)
    await expect(page).toHaveURL("https://testyantra.espocloud.eu/")

})