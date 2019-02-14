Promise"
*/
function exercise1() {
  var promise1 = resolvedPromise()
  var promise1 = resolvedPromise().then(function(resolve) {
    document.getElementById("exercise1").textContent = resolve;
  });
}

/*
@@ -27,7 +29,9 @@ function exercise1() {
  Promise"
*/
function exercise2() {
  var promise2 = rejectedPromise()
  var promise2 = rejectedPromise().catch(function(reject) {
    document.getElementById("exercise2").textContent = reject;
  });
}

/*
@@ -40,7 +44,9 @@ function exercise2() {
  EXPECTED RESULT: The #exercise3 element has textContent = "A Longer Promise"
*/
function exercise3() {
  var promise3 = delayedPromise()
  var promise3 = delayedPromise().then(function(delay) {
    document.getElementById("exercise3").textContent = delay;
  });
}

/*
@@ -55,7 +61,9 @@ function exercise3() {
  YOUR NAME"
*/
function exercise4() {
  var promise4 = concatPromise()
  var promise4 = concatPromise().then(function(concat) {
    document.getElementById("exercise4").textContent = concat + "zareen";
  });
}

/*
@@ -70,9 +78,16 @@ function exercise4() {
  EXPECTED RESULT: The #exercise5 element has textContent = "Hello Promises!"
*/

function exercise5() {
  // Write your implementation here
  var Promise = newPromiseResolves();
  Promise.then(result => {
    document.getElementById("exercise5").textContent = result;
  });
}

function newPromiseResolves() {
  return Promise.resolve("Hello Promises!");
}

/*
@@ -89,41 +104,47 @@ function exercise5() {
  wrong!"
*/
function exercise6() {
  // Write your implementation here
  var Promise = newPromiseRejected();
  Promise.catch(result => {
    document.getElementById("exercise6").textContent = result;
  });
}

function newPromiseRejected() {
  return Promise.reject("Something went wrong!");
}

// 
//
// -------------------------------------
// 
//
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
function resolvedPromise() {
  return Promise.resolve('A Promising Promise')
  return Promise.resolve("A Promising Promise");
}

function rejectedPromise() {
  return Promise.reject('A Unpromising Promise')
  return Promise.reject("A Unpromising Promise");
}

function delayedPromise() {
  return new Promise((resolve) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('A Longer Promise')
    }, 2000)
  })
      resolve("A Longer Promise");
    }, 2000);
  });
}

function concatPromise() {
  return Promise.resolve('A Promise from: ')
  return Promise.resolve("A Promise from: ");
}

exercise1()
exercise2()
exercise3()
exercise4()
exercise5()
exercise6()
exercise1();
exercise2();
exercise3();
exercise4();
exercise5();
exercise6();