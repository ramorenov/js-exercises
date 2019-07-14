// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function capitalise(str) {
  var cap = str.split("");
  cletra = cap[0].toUpperCase();
  cap[0] = cletra;
  return cap.join("");
  // complete this function
}

// mentorsTidy= tidyUpString(mentors).captialise();

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidy = mentors.map(tidyUpString);
mentorsTidy = mentorsTidy.map(capitalise);

var mentorsTidyAndCapitalised = mentorsTidy;

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
