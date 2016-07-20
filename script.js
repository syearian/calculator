var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    ready(); // this is the function that gets called when everything is loaded
  }
}, 10);

var currentArr = [];
var currentString = currentArr.join('');
var lastInput = currentArr[currentArr.length -1];
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
    console.log(value);
    var lastInput = currentString[currentString.length - 1];
    if (lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '%') {
      currentArr.push(value);
      currentString = currentArr.join('');
      resultField.value = currentString;
    } else if (currentArr[0] === undefined) {
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
    console.log(value)
    var lastInput = currentString[currentString.length - 1];
    if (currentArr[0] === undefined) {
      return;
    } else if (lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '%') {
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

  function equals(value) {
    result = parseInt(currentArr[0]);
    for (var i = 1; i < currentArr.length; i += 2) {
      result = mathFuncs[currentArr[i]](result, parseInt(currentArr[i + 1]));
      resultField.value = result; 
      currentArr = [];
      currentString = currentArr.join('');
    }    
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
      getCorrectFunction(event.target.id, event.target.innerHTML);
    });
  }


}