"use strict";

const buttons = document.querySelectorAll(".btn");

let equationValues = [];
let operator;
let stringNumber = "";

buttons.forEach(function (button) {
  button.addEventListener("click", (event) => {
    let num = event.target.textContent;
    let answer = document.querySelector(".answer");

    switch (num) {
      case "+":
        operator = num;
        answer.textContent += num;
        break;
      case "X":
        operator = num;
        answer.textContent += num;
        break;
      case "-":
        operator = num;
        answer.textContent += num;
        break;
      case "÷":
        operator = num;
        answer.textContent += num;
        break;
      case "0":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "1":
        answer.textContent += num;
        equationValues.push(parseInt(num));
        break;
      case "2":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "3":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "4":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "5":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "6":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "7":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "8":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "9":
        equationValues.push(parseInt(num));
        answer.textContent += num;
        break;
      case "=":
        if (operator == '+') {
          let answerValue = equationValues.reduce((function(a, b) {return a + b;}))
          answer.textContent += ' ' +  "=" + ' ' + answerValue;
        } else if (operator == '-') {
          let answerValue = equationValues.reduce((function(a, b) {return a - b;}))
          answer.textContent += ' ' +  "=" + ' ' + answerValue;
        } else if (operator == 'X') {
          let answerValue = equationValues.reduce((function(a, b) {return a * b;}))
          answer.textContent += ' ' +  "=" + ' ' + answerValue;
        } else if (operator == '÷') {
          let answerValue = equationValues.reduce((function(a, b) {return a / b;}))
          answer.textContent += ' ' +  "=" + ' ' + answerValue;
        }
        console.log(`${answer.value}, ${num}, ${equationValues}, ${operator}`);
        break;
      // case "C":
      //   equationValues = [];
      //   answer.textContent = "";
      //   break;
    }
  });
});

document.querySelector(".clear").addEventListener('click', function() {
  document.querySelector(".answer").textContent = "";
  equationValues = [];
});

//Add all of the values in the newly created array
