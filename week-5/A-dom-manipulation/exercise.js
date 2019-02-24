/*
Task 1
=======alertBtn"

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var bgrChangeBtn = document.getElementById("bgrChangeBtn");


bgrChangeBtn.addEventListener('click', changesMe)

function changesMe() {
    bgrChangeBtn.style.backgroundColor = "red";
}

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the
 text "Thanks for visiting Bikes for Refugees!"
*/


var alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", alert);

function alert() {
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, 
a new paragraph should be added below the buttons 
that says "Read more below."
*/
var addTextBtn = document.querySelector("addTextBtn");
addTextBtn.addEventListener('click', addSomeText);

function addSomeText() {
 console.log("Read more below."); // this is not right make sure to check this again 

}


/*
Task 4
======

When the 'Larger links!' button is clicked, the text of 
all links on the page should increase.
*/
var largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", largerLinks);

function largeLinks() {
        largeButtonText.style.fontSize = "24 px"

} 