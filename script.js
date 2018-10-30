document.querySelector('main').style.display = 'none'
const render = () =>  {


let inputNumber;
let ceofficient;
let myArray = [];
let error = '';

document.querySelector('.button-array--add').addEventListener('click', () => {
    inputNumber = document.querySelector('.input-array').value;
    if (inputNumber !== '') {
        document.querySelector('.input-array').value = '';
        myArray.push(inputNumber);
        document.querySelector('.info-array__output').innerHTML = myArray;
    } else {
        error = 'Nie ma nic do dodania!';
        alert(error);
    }
});

document.querySelector('.button-array--remove').addEventListener ('click', () =>{
    if(myArray.length > 0) {
        myArray.pop();
        document.querySelector('.info-array__output').innerHTML = myArray;
    } else {
        error = 'tablica jest pusta';
        alert(error);
    }
});

document.querySelector('.button-coefficient--calculate').addEventListener('click', function() {
    coefficient = document.querySelector('.input-coefficient').value;

    if(myArray.length > 0 && coefficient !== ''){

    document.querySelector('.input-coefficient').value = '';

    myArray.forEach((element, index, array) => {
        array[index] = element * coefficient;
    });
    document.querySelector('.info-coefficient__output').innerHTML = myArray;
    document.querySelector('.input-array').setAttribute('disabled', 'disabled')
    document.querySelector('.button-array--add').setAttribute('disabled', 'disabled')
    document.querySelector('.button-array--remove').setAttribute('disabled', 'disabled')
    document.querySelector('.input-coefficient').setAttribute('disabled', 'disabled')
    this.setAttribute('disabled', 'disabled')

    } else if (myArray.length == 0) {
        error = 'tablica jest  pusta';
        alert(error);
    } else if (coefficient === '') {
        error = 'wspolczynnik jest  pusty';
        alert(error);
    }
});


document.querySelector('.button-coefficient--reset').addEventListener('click', () => {
    location.reload(true);
});
document.querySelector('main').style.display = 'block'
}
render();