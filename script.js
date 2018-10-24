function loop (x) {
  console.log(x);
  if (x >= 17) {
    return;
  
}
loop(x+1);
}
console.log(loop(6))
