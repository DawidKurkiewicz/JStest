function sumN () {
  console.log(arguments);
  var sum =0;
  for ( var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum;
}

function sum (a, b, c) {
  return a + c;
}




console.log (sumN (1, 2, 3, 5));
console.log(sum(1, 2, 3, 4, 5, 6));