/*
You are working in a car dealer. You have "allCars" cars on sale.
The array contains nested arrays showing each car by the make and 
whether or not it has a manual transmission.
(if it is true it is manual). 

One customer is calling you to buy a manual car.

- Make a list only of your manual cars on sale by completing the statement on line 21.
*/

var allCars = [
  ["Honda", true],
  ["Nissan", false],
  ["BMW", true],
  ["Ford", true],
  ["Hyundai", true],
  ["Toyota", false]
];

var carsManual; //Complete this statement

//DO NOT EDIT BELOW THIS LINE
var carsManualList = carsManual.forEach(function(carManual) {
  console.log(carManual[0]);
});
/* EXPECTED OUTPUT */
"Honda", "BMW", "Ford", "Hyundai";
