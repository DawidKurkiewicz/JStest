var array = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]


var x = 7

for ( var i = 0; i < array.length; i++) {
  if (array[i] == x) {
    console.log(x)
}
}

if (array.indexOf(x) !== -1) {
  console.log(x);
}