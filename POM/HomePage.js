export class HomePage{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page)
    {
        this.page=page
        this.leadLink= page.locator("//span[text()='Leads' and @class='full-label']")//page.getByRole('link',{name:"Leads"})
        this.expandSideMenuButton=page.locator(".side-menu-button")
        this.contactsLink=page.getByRole('link',{name:"Contacts"})
        this.accountsLink=page.getByRole('link',{name:"Accounts"})
        this.OpportunitiesLink=page.getByRole('link',{name:"Opportunities"})
        this.MeetingsLink=page.getByRole('link',{name:"Meetings"})
         this.CallsLink=page.getByRole('link',{name:"Calls"})
          this.TasksLink=page.getByRole('link',{name:"Tasks"})
          this.moreNavigationTab=page.locator("nav-more-tabs-dropdown")
    }

    async OpenLead()
    {
        await this.expandSideMenuButton.click()
       await this.leadLink.click()
    }

     async OpenAccount()
    {
        await this.expandSideMenuButton.click()
       await this.accountsLink.click()
    }

     async OpenContact()
    {
        await this.expandSideMenuButton.click()
       await this.contactsLink.click()
    }

     async OpenOppourtiniy()
    {
        await this.expandSideMenuButton.click()
       await this.OpportunitiesLink.click()
    }
}