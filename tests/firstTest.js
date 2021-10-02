module.exports = {
    'My First Test Case'(browser){
        browser
        .url("https://nightwatchjs.org/")
        .assert.containsText('h1','Nightwatch')
    }
}