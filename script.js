// document.querySelector('h1').style.color ='red' ;
// document.querySelector('h1').style.fontSize ='80px' ;




const akapity = document.querySelectorAll('p');
let i;
for (i = 0; i  < akapity.length; i++) {
    akapity[i].style.backgroundColor = 'yellow';
    akapity[i].style.color = 'blue';
    akapity[i].style.fontSize = '40px';
}


const list = document.querySelectorAll('h1');
let index;
for (index = 0; index < list.length; ++index) {
    list[index].style.fontSize = "60px";
    list[index].style.color = 'red'
}
