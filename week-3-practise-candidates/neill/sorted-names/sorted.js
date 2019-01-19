var names = [ 'abz', 'ahmed', 'ahmet', 'ali', 'alisina', 'bart', 
            'behnaz', 'clement', 'deepa', 'elamin', 'ermiyas', 'ismail', 
            'ivina', 'joan', 'jonny', 'kadir', 'lucy', 'madiha', 'martyna', 
            'matthew', 'miles', 'mohammad', 'mohbeen', 'mussie', 'najla', 
            'neill', 'nina', 'samantha', 'sola', 'tayo', 'zareen', 'zeb', 
            'zeke' ];

// Find only the names whose letters are already in alphabetical order, 
// either ascending OR descending.
// So, "abz" and zeb" should be in the list, but not "zeke". 
// Are there any others?

// Here is a helper function for you.
function reverseString(s){
    return s.split("").reverse().join("");
}

//write your code here:
var sortedNames;

console.log(sortedNames);

// Expected output: 
['abz', 'SECRET NAME!', 'zeb'];