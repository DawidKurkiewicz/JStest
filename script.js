function sum (a, b) {
  return a + b;
}


var go = function(a, b) {
  return a + b;

}
var superSum = sum;
var superSum2 = sum(5, 6);

console.log(sum (1, 2));
console.log(go(3, 4));
console.log(superSum(3, 3));
console.log(superSum2)