const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator { 
    
    
    toBritish(text){

        let translated_text = text
        const regex_A = /(\d{1,2})\:(\d{2})/ 
        if(regex_A.test(text) ) {
            translated_text = text.replace(regex_A ,`<span class="highlight">${"$1.$2"}</span>`);
        }
        for( const [american , british] of Object.entries(americanOnly )){
            const regex = new RegExp(`\\b${american}\\b`, 'gi');
            translated_text = translated_text.replace(regex ,`<span class="highlight">${british}</span>`);
        }
        for( const [american , british] of Object.entries(americanToBritishSpelling )){
            const regex = new RegExp(`\\b${american}\\b`, 'gi');
            translated_text = translated_text.replace(regex ,`<span class="highlight">${british}</span>`);
        }
        for( const [american , british] of Object.entries(americanToBritishTitles )){
            const regex = new RegExp(`\\b${american.replace('.', '\\.')}`, 'gi');
            translated_text = translated_text.replace(regex ,`<span class="highlight">${british}</span>`);
        }
        for( const [british , american] of Object.entries(britishOnly )){
            const regex = new RegExp(`\\b${american}\\b`, 'gi');
            translated_text = translated_text.replace(regex ,`<span class="highlight">${british}</span>`);
        }

        return translated_text
    }

    toAmerican(text){
        let translated_text = text
        const regex_B = /(\d{1,2})\.(\d{2})/ ; 
        if(regex_B.test(text) ) {
            translated_text = text.replace(regex_B ,`<span class="highlight">${"$1:$2"}</span>`);
          }

        for( const [american , british] of Object.entries(americanOnly )){
            const regex = new RegExp(`\\b${british}\\b`, 'gi');
            translated_text = translated_text.replace(regex ,`<span class="highlight">${american}</span>`);
        }
        for( const [american , british] of Object.entries(americanToBritishSpelling )){
            const regex = new RegExp(`\\b${british}\\b`, 'gi');
            translated_text = translated_text.replace(regex ,`<span class="highlight">${american}</span>`);
        }
        for( const [american , british] of Object.entries(americanToBritishTitles )){
            const regex = new RegExp(`\\b${british}\\b`, 'gi');
            translated_text = translated_text.replace(regex ,`<span class="highlight">${american}</span>`);
        }
        for( const [british , american] of Object.entries(britishOnly )){
            const regex = new RegExp(`\\b${british}\\b`, 'gi');
            translated_text = translated_text.replace(regex ,`<span class="highlight">${american}</span>`);
        }
        return translated_text
    }

}

module.exports = Translator;