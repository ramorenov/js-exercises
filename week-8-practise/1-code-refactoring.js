/* EXERCISE 1 - Code Refactoring
 * This script functions as a library.
 * Its purpose is to provide a set of functions that users can use to manipulate and decorate text.
 *
 * Using the coding practices you have learnt (you can use the syllabus as reference),
 * edit the code so that it establishes good coding standards.
 *
 * There may be both syntax and logical errors present.
 */

// Function that reverses and capitlises text

// Function that returns text with every other letter capitlised
//module.exports = ;
/*for (i==0; i<text.length;i++) {  var capitalised = text.toUpper()
      if (i/2==0) {
       text[i] = text[i].toUpperCase() 
    }

}
return text&*/

module.exports = {
  everyOtherLetterCapitilised: function(text) {
    return text
      .split("")
      .map((element, i) => {
        if (i % 2 == 0) {
          return element.toUpperCase();
        } else {
          return element;
        }
      })
      .join("");
  },
  reverseAndCaptilise: function reverseAndCaptilise(text) {
    return text
      .toUpper()
      .split("")
      .reverse()
      .join("");
  },
  lowerCase: function lowerCase(text) {
    return text.toLowerCase();
  }
};
