const kontynenty = ['europa', 'azja', 'antarktyda', 'afryka', 'australia', 'amerykapol', 'amerykapld'];

kontynenty.sort();
kontynenty.reverse();

console.log(kontynenty)




const liczby = [1, 12, 13, 0, 2, 20, 9, 3, 22, 10, -2, 11];

function sortNumber(a,b) {
    return a - b;
}


liczby.sort(sortNumber);
console.log(liczby)


liczby.reverse(sortNumber)
console.log(liczby)



