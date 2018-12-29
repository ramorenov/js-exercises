var numberOfStudents = 15;
var numberOfMentors = 8;

var totalPeople = numberOfMentors + numberOfStudents;

console.log(totalPeople);

var studentPercentage = (numberOfStudents / totalPeople)* 100;
var mentorsPercentage = (numberOfMentors / totalPeople) * 100;

var studentPercentage = Math.round(studentPercentage);
var mentorsPercentage = Math.round(mentorsPercentage);

console.log(studentPercentage);
console.log(mentorsPercentage);

