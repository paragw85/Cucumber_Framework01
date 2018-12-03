package action;

import org.openqa.selenium.WebDriver;

public class BaseClass {
	public static final String url = "https://www.amazon.in/";
	public static WebDriver driver = null;	
	
	public static WebDriver getDriver() {
		return driver;
	}

	public static void setDriver(WebDriver driver) {
		BaseClass.driver = driver;
	}

	/*public void createLocalDriver() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/drivers/chromedriver.exe");
		setDriver(new ChromeDriver());
		getDriver().manage().window().maximize();
		getDriver().get(url);
	}*/

	public void closeDriver() {
		getDriver().quit();
	}

}

