var employeePage = {}

var ewFunction = (functionPage, hdr, mke, oai, name, sex, race, height, weight, hair, offense, warrant, dl, dls, dldate,) => {
    functionPage
        .setValue('@HeaderInput', hdr)
        .setValue('@MKEInput', mke)
        .setValue('@OAIInput', oai)
        .setValue('@NameInput', name)
        .setValue('@SexInput', sex)
        .setValue('@RaceInput', race)
        .setValue('@HeightInput', height)
        .setValue('@WeightInput', weight)
        .setValue('@HairInput', hair)
        .setValue('@OffenseInput', offense)
        .setValue('@DateOfWarrantInput', warrant)
        .setValue('@DLInput', dl)
        .click('@submitButton')
    functionPage
        .expect.element('@Error').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
}

module.exports = {
    beforeEach: browser => {
        employeePage = browser.page.ewPage()
        employeePage.navigate
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
            .waitForElementPresent("#versionNumber", 5000)
    },
    after: browser => {
        browser.end()
    },

'Function Test': browser => {
    ewFunction(functionPage, 'Header Required', 'MKE', 'OAI123456', 'Jon Doe', 'M', 'W', '601', '195', 'Brown', 'Forgot', '01012018', 'UT123456', 'UT', '08172018' )
},

/* 'DL error caused by missing DL #': browser => {
    browser
        .setValue('@HeaderInput', 'hdr')
        .setValue('@MKEInput', 'mke')
        .setValue('@OAIInput', 'oai')
        .setValue('@NameInput', 'name')
        .setValue('@SexInput', 'sex')
        .setValue('@RaceInput', 'race')
        .setValue('@HeightInput', 'height')
        .setValue('@HeightInput', 'weight')
        .setValue('@HairInput', 'hair')
        .setValue('@OffenseInput', 'offense')
        .setValue('@DateOfWarrantInput', 'warrant')
        .setValue('@DLInput', 'dl')
        .click('@submitButton')
        .expect.element('@Error').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
    },
'DL error caused by missing DL State': browser => {
    browser
        .setValue('@HeaderInput', 'hdr')
        .setValue('@MKEInput', 'mke')
        .setValue('@OAIInput', 'oai')
        .setValue('@NameInput', 'name')
        .setValue('@SexInput', 'sex')
        .setValue('@RaceInput', 'race')
        .setValue('@HeightInput', 'height')
        .setValue('@HeightInput', 'weight')
        .setValue('@HairInput', 'hair')
        .setValue('@OffenseInput', 'offense')
        .setValue('@DateOfWarrantInput', 'warrant')
        .setValue('DLStateInput', 'dls')
        .click('@submitButton')
        .expect.element('@Error').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
    },
    'DL caused by missing DL Expiration': browser => {
        browser
            .setValue('@HeaderInput', 'hdr')
            .setValue('@MKEInput', 'mke')
            .setValue('@OAIInput', 'oai')
            .setValue('@NameInput', 'name')
            .setValue('@SexInput', 'sex')
            .setValue('@RaceInput', 'race')
            .setValue('@HeightInput', 'height')
            .setValue('@HeightInput', 'weight')
            .setValue('@HairInput', 'hair')
            .setValue('@OffenseInput', 'offense')
            .setValue('@DateOfWarrantInput', 'warrant')
            .setValue('@DLExpireDate', 'dldate')
            .click('@submitButton')
            .expect.element('@Error').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
        }, */

}