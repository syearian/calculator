var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    ready(); // this is the function that gets called when everything is loaded
  }
}, 10);

var currentArr = [];
var currentString = currentArr.join('');
var lastInput = currentArr[currentArr.length -1];
var newInput;
var decimal = false;
var result;
var resultField = document.getElementById('calcResult');
var mathFuncs = {
  '+': function(x, y) {return x + y},
  '-': function(x, y) {return x - y},
  '*': function(x, y) {return x * y},
  '/': function(x, y) {return x / y},
  '%': function(x, y) {return x % y},
}

function ready() {

  function deleteAll() {
    currentArr = [];
    currentString = currentArr.join('');
    resultField.value = currentString;
  }

  function deleteLast() {
    currentArr.pop();
    currentString = currentArr.join('');
    resultField.value = currentString;
  }

  function insertNumber(value) {
    console.log(currentArr);
    if (/[%\*+-\/]/.test(currentString[currentString.length - 1])) {
      currentArr.push(value);
      currentString = currentArr.join('');
      resultField.value = currentString;
    } else if (currentArr[0] === undefined) {
      console.log(currentArr);
      currentArr[0] = value;
      currentString = currentArr.join('');
      resultField.value = currentString;
    } else {
      currentArr[currentArr.length -1] = currentArr[currentArr.length -1] + value;
      currentString = currentArr.join('');
      resultField.value = currentString;
    }
    console.log(currentArr);
  }

  function addOperator(value) {
    if (currentArr[0] === undefined) {
      return;
    } else if (/[%\*+-\/]/.test(currentString[currentString.length - 1])) {
      currentArr[currentArr.length -1] = value;
      currentString = currentArr.join('');
      resultField.value = currentString;
      console.log(currentArr);
    } else {
      currentArr.push(value);
      currentString = currentArr.join('');
      resultField.value = currentString;
      console.log(currentArr);
    }
  }

  function modulus(value) {
    currentArr.push('%');
    currentString = currentArr.join('');
    resultField.value = currentString;
    console.log(currentArr);
  }

  function add(value) {
    currentArr.push('+');
    currentString = currentArr.join('');
    resultField.value = currentString;
    console.log(currentArr);
  }

  function subtract(value) {
    currentArr.push('-');
    currentString = currentArr.join('');
    resultField.value = currentString;
    console.log(currentArr);
  }

  function multiply(value) {
    currentArr.push('*');
    currentString = currentArr.join('');
    resultField.value = currentString;
    console.log(currentArr);
  }

  function divide(value) {
    currentArr.push('/');
    currentString = currentArr.join('');
    resultField.value = currentString;
    console.log(currentArr);
  }

  function equals() {

  }

  function getCorrectFunction(id, value) {
    switch (id) {
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
      case "zero":
      case "decPoint":
        insertNumber(value);
        break;
      case "plus":
      case "minus":
      case "multiply":
      case "divide":
      case "modulus":
        addOperator(value);
        break;
      case "AC":
        deleteAll();
        break;
      case "CE":
        deleteLast();
        break;
      case "equals":
        equals();
        break;
    }
  }

  var buttons = document.querySelectorAll('.button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      console.log("clicked");
      console.log(event.target.innerHTML);
      getCorrectFunction(event.target.id, event.target.innerHTML);
    });
  }


}