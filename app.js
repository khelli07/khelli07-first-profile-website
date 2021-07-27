"use strict";

//Title fade in
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let count = 0;
let timer = setInterval(onTick, 50);

function complete(timer) {
  clearInterval(timer);
  timer = "null";
}

function onTick() {
  const span = text.querySelectorAll("span")[count];
  span.classList.add("fade");
  count++;

  if (count === splitText.length) {
    complete(timer);
    return;
  }
}

//Other element fade in
function fadeIn(element, addedClass) {
  let timer = setInterval(elementIn, 50);
  function elementIn() {
    const el = document.querySelector(element);
    el.classList.add(addedClass);

    complete(timer);
    return;
  }
}

//Main fade in
fadeIn(".welcome-text", "welcome-in");
fadeIn(".explore", "box-in");
fadeIn("header", "head-in");