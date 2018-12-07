package steps;

import action.LoginAction;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import locator.LoginLocators;

public class LoginSteps {
	LoginLocators locator=new LoginLocators();
	LoginAction action=new LoginAction();
	
	@When("^User click on loginBtn$")
	public void click_on_Signin1() {
		action.click_on_Signin();
	}
	
	/*public void click_on_Signin(){
		System.out.println("User Click On Hello sign in tab");
		locator.loginBtn.click();
	}*/

	@When("^User enters loginid \"([^\"]*)\"$")
	public void username(String loginid) {
		action.user_enters_username(loginid);
	}
	/*public void user_enters_username(String loginid) {
		System.out.println("Enter UserName"+ loginid);
		locator.username.sendKeys(loginid);
		
	}*/
	
	@When ("^User click on Continue button$")
	public void click_on_continue1(){
		action.click_on_continue();
	}
	
	/*public void click_on_continue(){
		System.out.println("User click on continue");
		locator.submit.click();
		
	}*/
	

	@When("^User enters Password \"([^\"]*)\"$")
	public void user_enters_password1(String Password) {
		action.user_enters_password(Password);
		
	}
	
	/*public void user_enters_password(String Password) {
		System.out.println("Enter password"+Password);
		locator.password.sendKeys(Password);
	}*/

	@When("^User clicks on Login button$")
	public void user_clicks_onSignIn1() throws Throwable {
		action.user_clicks_onSignIn();;
	}
	
	/*public void user_clicks_onSignIn() throws Throwable {
		System.out.println("Click Login button");
		locator.login.click();
	}*/

	@Then("^User is successfully logged in$")
	public void user_is_displayed_login_screen() throws Throwable {
		System.out.println("Successfull Login!!");
	}
	@When("^User move mouse pointer on Hello Username$")
	public void moveOver_on_hello() {
		System.out.println("Mouse over on Hello Parag");
		action.mouseOver_on_Hello1();
	}
	@And("^User cliks on logout$")
	public void clickOn_Logout() {
		System.out.println("User cliks on logout");
		action.clickOn_Logout1();
	}
	@Then("^User logged out from account")
	public void user_loggedOut() {
		System.out.println("User logged out from account");
	}
}
