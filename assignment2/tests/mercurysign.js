module.exports = {
    'Demo test DuckDuckGo search' : function (browser) {
      browser
        .url('http://newtours.demoaut.com/mercurysignon.php')
        .waitForElementVisible('body', 1000)
        .waitForElementVisible('#userName', 1000)
        .setValue('.userName', 'bharath')
        .setValue('.password', 'baru9673')
        .click('.image')
        .keys(`nightwatch js`)
        
        .assert.containsText('#web_content_wrapper', 'Nightwatch.js')
        .saveScreenshot(`./output/search.png`)
        .end();
    }
};