const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    suite('to British English', () => {
        test("Mangoes are my favorite fruit." , function(done){
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

        test("I ate yogurt for breakfast." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "I ate yogurt for breakfast.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.');
                    done();
                })

        })

        test("We had a party at my friend's condo." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "We had a party at my friend's condo.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,`We had a party at my friend's <span class="highlight">flat</span>.`);
                    done();
                })

        })

        test("Can you toss this in the trashcan for me?" , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Can you toss this in the trashcan for me?",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'Can you toss this in the <span class="highlight">bin</span> for me?');
                    done();
                })

        })

        test("The parking lot was full." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "The parking lot was full.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'The <span class="highlight">car park</span> was full.');
                    done();
                })

        })

        test("Like a high tech Rube Goldberg machine." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Like a high tech Rube Goldberg machine.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'Like a high tech <span class="highlight">Heath Robinson device</span>.');
                    done();
                })

        })

        test("To play hooky means to skip class or work." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "To play hooky means to skip class or work.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'To <span class="highlight">bunk off</span> means to skip class or work.');
                    done();
                })

        })

        test("No Mr. Bond, I expect you to die." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "No Mr. Bond, I expect you to die.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'No <span class="highlight">Mr</span> Bond, I expect you to die.');
                    done();
                })

        })

        test("Dr. Grosh will see you now." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Dr. Grosh will see you now.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'<span class="highlight">Dr</span> Grosh will see you now.');
                    done();
                })

        })

        test("Lunch is at 12:15 today." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Lunch is at 12:15 today.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'Lunch is at <span class="highlight">12.15</span> today.');
                    done();
                })

        })


    })
    suite('to American English', () => {
        test("We watched the footie match for a while." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "We watched the footie match for a while.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'We watched the <span class="highlight">soccer</span> match for a while.');
                    done();
                })

        })

        test("Paracetamol takes up to an hour to work." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Paracetamol takes up to an hour to work.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'<span class="highlight">acetaminophen</span> takes up to an hour to work.');
                    done();
                })

        })

        test("First, caramelise the onions." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "First, caramelise the onions.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'First, <span class="highlight">caramelize</span> the onions.');
                    done();
                })

        })

        test("I spent the bank holiday at the funfair." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "I spent the bank holiday at the funfair.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
                    done();
                })

        })

        test("I had a bicky then went to the chippy." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "I had a bicky then went to the chippy.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.');
                    done();
                })

        })

        test("I've just got bits and bobs in my bum bag." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "I've just got bits and bobs in my bum bag.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,`I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
                    done();
                })

        })

        test("The car boot sale at Boxted Airfield was called off." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "The car boot sale at Boxted Airfield was called off.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
                    done();
                })

        })

        test("Have you met Mrs Kalyani?" , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Have you met Mrs Kalyani?",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'Have you met <span class="highlight">Mrs.</span> Kalyani?');
                    done();
                })

        })

        test("Prof Joyner of King's College, London." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Prof Joyner of King's College, London.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,`<span class="highlight">Prof.</span> Joyner of King's College, London.`);
                    done();
                })

        })

        test("Tea time is usually around 4 or 4.30." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Tea time is usually around 4 or 4.30.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
                    done();
                })

        })
        
    })
    suite('Highlight', () => {

        test("Mangoes are my favorite fruit." , function(done){
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

        test("I ate yogurt for breakfast." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "I ate yogurt for breakfast.",
                    locale:  'american-to-british',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.');
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
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'We watched the <span class="highlight">soccer</span> match for a while.');
                    done();
                })

        })

        test("Paracetamol takes up to an hour to work." , function(done){
            chai
                .request(server)
                .post('/api/translate')
                .set('content-type' , "application/json")
                .send({
                    text: "Paracetamol takes up to an hour to work.",
                    locale:  'british-to-american',
                })
                .end(function(err,res){
                    console.log(res.body);
                    assert.equal(res.status, 200);
                    assert.equal(res.body.translation,'<span class="highlight">acetaminophen</span> takes up to an hour to work.');
                    done();
                })

        })


        
    })

});
