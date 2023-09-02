const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
let translator = new Translator();

suite('Functional Tests', function() {
  this.timeout(5000);

  test('Translation with text and locale fields', function(done) {
    let text = `Mangoes are my favorite fruit.`;
    let translation = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text: text,
        locale: `american-to-british`,
      })
      .end((err, res) => {
        assert.isObject(res.body,'Expected output to be an object');
        assert.property(res.body, "text", 'Expected object to have property text');
        assert.property(res.body, "translation", 'Expected object to have property translation');
        assert.deepEqual(res.body,{text: text, translation: translation}, 'Expected output as object with text and translation properties');
        done();
      });
  });
  
  test('Translation with text and invalid locale field', function(done) {
    let text = `Mangoes are my favorite fruit.`;
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text: text,
        locale: `Invalid`,
      })
      .end((err, res) => {
        assert.isObject(res.body,'Expected output to be an object');
        assert.property(res.body, "error", 'Expected object to have property error');
        assert.deepEqual(res.body,{error: "Invalid value for locale field"}, 'Expected output as object with error message');
        done();
      });
  });

  test('Translation with missing text field', function(done) {
    let text = undefined;
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text: text,
        locale: `american-to-british`,
      })
      .end((err, res) => {
        assert.isObject(res.body,'Expected output to be an object');
        assert.property(res.body, "error", 'Expected object to have property error');
        assert.deepEqual(res.body,{error: "Required field(s) missing"}, 'Expected output as object with error message');
        done();
      });
  });

  test('Translation with missing locale field', function(done) {
    let text = `Mangoes are my favorite fruit.`;
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text: text,
        locale: undefined,
      })
      .end((err, res) => {
        assert.isObject(res.body,'Expected output to be an object');
        assert.property(res.body, "error", 'Expected object to have property error');
        assert.deepEqual(res.body,{error: "Required field(s) missing"}, 'Expected output as object with error message');
        done();
      });
  });

  test('Translation with empty text', function(done) {
    let text = ``;
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text: text,
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.isObject(res.body,'Expected output to be an object');
        assert.property(res.body, "error", 'Expected object to have property error');
        assert.deepEqual(res.body,{error: "No text to translate"}, 'Expected output as object with error message');
        done();
      });
  });

  test('Translation with text that needs no translation', function(done) {
    let text = `This text needs no translation.`;
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({
        text: text,
        locale: "american-to-british",
      })
      .end((err, res) => {
        assert.isObject(res.body,'Expected output to be an object');
        assert.property(res.body, "text", 'Expected object to have property text');
        assert.property(res.body, "translation", 'Expected object to have property translation');
        assert.deepEqual(res.body,{text: text, translation: "Everything looks good to me!"}, 'Expected output as object with message: Everything looks good to me!');
        done();
      });
  });
  
});
