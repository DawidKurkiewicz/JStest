var i = 0;
var n = 0;
while (i < 10) {
  i++;
  if (i == 3) {
    continue;
  }
  if (i == 9) {
    break;
  }
  n += i;
  console.log(n);
}