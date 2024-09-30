'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      // req.body = {'text' : 'accessorize hello mrs. world backhoe abseil 30:24 hello juvie yellow light world' , 'locale' : 'british-to-american'}
      // let translated_text = 'I ate yoghurt for breakfast.'
      let translated_text = '';

      console.log( req.body);
      let {text, locale}  = req.body;
      
      if(text == ''){
        console.log(new Date() + "," + text )
        return res.json({error: 'No text to translate'})
        // res.json({err: 'No text to translate'})
      }else if (!text || !locale){
        console.log(new Date() + "," + text )
        return res.json({ error: 'Required field(s) missing' })
      }else if (!(locale == 'american-to-british' || locale == 'british-to-american') ){
        console.log(new Date() + "," + text )
        return res.json({ error: 'Invalid value for locale field' })
      }

      if(locale == 'american-to-british'){
        translated_text = translator.toBritish(text)
      }

      if(locale == 'british-to-american'){
        translated_text = translator.toAmerican(text)
      }
      

      if (translated_text === text ){
        console.log(new Date() + "," + translated_text )
        return res.json({ text , translation : "Everything looks good to me!" })
      } 

      return res.json({ text, translation : translated_text });
      

      
    });
};
