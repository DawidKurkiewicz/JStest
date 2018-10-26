const akapity = document.querySelectorAll('p');
let i;
for (i = 0; i  < akapity.length; i++) {
    akapity[i].style.backgroundColor = 'yellow';
    akapity[i].style.color = 'blue';
    akapity[i].style.fontSize = '40px';
    akapity[i].style.margin = '100px';

  }


const list = document.querySelectorAll('h1:first-child');
let index;
for (index = 0; index < list.length; index++) {
    list[index].style.fontSize = "60px";
    list[index].style.color = 'red';

}


const lista = document.querySelectorAll('h1:nth-child(2)');
let index1;
for (index1 = 0; index1 < lista.length; index1++) {
    lista[index1].style.fontSize = "60px";
    lista[index1].style.color = 'purple';
}
