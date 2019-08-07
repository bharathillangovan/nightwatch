module.exports={
    'Login test':function (client){
        client
        .url('http://localhost:7777/login')
        .waitForElementVisible('input[name=user_name]',1000)
        .setValue('input[name=user_name]','')
        //.waitForElementVisible('input[name=user_name]',1000)
        .click('input[type=submit]')
        .assert.containsText('#errormessage','User name or password is not correct.')
        .end()
    }
};