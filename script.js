var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    ready(); // this is the function that gets called when everything is loaded
  }
}, 10);

function ready() {


  var currentArr = [];
  var currentString = currentArr.join();
  var lastInput = currentArr[currentArr.length -1];
  var newInput;
  var decimal = false;
  var result;
  var resultField = document.getElementById(calcResult);

  function deleteAll() {
    currentArr = [];
    currentString = currentArr.join();
    resultField.value = currentString;
  }

  function deleteLast() {
    currentArr.pop();
    currentString = currentArr.join();
    resultField.value = currentString;
  }

  function insertNumber() {
    if (/\%\*\+\-\//.test(currentString[currentString.length - 1])) {
      currentArr.push(newInput);
      currentString = currentArr.join();
      resultField.value = currentString;
    } else {
      currentArr[currentArr.length -1] = currentArr[currentArr.length -1] + newInput;
      currentString = currentArr.join();
      resultField.value = currentString;
    }
  }

  function insertDecimal() {

  }

  function modulus() {
    currentArr.push('%');
    currentString = currentArr.join();
    resultField.value = currentString;
  }

  function add() {
    currentArr.push('+');
    currentString = currentArr.join();
    resultField.value = currentString;
  }

  function subtract() {
    currentArr.push('-');
    currentString = currentArr.join();
    resultField.value = currentString;
  }

  function multiply() {
    currentArr.push('*');
    currentString = currentArr.join();
    resultField.value = currentString;
  }

  function divide() {
    currentArr.push('/');
    currentString = currentArr.join();
    resultField.value = currentString;
  }

  function equals() {

  }

  var buttons = document.querySelectorAll('.button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      console.log("clicked");
    });
  }


}