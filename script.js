var x = 1;
var y = (x === 1 ? 1 : (x === '1' ? 2 : (x === 3 ? x : 0 )));
console.log(y);