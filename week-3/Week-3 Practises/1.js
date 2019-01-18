/* 
check  names of the given array which contain a paticular character ,then print it with  a message.
 var names=[“meena”,”Zoe”,”Dilan”,”Rockie,”]

2create a new array with the names which inculdes letter ”a” and With a message “yes I am”
*/

var names=["meena", "Zoe", "Dilan", "Rockie"];

names.forEach(printA);
function printA (name){
if (name.includes('a')) {
console.log(name+' yes i am');
}
}

/* EXPECTED OUTPUT */

/*
[meena yes I am ,Dilan yes I am]
*/
