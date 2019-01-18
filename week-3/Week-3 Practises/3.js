/* 
var names=[“meena”,”Zoe”,”Dilan”,”Rockie,”]
print  names of an array with an Exclamation mark(!)
*/

var names=["meena", "Zoe", "Dilan", "Rockie"];

function formatName(names) {
return names.split("")[0].toUpperCase() + names.slice(1) + "!";
}
names.map(formatName).forEach(function(names, index) {
console.log(names + ",");
});

/* EXPECTED OUTPUT */

/*
expected output[]Meena!,Zoe!,Dilan!,Rockie!
*/
