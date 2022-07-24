// ONCLICK

let click = document.querySelector(".click");

click.addEventListener("click", () => {
  // Alert when button is clicked
  alert("You clicked me");
});

////////////////////////////////////////////////////////////////

// KEYDOWN

document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    var code = event.keyCode;
    console.log(name);
    //Alert the key name and key code on keydown
    //alert(`Key pressed ${name},  Key code value: ${code}`);
  },
  false
);

///////////////////////////////////////////////////////////////////////

// KEYUP

document.addEventListener("keyup", (event) => {
  console.log(event.key);
});

//////////////////////////////////////////////////////////////////

// ONCHANGE

let input = document.querySelector("input");
let log = document.getElementById("log");

input.onchange = handleChange;

function handleChange(e) {
  log.textContent = `The field's value is
      ${e.target.value.length} character long.`;
}

////////////////////////////////////////////////////////////////////

// ONLOAD

function load() {
  log.innerHTML = "The page has loaded";
}

/////////////////////////////////////////////////////////////////////

// ONFOCUS

let text = document.querySelector(".text");

input.onfocus = function () {
  text.innerHTML = "Insert valid data";
};

////////////////////////////////////////////////////////////////

// ONINPUT

let inputText = document.querySelector(".input-text");

input.oninput = function () {
  inputText.innerHTML = input.value;
};
