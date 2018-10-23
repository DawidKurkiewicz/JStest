var x = 10;

/*if (x === 1) {
  console.log(1);
} else if (x === '1') {
  console.log(2);
} else if (x === 3) {
  console.log(x);
} else {
  console.log(0);
}*/


switch (x) {
    case 1:
        console.log(1);
        break;
    case'1':
        console.log(2);
        break;
    case 3:
        console.log(x);
        break;
    default:
        console.log(0);
        break;

}