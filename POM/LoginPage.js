


export class LoginPage{
     /**
     * @param {import('playwright').Page} page 
     */
    constructor(page)
    {
        this.page=page
        this.username=page.locator("#field-userName")
        this.password=page.locator("#field-password")
        this.loginButton=page.getByRole('button',{name:"Log in"})
    }

    async loginToPage(url,username,password)
    {
        await this.page.goto(url)
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

}