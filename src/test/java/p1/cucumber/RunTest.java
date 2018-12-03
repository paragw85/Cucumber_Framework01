package p1.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/feature",
        glue = "steps",
        tags={"@smoke1"}

		)

public class RunTest {
	
}
