
module.exports = {
  'Login Page Initial Render': function(browser) {
    var login = browser.page.simpleLogin();

    login.navigate()
      .waitForElementVisible( 'body', 1000 )
      .verify.visible('@username')
      .verify.visible('@password')
      .verify.value( '@submit', 'Log In' )
      .verify.elementNotPresent('@error')

    browser.end();
  },



  

};
