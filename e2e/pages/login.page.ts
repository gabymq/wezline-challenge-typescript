import { Selector, t } from "testcafe";

export class LoginPage {
    userNameField = Selector("#user-name")
    passwordField = Selector("#password")
    loginButton = Selector("#login-button")
    errorMessage = Selector('h3[data-test="error"]')

    async typeInUserNameField(value:string){
        return await t.typeText(this.userNameField, value)
    }
    async typeInPasswordField(value:string){
        return await t.typeText(this.passwordField, value)
    }
    async clickInLoginButton(){
        return await t.click(this.loginButton)
    }

}