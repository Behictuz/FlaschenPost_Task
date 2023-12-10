## Requirements

- [Node.js](https://nodejs.org/) must be installed.
- Install project dependencies using the following command:

   ```bash
   npm install

## Run the tests using the following command:  

1) if you want to run specific test, you can run the following scripts
     npm run add_chart
     npm run fast_connection
     npm run slow_connection
2) if you want to run all test, you can run the following script    
     npm run test_all

## Configuration
WebdriverIO configurations are defined in wdio.conf.js. Modify this file to customize browser settings, devices, and other configurations.

This project is currently configured to run tests in "incognito" mode. If you wish to disable this feature, you can modify the wdio.conf.js file and remove the "incognito" browser option.
                        *** TASK  ***
flaschenpost SE – IT Exercise Task #XX „Create a set of automated tests“
Task 1 “PLZ Modal”
•
•
Write an automated test that will visit flaschenpost.de, enter a ZIP code (e.g. 48143), click
“geht klar“ and validate that the user landed on the homepage.
Take a moment to look at the requests and responses made when user lands on the website
on a new incognito tab. Assuming the system is loading asynchronously, what could go
wrong with the test, if user has slow internet connection? (Hint: You might recognize a
correspondence between the response of one of the initial requests and a user input)
What could be done in order to avoid the flakiness described in the previous step?
Implement your solution to avoid flakiness.
•
•
Task 2 “Add to cart”
•
•
Write a second automated test that will do what’s described in Task 1 and the following:
Go to one of these 3 category pages {bier, wasser, rotwein} at random, add/remove the first
available item to basket as many times needed to validate that each time the correct
delivery fee for the given equivalence partitions shown in the image below is added to the
basket based on the basket total. Delivery fee info table can be reached by clicking the link in
the basket that’s marked in the image. (On the left side of delivery fee in the basket)
• Take into consideration that the product prices may change in time.
•
•
Suppose the test case implemented for Task 1 will always be executed before task 2; list
your ideas about how to Improve your solution for Task 2, in a way that during execution of
Task 2, steps covered by Task 1 won’t be re-executed (entering Zip code and clicking “geht
klar” ..)
Bonus: Implement your improved solution
