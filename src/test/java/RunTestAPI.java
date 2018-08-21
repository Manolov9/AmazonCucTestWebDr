
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
        features = {"classpath:features/API.feature"},
        format = {"pretty","html:target/cucumber"},
        tags = {"@completeAPI"})


public class RunTestAPI {
}
