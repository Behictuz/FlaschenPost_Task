Feature: The Internet Guinea Pig Website

Scenario:  loading of web page with wifi connection
  Given I am on the home Page with normal connection speed  
  When I enter the zip Code
  When I click geht klar button
  Then I should see entered Zip code on Home Page
