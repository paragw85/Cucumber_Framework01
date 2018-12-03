package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import locator.LoginLocators;

public class LoginSteps {
	LoginLocators locator=new LoginLocators();
	
	@When("^User click on loginBtn$")
	public void click_on_Signin(){
		System.out.println("User Click On Hello sign in tab");
		locator.loginBtn.click();
	}

	@When("^User enters loginid \"([^\"]*)\"$")
	public void user_enters_username(String loginid) {
		System.out.println("Enter UserName"+ loginid);
		locator.username.sendKeys(loginid);
		
	}
	
	@When ("^User click on Continue button$")
	public void click_on_continue(){
		System.out.println("User click on continue");
		locator.submit.click();
		
	}
	

	@When("^User enters Password \"([^\"]*)\"$")
	public void user_enters_password(String Password) {
		System.out.println("Enter password"+Password);
		locator.password.sendKeys(Password);
	}

	@When("^User clicks on Login button$")
	public void user_clicks_onSignIn() throws Throwable {
		System.out.println("Click Login button");
		locator.login.click();
	}

	@Then("^User is successfully logged in$")
	public void user_is_displayed_login_screen() throws Throwable {
		System.out.println("Successfull Login!!");
	}
}
