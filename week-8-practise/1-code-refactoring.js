*
 * There may be both syntax and logical errors present.
 */

var reversed;
let capitilised;

// Function that reverses and capitlises text
exports function reverseAndCaptilise(text) 
  var capitlised = text.toUpper()
  reversed = capitilised.split('').reverse().join('') 

  return reversed
  }
  
function reverseAndCapitilize(text) {
  return text.toUpperCase().split('').reverse().join('');
}

// Function that returns text with every other letter capitlised
export function everyOtherLetterCapitilised(text) {
  for (i==0; i++; i<text.length) {
      if (i/2==0) {
       text[i] = text[i].toUpperCase() 
    }    
  } 
function everyOtherLetterCapitilised(text) {
  //converting text to array and making each letter an element of array
  text = text.split('');
  // looping through each letter of the array
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      //converting letter to uppercase if the index number is even
      text[i] = text[i].toUpperCase();
    }
  }
  return text.join("");//converting array back to string
}

export  function lowerCase(text) {
  let text = text.toLowerCase()

  return text
function lowerCase(text) {
  return text.toLowerCase()
}

export { reverseAndCapitilize, everyOtherLetterCapitilised, lowerCase };