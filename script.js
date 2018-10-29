
// const render = (what, where, myArray) = >{
    
// }




const owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];
let napis = '<ol>';
owoce.forEach((element, index, array) => {
    napis += `<li>${element} (${index})</li>` 
}
);
napis += '</ol>';
napis +=  '<strong>' +  typeof napis +  '</strong>'
document.body.innerHTML = napis






// let owoce, tekst, owoceDlug, i;
// owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];
// owoceDlug = owoce.length;
// tekst = '<ul>';
// for (i = 0; i <owoceDlug; i++) {
//     tekst += '<li>' + owoce[i] + '</li>';
// }
// tekst += '</ul>';


// document.body.innerHTML = tekst;