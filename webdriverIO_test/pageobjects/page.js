const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * I have 2 different open browser option
    * 1) Slow connection with 'incognito' tab
    * I used timeout for slow connection and then when there was slow internet connection i could see if there was a change on the page. 
    ******  I also set the "incognito"  tab browser setting in the chrome options in the wdio.conf.js file  ******
    * This means i waited until the page loaded.
    * 2) Normal connection.
    * I created a method at normal connection  speed and I didn't set a special wait time for it, because the default timeout time is enough for it.
    */
    slowConnectionOpen () {
        browser.throttleNetwork('Regular4G');
        browser.url(`https://www.flaschenpost.de/`);
        browser.waitUntil(() => browser.getUrl() === 'https://www.flaschenpost.de/', {
        timeout: 70000, 
        timeoutMsg: 'Page did not load within the specified time'
        });
    }
    
    open () {
        return browser.url(`https://www.flaschenpost.de/`);
    }
    

   
}