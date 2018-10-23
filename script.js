var array = [false, 0, true, 'ala', null];
console.log(array[2]);

var newArray = array;

//---------

var obj = {
    ala: false,
    length: 123,
    elements: ['ola', false, null, 'mariusz'],
    'index-1': 'pozycja-1',
    'index-2': 'pozycja-2',
    'index-3': 'pozycja-3',
};

console.log(obj.ala);
console.log(obj.length);
console.log(obj.elements[3]);

for (let i = 0; i < 3; i++){
    console.log(obj['index-' +(i + 1)]);
}