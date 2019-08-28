blueButt = document.getElementById("blueBtn");
orangeButt = document.getElementById("orangeBtn");
greenButt = document.getElementById("greenBtn");
formMail = document.getElementById("exampleInputEmail1");
formName = document.getElementById("example-text-input");
formDesc = document.getElementById("exampleTextarea");

jumbotron = document.querySelector(".jumbotron");
volunterButt = document.querySelector("a[class = 'btn btn-secondary btn-lrg']");
bikeButt = document.querySelector("a[class = 'btn btn-primary btn-lrg']");
submitButt = document.querySelector("button[class = 'btn btn-primary']");

blueButt.addEventListener("click", function() {
  jumbotron.style.background = `#588fbd`;
  volunterButt.style.background = `black`;
  volunterButt.style.color = `white`;
});

orangeButt.addEventListener("click", function() {
  jumbotron.style.background = `#f0ad4e`;
  bikeButt.style.background = `#5751fd`;
  volunterButt.style.background = `#31b0d5`;
});

greenButt.addEventListener("click", function() {
  jumbotron.style.background = `#87ca8a`;
  bikeButt.style.background = `black`;
  volunterButt.style.background = `#8c9c08`;
});

submitButt.addEventListener("click", function() {
  if (formName.value.length == 0) {
    formName.style.background = "red";
  }
  if (formDesc.value.length == 0) {
    formDesc.style.background = "red";
  }
  if (!formMail.value.includes("@") || formMail.value.length == 0) {
    formMail.style.background = "red";
  } else if (formName.value.length > 0 && formDesc.value.length > 0) {
    alert("thank you for filling out the form");
    formName.value = "";
    formDesc.value = "";
    formMail.value = "";
  }

  event.preventDefault();
});
