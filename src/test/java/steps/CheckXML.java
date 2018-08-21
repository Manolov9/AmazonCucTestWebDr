package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsString;

public class CheckXML {
    @Given("^I amsS on the website '(.+)'$")
    public void I_amS_on_the_website(String url) throws Throwable {
        // Specify the base URL to the RESTful web service
        RestAssured.baseURI = "http://api.plos.org/search?q=title:DNA";

        // Get the RequestSpecification of the request that you want to sent
        // to the server. The server is specified by the BaseURI that we have
        // specified in the above step.
        RequestSpecification httpRequest = given();

        // Make a GET request call directly by using RequestSpecification.get() method.
        // Make sure you specify the resource name.
        Response response1 = httpRequest.get(url);

        Response response2 = httpRequest.get(url);

        // Response.asString method will directly return the content of the body
        // as String.
        System.out.println("Response Body is =>  " + response1.asString() + response2.asString());
        Assert.assertEquals("The queries should be equal and the same", response1.asString(), response2.asString());

    }

    @When("^query content for the right properties '(.+)'$")
    public void query_content_for_the_right_properties(String url2) throws Throwable {
        given().when().get(url2).then()
                .body(containsString("publication_date"))
                .body(containsString("2007-03-14T00:00:00Z"));
    }
}
