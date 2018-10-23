var numbers = [] ;
for ( var i = 0; i < 10; i++){
    numbers[i] =(Math.random() * 10);
}
for(var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5){
        break
    }
console.log(numbers [i]);
}