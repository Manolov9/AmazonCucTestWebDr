$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Add and verify in AMAZON.co.uk",
  "description": "Add book in basket and verify",
  "id": "add-and-verify-in-amazon.co.uk",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3168873209,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add book in basket and verify",
  "description": "",
  "id": "add-and-verify-in-amazon.co.uk;add-book-in-basket-and-verify",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@complete"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": ": Add book test in amazon",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": ": Verify book steps in amazon",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": ": Complete test verify add book basket",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.Amazon_Book()"
});
formatter.result({
  "duration": 3252818941,
  "error_message": "java.lang.IllegalMonitorStateException\r\n\tat java.lang.Object.wait(Native Method)\r\n\tat steps.Steps.Amazon_Book(Steps.java:47)\r\n\tat ✽.Given : Add book test in amazon(features/Amazon.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.Verify_Steps()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.AddBasket_Verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1326808906,
  "status": "passed"
});
});