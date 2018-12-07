package action;

import org.openqa.selenium.interactions.Actions;

import locator.LoginLocators;

public class LoginAction extends BaseClass {

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
	public void mouseOver_on_Hello1() {
		System.out.println("LogOut Starts");
		Actions action1=new Actions(driver );
		action1.moveToElement(locator.logoutBtn).build().perform();
		
	}
	public void clickOn_Logout1() {
		System.out.println("Logout Click");
		locator.logout.click();
	}
}
