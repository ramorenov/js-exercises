EXPECTED RESULT: The #exercise1 element has textContent = "YOUR NAME" when
the button is clicked
*/
document.querySelector('#button1').addEventListener('click', exercise1)
document.querySelector("#button1").addEventListener("click", exercise1);

function exercise1() {
// Write your implementation here
document.getElementById("exercise1").textContent = "zareen";
}

/*
@@ -34,10 +34,14 @@ function exercise1() {
EXPECTED RESULT: The #exercise2 element has textContent = "Hello from the
function caller"
*/
functionThatCallsBack(exercise2)
functionThatCallsBack(exercise2);

function exercise2(result) {
// Write your implementation here
document.getElementById("exercise2").textContent = result;
}

function functionThatCallsBack(callback) {
callback("Hello from the function caller");
}

/*
@@ -57,23 +61,21 @@ function exercise2(result) {
*/

function exercise3(callback) {
// Write your implementation here

// Write your explanation here
return callback("Hello from the callback");
}

// 
//The function receives the result of callback function as a parameter in exercise3
//
// -------------------------------------
// 
//
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
function functionThatCallsBack(callback) {
callback('Hello from the function caller')
callback("Hello from the function caller");
}

exercise3((text) => {
document.querySelector('#exercise3').innerText = text
})
exercise3(text => {
document.querySelector("#exercise3").innerText = text;
});