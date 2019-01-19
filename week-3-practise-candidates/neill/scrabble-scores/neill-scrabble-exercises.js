// These exercises are about the game Scrabble.
//
// Read the readme.md file, first!
//
// You will be provided with a function, scoreLetter(letter), which tells you the score of ONE letter.
// You will have to use the function to find the score for some words.

//Don't edit this function...
function scoreLetter(letter) {
    //Don't even LOOK inside this function, it is not important.
    //Array of points for the 26 letters a,b,c,...,z
    var scores = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]
    var ix = letter.toLowerCase().charCodeAt(0) - 97;
    return scores[ix];  
  }
  
  console.log("Exercise 1 (easy)");
  var lettersList = [ 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
  // Convert lettersList into a list of scores, using one of the array functions.
  //   You should use the scoreLetter() function.
  // Log this list of scores to console.
  // How many points is 'javascript' worth in total?
  
  
  console.log("Exercise 2 (moderate)");
  // Make a function which calculates the score of a complete word
  //   It should take a string (the word to analyse)
  //   It should return a number (the calculated score for the given word)
  //   It should have a name which describes well what it does
  //   It should use the existing scoreLetter() function
  // call it with the argument 'javascript' - does it return the 
  //   same answer as you calculated in exercise 1?
  
  
  var words = ['future', 'Mustaqbal', 'javascript']
  
  console.log("Exercise 3 (easy)");
  // For each word in the array 'words'
  //   use console log to display the word AND its score.
  
  
  var names = ['Abdullah', 'Ahmed', 'Ahmet', 'Alisina', 'Bart', 'Clement', 'Deepa', 'Elamin', 'Ermiyas', 'Ismail', 'Ivina', 'Joan', 'Kadir', 'Madiha', 'Matthew', 'Miles', 'Mohammad', 'Mohbeen', 'Mussie', 'Najla', 'Nina', 'Samantha', 'Sola', 'Tayo', 'Zareen']
  
  console.log("Exercise 4 (easy)");
  // Use an array function to remove names which have a score lower than 10
  // What names are you left with?
  
  console.log("Exercise 5 (easy but mind-blowing?)")
  // use the array map() function to convert the array of names 
  // into an array of 2-element arrays: 
  // [ [name, score], [name, score], [name, score], ... ]
  // e.g. 
  // [ [ 'Sola', 4 ], [ 'Nina', 4 ], [ 'Bart', 6 ],... ]
  //
  // Store the result in a variable, namesAndScores
  // Log the result to console.
  //
  // Which name has the highest score?
  
  console.log("Exercise 6 (moderate)")
  // Using the result from exercise 5, filter the list to 
  // only show names with scores 15 or higher!  Show their scores next to them.
  
  console.log("Exercise 7 (tricky)")
  // Sort the names array according to the score for each name.  Then log them to console.
  
