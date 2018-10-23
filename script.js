var x = 'ala';

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
    case 'ala':
        console.log('hello ala')
        break;
    case null:
        console.log('mamy null');
        break;
    default:
        console.log('oh no!');
        break;

}