/*
    Given the same "house" object again

    Follow the instructions below and then run the file 
    and make sure it outputs the correct results
*/

var house = {
  address: "1 Kinning Park",
  previousOwners: ["Claire M.", "John A."],
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway"
  }
};

var newCurrentOwner = {
  firstName: "Georgina",
  lastName: "Hernandez"
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
house.currentOwner = ({}, newCurrentOwner); //duda sobre la asignacion de valor.
// Object.assign(house.currentOwner, newCurrentOwner); // no entendi porque no funciona

// - from the list of previous owners, replace only "John A." with "Stephen B."
house.previousOwners[1] = "Stephen B.";
// - give the house a new property called 'isForSale' with the value 'false'
house.isForSale = false;
/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  "Did you correctly assign the new owner using the given variable?",
  "Expected result: true. Actual result: " +
    (house.currentOwner === newCurrentOwner)
);
console.log(
  "Expected result: Claire M., Stephen B. Actual result: " +
    house.previousOwners.toString()
);
console.log("Expected result: false. Actual result: " + house.isForSale);
