function greet(mentor1, mentor2, mentor3, mentor4, mentor5){
    var mentor1 = "Daniel";
    var mentor2 = "Irina";
    var mentor3 = "Mimi";
    var mentor4 = "Rob";
    var mentor5 = "Yohannes";
return "hello " + mentor1 + "\nhello " + mentor2 + "\nhello " + mentor3 + "\nhello " + mentor4 + "\nhello " + mentor5;
}

var shoutyGreet1 = greet().toUpperCase();

console.log(shoutyGreet1);