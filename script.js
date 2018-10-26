// document.querySelector('h1').style.color ='red' ;
// document.querySelector('h1').style.fontSize ='80px' ;



const list = document.querySelectorAll('h1');
let index;
for (index = 0; index < list.length; ++index) {
    list[index].style.fontSize = "60px";
    list[index].style.color = 'red'
    list[index].addEventListener('click', color1);



}
const akapity = document.querySelectorAll('p');
let i;
for (i = 0; i  < akapity.length; i++) {
    akapity[i].style.backgroundColor = 'yellow';
    akapity[i].style.color = 'blue';
    akapity[i].style.fontSize = '40px';
    akapity[i].addEventListener('click', color);
   


}
function color() {
  this.style.backgroundColor = 'green'
  this.style.fontSize = '80px'
  this.style.color = 'black'

}
function color1() {
  this.style.backgroundColor = 'purple'
  this.style.fontSize = '80px'
  this.style.color = 'pink'
  this.style.textAlign = 'center'

}
// function pozycjaKursora(e) {
//   alert ('Pozycja kursora na ekranie: ' + e.screenX + ', ' + e.screenY + ", czas " + e.timeStamp + ', zdarzenie ' + event.type);
// }
// window.addEventListener('dblclick', pozycjaKursora);


