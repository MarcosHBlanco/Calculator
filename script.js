function displayCalc(button) {
  document.getElementById("display").innerText += button.innerText;
}
const number1 = document.getElementById("one");
const number2 = document.getElementById("two");
const number3 = document.getElementById("three");
const number4 = document.getElementById("four");
const number5 = document.getElementById("five");
const number6 = document.getElementById("six");
const number7 = document.getElementById("seven");
const number8 = document.getElementById("eight");
const number9 = document.getElementById("nine");
const number0 = document.getElementById("zero");
const dot = document.getElementById("dot");

number1.addEventListener("click", function() {
  displayCalc(number1)
});
number2.addEventListener("click", function() {
  displayCalc(number2)
});
number3.addEventListener("click", function() {
  displayCalc(number3)
});
number4.addEventListener("click", function() {
  displayCalc(number4)
});
number5.addEventListener("click", function() {
  displayCalc(number5)
});
number6.addEventListener("click", function() {
  displayCalc(number6)
});
number7.addEventListener("click", function() {
  displayCalc(number7)
});
number8.addEventListener("click", function() {
  displayCalc(number8)
});
number9.addEventListener("click", function() {
  displayCalc(number9)
});
number0.addEventListener("click", function() {
  displayCalc(number0)
});
dot.addEventListener("click", function() {
  displayCalc(dot)
});

const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const addiction = document.getElementById("addiction");
const subtraction = document.getElementById("subtraction");

multiply.addEventListener("click", function() {
  displayCalc(multiply)
});
division.addEventListener("click", function() {
  displayCalc(division)
});
addiction.addEventListener("click", function() {
  displayCalc(addiction)
});
subtraction.addEventListener("click", function() {
  displayCalc(subtraction)
});

const result = document.getElementById("result");

result.addEventListener("click", evaluate);

function evaluate() {
  document.getElementById("display").innerText = eval(document.getElementById("display").innerText);
}

const reset = document.getElementById("clean");

function clean() {
  document.getElementById("display").innerText = "";
}

reset.addEventListener("click", clean);

const back = document.getElementById("back");

function erase() {
  let display = document.getElementById("display").innerText; document.getElementById("display").innerText = display.substring(0, display.length - 1);
}

back.addEventListener("click", erase);

