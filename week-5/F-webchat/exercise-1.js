/*
Let's build a webchat to communicate with each other!

The requirements of a basic webchat are:
- The user can write a message in an input and send it after clicking on the submit button.
- After clicking on the submit button, the input should be empty.
- The user can read the existing messages in the message list.
- The message list is refreshed automatically every few seconds so 
the user can keep reading the incoming messages without refreshing the page.


========
Task 1
========

Your task is to build the webchat frontend. 
Some code is already written in index.html, that you can open in your browser.
For the purpose of this exercise, you are provided a server which you can interact 
with to get and save messages. Some messages already exist on the server. 

Your first task is to display those messages in the page, 
in the HTML element with the id "message-list". Use the following API to get the messages:

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/messages


===============
Expected result
===============

When you open index.html in your browser, it should display the existing messages on the page.

*/

// Write your code here
let messagebox = document.querySelector("#message-list");

function UpdateChat() {
  // a partir de este punto va la promesa que hace la peticion de los datos para actualizar el chat cada 2 segundos con la funcion setinterval llamada abajo.

  fetch("https://codeyourfuture.herokuapp.com/api/messages")
    .then(text =>
      //console.log(text.json()),
      text.json()
    )
    .then(data => {
      messagebox.innerHTML = "";
      data
        .filter(
          item =>
            item.content != "some text" &&
            item.content != undefined &&
            item.content != "" &&
            item.content != "new Date()" &&
            !item.content.includes("2019-05-11T01")
        )
        .forEach(
          item =>
            (messagebox.innerHTML += `<div>${item.datetime}---${
              item.content
            }</div>`)
        );
    });
}
UpdateChat();
setInterval(UpdateChat, 2000);
