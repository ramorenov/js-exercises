var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

var porcest = Math.round((numberOfStudents * 100) / total) + "%";
var porment = Math.round((numberOfMentors * 100) / total) + "%";

console.log(porcest);
console.log(porment);
