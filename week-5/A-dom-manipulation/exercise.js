/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
changeColorButton = document.getElementById("bgrChangeBtn");
bodyground = document.querySelector("body");

changeColorButton.addEventListener("click", function() {
  bodyground.style.background = "CadetBlue";
});

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
alertButton = document.getElementById("alertBtn");

alertButton.addEventListener("click", function() {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
addButton = document.getElementById("addTextBtn");
jumbotrone = document.querySelector(".jumbotron");

addButton.addEventListener("click", function() {
  console.log("add some text btn");
  jumbotrone.innerHTML += "<p>Read more below.</p>";
});

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

largerLinksBtn = document.getElementById("largerLinksBtn");
bigLinks = document.querySelectorAll("a[href = '#'],[href = '/']");
largerLinksBtn.addEventListener("click", function() {
  bigLinks.forEach(element => {
    element.style.fontSize = "1.5em";
  });
});
