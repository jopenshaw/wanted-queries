var ewPage = {}

module.exports = {
    beforeEach: browser => {
        ewPage = browser.page.ewPage()
        ewPage.navigate()
            .waitForElementPresent("#versionNumber", 5000)
    },
    after: browser => {
        browser.end()
    },
    'Submit a valid query': browser => {
        ewPage
            .setValue('@HeaderInput', '1234567890')
            .setValue('@MKEInput', 'MKE')
            .setValue('@OAIInput', 'OAI123456')
            .setValue('@NameInput', 'Minnie Mouse')
            .setValue('@SexInput', 'F')
            .setValue('@RaceInput', 'W')
            .setValue('@HeightInput', '302')
            .setValue('@WeightInput', '52')
            .setValue('@HairInput', 'Black')
            .setValue('@OffenseInput', 'Cuteness')
            .setValue('@DateOfWarrantInput', '03192018')
            .click('@submitButton')
            .expect.element('@QueryResult').text.to.equal('1234567890.ABC.OAI123456.Harry Dresden.M.W.607.225.Brown.Arson.10312010......').before(500)
    },
    'Submit an invalid query': browser => {
        ewPage
            .setValue('input[name="namInput"]', 'Mickey Mouse')
            .click('@submitButton')
            .expect.element('@QueryError').text.to.equal('No results generated due to error.').before(500)
    },
    
}
