// const kontynenty = ['europa', 'azja', 'antarktyda', 'afryka', 'australia', 'amerykapol', 'amerykapld'];

// kontynenty.sort();
// kontynenty.reverse();

// console.log(kontynenty)




var liczby = [1, 12, 13, 0, 2, 20, 9, 3, 22, 10, -2, 11];
function sortNumber(a,b) {
    return a - b;
}
liczby.sort(sortNumber);
console.log(liczby)
liczby.reverse(sortNumber)
console.log(liczby)


function render (myArray) {
    console.log(myArray.sort(function (x, y) {
        return x - y }));
    console.log(myArray.reverse(function (x, y) {
        return x - y }));

};
var liczby = [1, 12, 13, 0, 2, 20, 9, 3, 22, 10, -2, 11];
render(liczby)