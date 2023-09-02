const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  //american only translate if american to british
  //british only translate if british to american
  //american to british -- translate both ways.
  
  transB2A(string) {
    //american to british spelling
    //british only
    let newString = string;
    let sp = `<span class="highlight">`;
    let an = `</span>`;
    for (let key in britishOnly) {
      let regexPattern = new RegExp(spacePeriod(key), "gi");
      let replacement = britishOnly[key];
      newString = newString.replace(regexPattern, "$1" + sp + replacement + an + "$2");
    }
    for (let key in americanToBritishSpelling) {
      let regexPattern = new RegExp(spacePeriod(americanToBritishSpelling[key]), "gi");
      let replacement = key;
      newString = newString.replace(regexPattern, "$1" + sp + replacement + an + "$2");
    }
    for (let key in americanToBritishTitles) {
      let regexPattern = new RegExp(spaceSpace(americanToBritishTitles[key]), "gi");
      let replacement = key;
      replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
      newString = newString.replace(regexPattern, "$1" + sp + replacement + an + "$2");
    }
    newString = newString.replace(/(\s)(\d+)\.(\d+)([\s\.])/g, "$1" + sp + "$2:$3" + an + "$4");
    return newString;
  }

  transA2B(string) {
    //american to british spelling
    //american only
    let newString = string;
    let sp = `<span class="highlight">`;
    let an = `</span>`;
    for (let key in americanOnly) {
      let regexPattern = new RegExp(spacePeriod(key), "gi");
      let replacement = americanOnly[key];
      newString = newString.replace(regexPattern, "$1" + sp + replacement + an + "$2");
    }
    for (let key in americanToBritishSpelling) {
      let regexPattern = new RegExp(spacePeriod(key), "gi");
      let replacement = americanToBritishSpelling[key];
      newString = newString.replace(regexPattern, "$1" + sp + replacement + an + "$2");
    }
    for (let key in americanToBritishTitles) {
      let regexPattern = new RegExp(spaceSpace(key), "gi");
      let replacement = americanToBritishTitles[key];
      replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
      newString = newString.replace(regexPattern, "$1" + sp + replacement + an + "$2");
    }
    newString = newString.replace(/(\s)(\d+)\:(\d+)([\s\.])/g, "$1" + sp + "$2.$3" + an + "$4");
    return newString;
  }
  
}

function spacePeriod(key) {
  return `(\\s*)${key}([\\s\\.])`
}

function spaceSpace(key) {
  return `(\\s*)${key}(\\s)`
}

module.exports = Translator;