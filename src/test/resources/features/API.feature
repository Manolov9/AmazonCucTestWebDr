Feature: Verify Local test

  @completeAPI
  Scenario: Navigate to Local check pageE
    Given I amsS on the website 'http://api.plos.org/search?q=title:DNA'
    When  query content for the right properties 'http://api.plos.org/search?q=title:DNA'