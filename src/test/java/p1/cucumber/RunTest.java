package p1.cucumber;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/feature",
        glue = "steps",
        tags={"@smoke"},
		//plugin={"pretty","html:output/Report"},
		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"}

		)

public class RunTest {
	 @AfterClass
	    public static void teardown() {
	        Reporter.loadXMLConfig(new File("src/test/resources/conf/extent-config.xml"));
	       
	    }
	
}
