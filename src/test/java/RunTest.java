
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
        features = {"classpath:features/Amazon.feature"},
        format = {"pretty","html:target/cucumber"},
        tags = {"@complete"})

/**
 * Created by Lucho on 23/07/2016.
 */
public class RunTest {
}




//  !!!  "Check the price of the book Monday 25.07 is the same, if not will give an error. "