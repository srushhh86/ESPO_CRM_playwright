import {expect, test} from "@playwright/test"
import { LoginPage } from "../../POM/LoginPage"
import { HomePage } from "../../POM/HomePage"
import { LeadModule } from "../../POM/LeadModule"

import {generateRandomeData} from "../../Utils/UtilityFunctions/randomDataGenerator"

import logindata from "../../TestData/commondata.json"
import leaddata from "../../TestData/LeadDataWithAllFeilds.json"

 let firstname;
test("lead with all fields",async ({page}) => {
    
  
    let homePage=new HomePage(page)
    let leadmodule=new LeadModule(page)

    //  await login.loginToPage(logindata.url,logindata.username,logindata.password)
   await page.goto(logindata.url)
    await expect(page).toHaveURL("https://testyantra.espocloud.eu/")


    //click on lead page
    await homePage.OpenLead()

    //create lead
   firstname=leaddata.firstname+generateRandomeData()
    console.log(firstname);
    let email=firstname+"@gmail.com"
    
    await leadmodule.CreateLeadWithAllFields(firstname,email,leaddata)
     await page.waitForTimeout(1000)
    await leadmodule.LeadLinkBacktoMainPage.click()
     await page.waitForTimeout(1000)
    await leadmodule.clickOnYes.click()

    await leadmodule.searchLead(firstname)

    await page.waitForTimeout(3000)

    
})

// search lead

test.skip("search lead ",async ({page}) => {
    

    let homePage=new HomePage(page)
    let leadmodule=new LeadModule(page)

    //  await login.loginToPage(logindata.url,logindata.username,logindata.password)
   await page.goto(logindata.url)
    await expect(page).toHaveURL("https://testyantra.espocloud.eu/")


    //click on lead page
    await homePage.OpenLead()

    //search lead
    await leadmodule.searchLead(firstname)


    await page.waitForTimeout(3000)

    
})