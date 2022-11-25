let sum = " ";
let operator = document.getElementById("times");
let operator1 = document.getElementById("div");
let operator2 = document.getElementById("plus");
let operator3 = document.getElementById("minus");
let operator4 = document.getElementById("comma");

function addToSum(operator) {
  document.getElementById("top").innerHTML += operator;

  if (operator === "*") {
    document.getElementById("times").disabled = true;
  } else if (operator1 === ".") {
    document.getElementById("comma").disabled = true;
  } else if (operator2 === "/") {
    document.getElementById("div").disabled = true;
  } else if (operator3 === "+") {
    document.getElementById("plus").disabled = true;
  } else if (operator4 === "-") {
    document.getElementById("minus").disabled = true;
  } else {
    document.getElementById("comma").disabled = false;
    document.getElementById("times").disabled = false;
    document.getElementById("div").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
  }
}

function evaluateSum() {
  let s = document.getElementById("top").innerHTML;
  sum = eval(s);
  document.getElementById("bottom").innerHTML = sum;
}

function clearSum() {
  document.getElementById("top").innerHTML = " ";
  document.getElementById("bottom").innerHTML = " ";
}

function delNum() {
  let l = document.getElementById("top").innerHTML;
  let number = l.slice(0, -1);
  document.getElementById("top").innerHTML = number;
}
