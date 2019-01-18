/* merge two integer arrays .output should contain double of the second array.
Var number1=[2,4,6,4
var number2[1,2,3,4]
*/

var number1= [2, 4, 6, 4];
var number= [1, 2, 3, 4];

var numbersMultipliedBy2 = number.map(multiplyBy2);
function multiplyBy2(number) {
return number * 2;
}

console.log(number1 + "," + numbersMultipliedBy2);


/* EXPECTED OUTPUT */

/*
[2,4,6,8,2,4,6,12]
*/
