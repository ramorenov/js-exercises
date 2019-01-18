//Exercise3:
//HALL OF FAME
//At the end of their careers, basketball players if they were great had their names written in the "Hall of fame"
//the highest possible distinction for a pro basketball player.
//Here are three arrays; the first one has the name of some of the best actual players,
//the second one a list of MVPs, and the other is the hall of fame list.
//INSTRUCTION:
//- A player can only enter the "Hall of Fame" if he was an MVP (Most Valuable Player)
//- When added to the "Hall of fame" list, his name should be remove from the actualPlayers list
//Write a program that takes a name in the actualPlayers list, and add it to the Hall of Fame list if that player was an MVP.
//Display the new Hall of fame list(with the new names) on the screen as well as the actualPlayers list minus the names added 
//to the Hall of fame list.
var actualPlayers = ["James", "Curry", "Embiid", "Simmons", "Doncic"];
var mvpPlayers = ["Harden", "Westbrook", "Durant", "James", "Nowitsky", "Curry"];
var HallOfFame = ["Jordan", "Miller", "Thomas", "Iverson"]
var newHallOfFame ;   //Complete this statement
console.log(newHallOfFame);
console.log(newMvpPlayers);
console.log(newActualPlayers)
//Expected result:
//["Jordan", "Miller", "Thomas", "Iverson", "James", "Curry"];
//["Harden", "Westbrook", "Durant", "James", "Nowitsky", "Curry"];
//["Embiid", "Simmons", "Doncic"];