//Problem 1
function sum(num1, num2) {
  var s = num1 + num2;
  console.log('"The sum of ' + num1 + ' and ' + num2 + ' is ' + s + '."');
  return s;
}

//Problem 2
function multiply(num1, num2) {
  var product = (num1 * num2);
  console.log('"The product of ' + num1 + ' and ' + num2 + ' is ' + product + '."');
  return product;
}
//Problem 3
function sumAndMultiply(num1, num2, num3) {
  var s = sum(sum(num1, num2), num3);
  var product = multiply(multiply(num1, num2), num3);
  console.log('"The sum of ' + num1 + ' and ' + num2 + ' is ' + s + '."');
  console.log('"The product of ' + num1 + ' and ' + num2 + ' is ' + product + '."');
}
//Problem 4
function sumArray(myArray) {
  var s = 0;
  for (var i = 0; i < myArray.length; i++ ) {
    s += myArray[i];
  }
  console.table(myArray);
  console.log(myArray + ' was passed in as an array of numbers, and ' + s + ' is the sum.');
}
