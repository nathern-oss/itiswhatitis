var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("What is your bill?"));

var sum = (num1+(num1*.07))+(0.05*(num1));

document.body.querySelector(".message").innerHTML="Your final bill is "+sum;