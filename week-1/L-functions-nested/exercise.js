var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(mentor) {
  return (uppercase = mentor.toUpperCase());
}

function Greeting(mentor) {
  var name = upperCase(mentor);
  var greeting = "HELLO " + name;
  return greeting;
}

console.log(Greeting(mentor1));
console.log(Greeting(mentor2));
console.log(Greeting(mentor3));
console.log(Greeting(mentor4));
console.log(Greeting(mentor5));
