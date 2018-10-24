var myCar = {
  make: 'ford',
  model: 'mustang',
  sound: function() {
    console.log('wrrrrr!');
  },
  go: function() {
    console.log('go go go');
    return 'jestem w funckji go';
  }
}
myCar.sound();
myCar.go();
console.log(myCar.go());

