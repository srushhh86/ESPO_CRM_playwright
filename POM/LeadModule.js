//import leaddata from "../TestData/LeadDataWithAllFeilds.json"

export class LeadModule{
/**x
     * @param {import('playwright').Page} page 
     */
    constructor(page)
    {
        this.page=page
        this.createLeadButton=page.getByRole('link',{name:"Create Lead"})
        this.namehonarifics=page.locator("//div[contains(@class,'selectize-control form-control single ')]")
        this.firstname=page.getByPlaceholder("First Name")
        this.lastName=page.getByPlaceholder("Last Name")
        this.saveButton=page.getByRole('button',{name:"Save"})

        this.accountname= page.locator("//input[@data-name='accountName']")
        this.leadEmail=page.locator("[class='form-control email-address']")
        this.leadPhoneNum=page.locator("//input[contains(@class,'form-control phone-number ')]")
        this.titleTextfield=page.locator("//input[contains(@data-name,'title')]")
        this.websiteTextField=page.locator("//input[@data-name='website']")
        this.streetAddressTextField=page.getByPlaceholder("Street")
        this.CityAddressTextField=page.getByPlaceholder("City")
         this.StateAddressTextField=page.getByPlaceholder("State")
        this.postalCodeAddressTextField=page.getByPlaceholder("Postal Code")
        this.CountryAddressTextField=page.getByPlaceholder("Country")
        this.statusDropdown=page.locator("//div[@data-value='New' and @class='item']")
        this.statusNew=page.locator("//div[@data-value='New' and @class='option selected active']")
        this.statusAssigned=page.locator("//div[@data-value='Assigned']")
        this.statusConverted=page.locator("//div[@data-value='Converted']")
        this.statusRecycled=page.locator("//div[@data-value='Recycled']")
        this.statusDead=page.locator("//div[@data-value='Dead']")
        this.searchBar=page.locator("[data-name='textFilter']")
        this.searchButton=page.locator("//button[@data-action='search']")
        this.searchResults=page.locator("//td[@class='cell']/a[@data-id]")

        this.LeadLinkBacktoMainPage=page.locator("//a[@data-action='navigateToRoot']")
        this.clickOnYes=page.locator("//button[@data-name='confirm']")
    }

    async selectNameHonarifics(title)
    {
       await this.namehonarifics.click()
       await this.namehonarifics.fill(title)
       await this.page.keyboard.press('Enter')
    }

    async CreateLeadWithMandatoryFields(firstname,lastname)
    {
        await this.createLeadButton.click()
      //  await this.selectNameHonarifics(leaddata.honarific)
        await this.firstname.fill(firstname)
        await this.lastName.fill(lastname)
        await this.accountname.fill("TCS")
        await this.leadEmail.fill("srush@gmail.com")
        await this.saveButton.click()
    }

      async CreateLeadWithAllFields(firstname,email,leaddata)
    {
        await this.createLeadButton.click()
      //  await this.selectNameHonarifics(leaddata.honarific)
        await this.firstname.fill(firstname)
        await this.lastName.fill(leaddata.lastname)
        await this.accountname.fill(leaddata.accountname)
        await this.leadEmail.fill(email)
        await this.leadPhoneNum.fill(leaddata.phone)
        await this.titleTextfield.fill(leaddata.title)
        await this.websiteTextField.fill(leaddata.website)
        await this.streetAddressTextField.fill(leaddata.street)
        await this.CityAddressTextField.fill(leaddata.city)
        await this.StateAddressTextField.fill(leaddata.state)
        await this.postalCodeAddressTextField.fill(leaddata.postalcode)
        await this.CountryAddressTextField.fill(leaddata.country)
        await this.saveButton.click()

    }

    async searchResultsFun(firstname)
    {
        if(await this.searchResults===firstname)
        {
            return true
        }
        return false
    }
    async searchLead(firstname)
    {
        await this.searchBar.fill(firstname)
       
        await this.searchButton.click()
       
        this.searchResultsFun(firstname)
        

    }


}