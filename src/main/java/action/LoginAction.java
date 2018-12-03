package action;

import locator.LoginLocators;

public class LoginAction {

	LoginLocators locator=new LoginLocators();
	public void Login(){
	locator.loginBtn.click();
		
	}
	public void click_on_Signin(){
		System.out.println("User Click On Hello sign in tab");
		locator.loginBtn.click();
	}
	public void user_enters_username(String loginid) {
		System.out.println("Enter UserName"+ loginid);
		locator.username.sendKeys(loginid);
	}
	
	public void click_on_continue(){
		System.out.println("User click on continue");
		locator.submit.click();
	}
	public void user_enters_password(String Password) {
	System.out.println("Enter password"+Password);
	locator.password.sendKeys(Password);
	}
	public void user_clicks_onSignIn() throws Throwable {
		System.out.println("Click Login button");
		locator.login.click();
	}
}
