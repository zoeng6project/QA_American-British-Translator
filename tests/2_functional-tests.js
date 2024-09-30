const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test("text and locale fields" , function(done){
        chai
            .request(server)
            .post('/api/translate')
            .set('content-type' , "application/json")
            .send({
                text: "Mangoes are my favorite fruit.",
                locale:  'american-to-british',
            })
            .end(function(err,res){
                console.log(res.body);
                assert.equal(res.status, 200);
                assert.equal(res.body.translation,'Mangoes are my <span class="highlight">favourite</span> fruit.');
                done();
            })

    })

    test("text and invalid locale field" , function(done){
        chai
            .request(server)
            .post('/api/translate')
            .set('content-type' , "application/json")
            .send({
                text: "Mangoes are my favorite fruit.",
                locale:  'americankjhk-to-british',
            })
            .end(function(err,res){
                console.log(res.body);
                assert.equal(res.status, 200);
                assert.equal(res.body.error,'Invalid value for locale field');
                done();
            })

    })


    test("missing text field" , function(done){
        chai
            .request(server)
            .post('/api/translate')
            .set('content-type' , "application/json")
            .send({        
                locale:  'american-to-british',
            })
            .end(function(err,res){
                console.log(res.body);
                assert.equal(res.status, 200);
                assert.equal(res.body.error,'Required field(s) missing');
                done();
            })

    })

    test("missing locale field" , function(done){
        chai
            .request(server)
            .post('/api/translate')
            .set('content-type' , "application/json")
            .send({
                text: "Mangoes are my favorite fruit.",
                locale:  '',
            })
            .end(function(err,res){
                console.log(res.body);
                assert.equal(res.status, 200);
                assert.equal(res.body.error,'Required field(s) missing');
                done();
            })

    })


    test("empty text" , function(done){
        chai
            .request(server)
            .post('/api/translate')
            .set('content-type' , "application/json")
            .send({
                text: "",
                locale:  'american-to-british',
            })
            .end(function(err,res){
                console.log(res.body);
                assert.equal(res.status, 200);
                assert.equal(res.body.error,'No text to translate');
                done();
            })

    })

    test("We watched the footie match for a while." , function(done){
        chai
            .request(server)
            .post('/api/translate')
            .set('content-type' , "application/json")
            .send({
                text: "We watched the footie match for a while.",
                locale:  'american-to-british',
            })
            .end(function(err,res){
                console.log(res.body);
                assert.equal(res.status, 200);
                assert.equal(res.body.translation,'Everything looks good to me!');
                done();
            })

    })

});
