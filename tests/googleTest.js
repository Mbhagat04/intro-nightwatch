module.exports = {
    '@tags':['google'],
    'Google Search Elon Musk'(browser){
        const mainQuery = "Elon Musk";
        const mainInputSearch = 'input[name="as_q"]';
        const langugage_selector_drorpdown = 'div[id="lr_button"]';
        const language_selectValue_dropdown = '.goog-menuitem[value="lang_en"]'
        const last_update_dropdown = 'div[id="as_qdr_button"]';
        const last_update_value_dropdown = '.goog-menuitem[value="d"]';
        const Search_Button = 'input[value="Advanced Search"]';
      
        browser
        .url("https://www.google.com/advanced_search")
        .setValue(mainInputSearch,mainQuery)
        .click(langugage_selector_drorpdown)
        .click(language_selectValue_dropdown)

        .click(last_update_dropdown)
        .click(last_update_value_dropdown)
        .click(Search_Button)
        .saveScreenshot('tests_output/google.png')

    }
}