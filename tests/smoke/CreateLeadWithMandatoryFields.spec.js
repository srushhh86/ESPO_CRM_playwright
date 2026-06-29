import {expect, test} from "@playwright/test"
import { LoginPage } from "../../POM/LoginPage"
import { HomePage } from "../../POM/HomePage"
import { LeadModule } from "../../POM/LeadModule"

import {generateRandomeData} from "../../Utils/UtilityFunctions/randomDataGenerator"

import logindata from "../../TestData/commondata.json"
import leaddata from "../../TestData/LeadData.json"


test("verify Login",async ({page}) => {
    
    let login=new LoginPage(page)
    let homePage=new HomePage(page)
    let leadmodule=new LeadModule(page)

    //  await login.loginToPage(logindata.url,logindata.username,logindata.password)
   await page.goto(logindata.url)
    await expect(page).toHaveURL("https://testyantra.espocloud.eu/")


    //click on lead page
    await homePage.OpenLead()

    //create lead
    let firstname=leaddata.firstname+generateRandomeData()
    console.log(firstname);
    
    await leadmodule.CreateLeadWithMandatoryFields(firstname,leaddata.lastname)
//await expect(page).toHaveURL(/#Lead\/view\/.+/);
    await page.waitForTimeout(3000)

    
})


