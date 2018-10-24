var myCar = new Object

myCar.mark = 'Peugeot';
myCar.date = 2006;
myCar.model = 307;
myCar.km = '144k';

console.log('my car model is ' + myCar.model)

var myDog = {

  race: 'shepherd',
  date: 2013,
  model: 'German',
  }
  console.log('my dog race is ' + myDog.model)




  console.log(Object.assign({}, myCar, myDog));