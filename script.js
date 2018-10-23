/*ar array = ['one', 'two', 'three', 'four', 'five', 'six']
var b = array.slice(2, 5);
console.log(array);
console.log(b);
var c = array.slice(0, 2) .concat (array.slice (3, 6));
console.log(c)
var d = array.slice(-4, 5);
console.log(d);*/

var numbers = [];
var numbersSize = 14;
for (var i = 0; i < numbersSize; i++) {
  numbers[i] = parseInt(Math.random() * 10 + 1);
}

console.log('tablica poczatkowa = ', numbers);

var startIndex = (numbersSize / 2) - 2;
console.log('startIndex = ', startIndex);
var numberOfItems = 4;
var newArray = numbers.slice(startIndex, startIndex + numberOfItems);
console.log('srodkowe 4 elementy = ', newArray);