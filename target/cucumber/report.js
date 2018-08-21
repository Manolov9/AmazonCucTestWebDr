$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/API.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Local test",
  "description": "",
  "id": "verify-local-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3980470187,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Navigate to Local check pageE",
  "description": "",
  "id": "verify-local-test;navigate-to-local-check-pagee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@completeAPI"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I amsS on the website \u0027http://api.plos.org/search?q\u003dtitle:DNA\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "query content for the right properties \u0027http://api.plos.org/search?q\u003dtitle:DNA\u0027",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.plos.org/search?q\u003dtitle:DNA",
      "offset": 23
    }
  ],
  "location": "CheckXML.I_amS_on_the_website(String)"
});
formatter.result({
  "duration": 2300286720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.plos.org/search?q\u003dtitle:DNA",
      "offset": 40
    }
  ],
  "location": "CheckXML.query_content_for_the_right_properties(String)"
});
formatter.result({
  "duration": 633113600,
  "status": "passed"
});
formatter.after({
  "duration": 1254245120,
  "status": "passed"
});
});