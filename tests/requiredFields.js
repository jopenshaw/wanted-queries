module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
          .waitForElementVisible('span[class="cake"]', 5000)
        },
        
    after: browser => {
        browser.end ()
    },
    'Valid entries in only required fields': browser => {
        browser
            .setValue('input[name="hdrInput"]', '9876543219')
            .setValue('input[name="mkeInput"]', 'ABC')
            .setValue('input[name="oriInput"]', 'OAI999999')
            .setValue('input[name="namInput"]', 'Jane Doe')
            .setValue('input[name="sexInput"]', 'F')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '504')
            .setValue('input[name="wgtInput"]', '150')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Forgot')
            .setValue('input[name="dowInput"]', '11112017')
            .click('#saveBtn')
            .waitForElementPresent('#validHeader', 5000)
            .expect.element('span[name="queryBody"]').text.to.equal('9876543219.ABC.OAI999999.Jane Doe.F.W.504.150.Brown.Forgot.11112017......').before(500)
},
    'Missing required field' : browser => {
        browser
            .setValue('input[name="hdrInput"]', '9876543219')
            .setValue('input[name="mkeInput"]', '')
            .setValue('input[name="oriInput"]', 'OAI999999')
            .setValue('input[name="namInput"]', 'Jane Doe')
            .setValue('input[name="sexInput"]', 'F')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '504')
            .setValue('input[name="wgtInput"]', '150')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Forgot')
            .setValue('input[name="dowInput"]', '11112017')
            .click('#saveBtn')
            .waitForElementPresent('#validHeader', 5000)
            .expect.element(".errorMessage").text.to.equal('The field named "MKE" must be included.').before(500)
},
    'All required and optional fields' : browser => {
        browser
            .setValue('input[name="hdrInput"]', '9876543219')
            .setValue('input[name="mkeInput"]', 'ABC')
            .setValue('input[name="oriInput"]', 'OAI999999')
            .setValue('input[name="namInput"]', 'Jane Doe')
            .setValue('input[name="sexInput"]', 'F')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '504')
            .setValue('input[name="wgtInput"]', '150')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Forgot')
            .setValue('input[name="dowInput"]', '11112017') 
            .setValue('input[name="olnInput"]', 'ut123456')
            .setValue('input[name="olsInput"]', 'UT')
            .setValue('input[name="olyInput"]', '11012018')
            .setValue('input[name="licInput"]', 'HLY1CN49')
            .setValue('input[name="lisInput"]', 'UT')
            .setValue('input[name="liyInput"]', '2009')
            .click('#saveBtn')
            .waitForElementPresent('#validHeader', 5000)
            .expect.element('span[name="queryBody"]').text.to.equal('9876543219.ABC.OAI999999.Jane Doe.F.W.504.150.Brown.Forgot.11112017.ut123456.UT.11012018.HLY1CN49.UT.2009').before(500)
},
    '2 optional DL field' : browser => {
        browser
            .setValue('input[name="hdrInput"]', '9876543219')
            .setValue('input[name="mkeInput"]', 'ABC')
            .setValue('input[name="oriInput"]', 'OAI999999')
            .setValue('input[name="namInput"]', 'Jane Doe')
            .setValue('input[name="sexInput"]', 'F')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '504')
            .setValue('input[name="wgtInput"]', '150')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Forgot')
            .setValue('input[name="dowInput"]', '11112017') 
            .setValue('input[name="olnInput"]', '')
            .setValue('input[name="olsInput"]', '')
            .setValue('input[name="olyInput"]', '')
            .setValue('input[name="licInput"]', 'HLY1CN49')
            .setValue('input[name="lisInput"]', 'UT')
            .setValue('input[name="liyInput"]', '')
            .click('#saveBtn')
            .waitForElementPresent('#validHeader', 5000)
            .expect.element(".errorMessage").text.to.equal('If License Plate, License State, or License Year are present, all three must be present.').before(500)
    },
    '1 optional DL field' : browser => {
        browser
            .setValue('input[name="hdrInput"]', '9876543219')
            .setValue('input[name="mkeInput"]', 'ABC')
            .setValue('input[name="oriInput"]', 'OAI999999')
            .setValue('input[name="namInput"]', 'Jane Doe')
            .setValue('input[name="sexInput"]', 'F')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '504')
            .setValue('input[name="wgtInput"]', '150')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Forgot')
            .setValue('input[name="dowInput"]', '11112017') 
            .setValue('input[name="olnInput"]', 'ut123456')
            .setValue('input[name="olsInput"]', '')
            .setValue('input[name="olyInput"]', '')
            .setValue('input[name="licInput"]', '')
            .setValue('input[name="lisInput"]', '')
            .setValue('input[name="liyInput"]', '')
            .click('#saveBtn')
            .waitForElementPresent('#validHeader', 5000)
            .expect.element(".errorMessage").text.to.equal('If Operator License Number, DL State, or DL Expiration Year are present, all three must be present.').before(500)
},
}