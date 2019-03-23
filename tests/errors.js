var ewFunction = (functionPage, hdr, mke, oai, name, sex, height, weight, hair, offense, warrant, dl, dls, dldate,) => {
    functionPage
        .setValue('input[name="hdrInput"]', '')
        .setValue('input[name="mkeInput"]', 'MKE')
        .setValue('input[name="oriInput"]', 'OAI123456')
        .setValue('input[name="namInput"]', 'Jon Doe')
        .setValue('input[name="sexInput"]', 'M')
        .setValue('input[name="racInput"]', 'W')
        .setValue('input[name="hgtInput"]', '601')
        .setValue('input[name="wgtInput"]', '195')
        .setValue('input[name="haiInput"]', 'Brown')
        .setValue('input[name="offInput"]', 'Forgot')
        .setValue('input[name="dowInput"]', '01012015')
        .setValue('input[name="olnInput"]', 'UT123456')
        .setValue('input[name="olsInput"]', 'UT123456')
        .click('#saveBtn')
        .expect.element('#errorList').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
}

module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
            .waitForElementPresent("#versionNumber", 5000)
    },
    after: browser => {
        browser.end()
    },

'DL error caused by missing DL #': browser => {
    browser
        .setValue('input[name="hdrInput"]', '1234567890')
        .setValue('input[name="mkeInput"]', 'MKE')
        .setValue('input[name="oriInput"]', 'OAI123456')
        .setValue('input[name="namInput"]', 'Jon Doe')
        .setValue('input[name="sexInput"]', 'M')
        .setValue('input[name="racInput"]', 'W')
        .setValue('input[name="hgtInput"]', '601')
        .setValue('input[name="wgtInput"]', '195')
        .setValue('input[name="haiInput"]', 'Brown')
        .setValue('input[name="offInput"]', 'Forgot')
        .setValue('input[name="dowInput"]', '01012015')
        .setValue('input[name="olnInput"]', 'UT123456')
        .click('#saveBtn')
        .expect.element('#errorList').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
    },
'DL error caused by missing DL State': browser => {
    browser
        .setValue('input[name="hdrInput"]', '1234567890')
        .setValue('input[name="mkeInput"]', 'MKE')
        .setValue('input[name="oriInput"]', 'OAI123456')
        .setValue('input[name="namInput"]', 'Jon Doe')
        .setValue('input[name="sexInput"]', 'M')
        .setValue('input[name="racInput"]', 'W')
        .setValue('input[name="hgtInput"]', '601')
        .setValue('input[name="wgtInput"]', '195')
        .setValue('input[name="haiInput"]', 'Brown')
        .setValue('input[name="offInput"]', 'Forgot')
        .setValue('input[name="dowInput"]', '01012015')
        .setValue('input[name="olsInput"]', 'UT123456')
        .click('#saveBtn')
        .expect.element('#errorList').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
    },
    'DL caused by missing DL Expiration': browser => {
        browser
            .setValue('input[name="hdrInput"]', '1234567890')
            .setValue('input[name="mkeInput"]', 'MKE')
            .setValue('input[name="oriInput"]', 'OAI123456')
            .setValue('input[name="namInput"]', 'Jon Doe')
            .setValue('input[name="sexInput"]', 'M')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '601')
            .setValue('input[name="wgtInput"]', '195')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Forgot')
            .setValue('input[name="dowInput"]', '01012015')
            .setValue('input[name="olyInput"]', 'UT123456')
            .click('#saveBtn')
            .expect.element('#errorList').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
        },

}