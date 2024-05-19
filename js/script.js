const $ = document;
let liElems = $.querySelectorAll("li");
let h1Elem = $.querySelector(".title");
console.log(h1Elem);

document.addEventListener("keyup", function (event) {
  appendtoDom(event);
  let btnKey = event.key.toUpperCase();
  let liElem = $.getElementById(btnKey);
  console.log(event);
  liElem.classList.add("hit");
  liElem.addEventListener("animationend", function () {
    liElem.classList.remove("hit");
  });
});

function appendtoDom(event) {
  if (event.key === "Backspace") {
    console.log("yes");
    h1Elem.innerHTML = h1Elem.innerHTML.slice(0, -1);
    return h1Elem;
  }
  h1Elem.innerHTML += event.key;
}
