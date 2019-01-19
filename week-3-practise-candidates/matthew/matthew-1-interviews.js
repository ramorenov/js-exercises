/*
Mr Very Important Boss Man (Mr VIBM) has a very important job for you!
He needs you to schedule some job interviews.

He has given you his candidate contact details, and some appointment times.

- First, he wants you to remove any candidates which look like spam.
Use the .filter() function!

- Then (ideally) he wants you to sort the candidates so that candidate1 is first, candidate2 is second and so on.
Use the .sort() function!

- Finally, Mr VIBM wants you to use the .forEach() function to console log the candidate appointments, 
like this:

'To: candidate1@jobmail.com Dear Gaius your interview is at this time: 10:00'

Hint: the .forEach() method tracks the index of every array element in the second parameter by
default! 
*/

var candidates = [
  ["Adama",    "candidate2@jobmail.com"],
  ["Starbuck", "candidate3@jobmail.com"],
  ["Gaius",    "candidate1@jobmail.com"],
  ["Boomer",   "candidate4@jobmail.com"],
  ["Gaeta",    "candidate5@jobmail.com"],
  ["spam",     "spam@spam.com"]
];

var times = ["11:00", "11:30", "12:00", "15:00", "15:30", "16:00"];

function containsSpam(candidateInfo) {
  return; //TODO
}

var realCandidates; // TODO
var sortedCandidates; // TODO

sortedCandidates.forEach(function(candidate, index) {
  //TODO
});

/*
EXPECTED OUTPUT

To: candidate1@jobmail.com Dear Gaius your interview is at this time: 11:00
To: candidate2@jobmail.com Dear Adama your interview is at this time: 11:30
To: candidate3@jobmail.com Dear Starbuck your interview is at this time: 12:00
To: candidate4@jobmail.com Dear Boomer your interview is at this time: 15:00
To: candidate5@jobmail.com Dear Gaeta your interview is at this time: 15:30

*/
