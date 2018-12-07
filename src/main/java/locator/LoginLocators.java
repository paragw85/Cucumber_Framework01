package locator;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import action.BaseClass;

public class LoginLocators extends BaseClass{

	public LoginLocators(){
		PageFactory.initElements(getDriver(), this);
	}	
	@FindBy(xpath="//span[text()='Hello. Sign in']")
	public WebElement loginBtn;
	
	@FindBy(xpath="//input[@id=('ap_email')]")
	public WebElement username;
	
	@FindBy(xpath="//input[@id=('continue')]")
	public WebElement submit;
	
	@FindBy(xpath="//input[@id=('ap_password')]")
	public WebElement password;
	
	@FindBy(xpath="//input[@id='signInSubmit']")
	public WebElement login;
	
	@FindBy(xpath="//span[text()='Hello, Parag']")
	public WebElement logoutBtn;
	
	@FindBy(xpath="//*[@id='nav-item-signout']/span")
	public WebElement logout;
	
	//@FindBy(xpath="//*[@id='nav-item-signout']/span")
	//public WebElement logout;
}
