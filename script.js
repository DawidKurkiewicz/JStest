
const render = (what, where, myArray) =>{
what = '<ol>'
myArray.forEach((element, index, array) => {
what += `<li>${element} (${index})</li>`;
});
what += '</ol>'
what +=  '<strong>' +  typeof napis +  '</strong>'
where.innerHTML = what;

};



let napis = ''
const body = document.body
const owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];
render(napis, body, owoce);

// const owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];
// let napis = '<ol>';
// owoce.forEach((element, index, array) => {
//     napis += `<li>${element} (${index})</li>` 
// }
// );
// napis += '</ol>';
// napis +=  '<strong>' +  typeof napis +  '</strong>'
// document.body.innerHTML = napis

