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
        equationValues.push(parseInt(stringNumber));
        operator = num;
        answer.textContent += num;
        stringNumber = "";
        break;
      case "X":
        equationValues.push(parseInt(stringNumber));
        operator = num;
        answer.textContent += num;
        stringNumber = "";
        break;
      case "-":
        equationValues.push(parseInt(stringNumber));
        operator = num;
        answer.textContent += num;
        stringNumber = "";
        break;
      case "÷":
        equationValues.push(parseInt(stringNumber));
        operator = num;
        answer.textContent += num;
        stringNumber = "";
        break;
      case "√":
        equationValues.push(parseInt(stringNumber));
        operator = num;
        answer.textContent += num;
        stringNumber = "";
      case "=":
        equationValues.push(parseInt(stringNumber));
        stringNumber = "";
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
        } else if (operator == '√') {
          let answerValue = "";

          if (!isNaN(equationValues[equationValues.length - 1])) { //if it is not; not a number, take the input (equationValues[]) and square root it
            answerValue = Math.sqrt(equationValues[equationValues.length - 1]);
            console.log('Number Case');
            answer.textContent = answer.textContent +  " = " + Math.round(100 * answerValue) / 100;
          }
          console.log(answerValue);
          console.log(equationValues.length - 1);
        }
        equationValues.push(parseInt(num));
        // console.log(equationValues.length);
        break;

      case "0":
        stringNumber += num;
        answer.textContent += num;
        break;
      case "1":
        answer.textContent += num;
        stringNumber += num;
        break;
      case "2":
        stringNumber += num;
        answer.textContent += num;
        break;
      case "3":
        stringNumber += num;
        answer.textContent += num;
        break;
      case "4":
        stringNumber += num;
        answer.textContent += num;
        break;
      case "5":
        stringNumber += num;
        answer.textContent += num;
        break;
      case "6":
        stringNumber += num;
        answer.textContent += num;
        break;
      case "7":
        stringNumber += num;
        answer.textContent += num;
        break;
      case "8":
        stringNumber += num;
        answer.textContent += num;
        break;
      case "9":
        stringNumber += num;
        answer.textContent += num;
        break;
    }
  });
});

document.querySelector(".clear").addEventListener('click', function() {
  document.querySelector(".answer").textContent = "";
  equationValues = [];
  stringNumber = "";
});