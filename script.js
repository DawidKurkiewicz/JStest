
// const render = (what, where, myArray) =>{
// what = '<ol>'
// myArray.forEach((element, index, array) => {
// what += `<li> ${element} (${index})</li>`;
// });
// what += '</ol>'
// what +=  '<strong>' +  typeof typ +  '</strong>'
// where.innerHTML = what;
// };

// let typ = ''
// const body = document.body
const owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];
// // render(typ, body, owoce);


// const newArray = [];

// const html = owoce.filter((element, index, array) => {
//     if (element.length >= 6 && element.length < 10) {
//         newArray.push(element);
//     }
// });
// document.body.innerHTML = `${newArray}
// liczba elementów spełniających kryteria:
// ${newArray.length} czy jest tablicą? <strong>${Array.isArray(newArray)}</strong>
// `;



function render (where, myArray) {
    var myFilteredArray = myArray.filter(function(element, index, array){
        return element.length >=6 && element.length < 10;
    });
    where.innerHTML = myFilteredArray
}
render(document.body, owoce)

// const owoceNew = owoce.map( (element, index, array) => element + ' --obszar uprawy: tereny tropikalne ');
//  if (Array.isArray(owoceNew)){typ += '<br>To jest zmienna tablicowa';}
// document.body.innerHTML = owoceNew + typ;


// const noweOwoce = owoce.map((element, index, array) =>
// `<strong>` + element + `</strong>` + ' obszar uprawy Tereny tropikalne ' );
// document.body.innerHTML = noweOwoce
// document.write(noweOwoce instanceof Array);

// const owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];
// let typ = '<ol>';
// owoce.forEach((element, index, array) => {
//     typ += `<li>${element} (${index})</li>` 
// }
// );
// typ += '</ol>';
// typ +=  '<strong>' +  typeof typ +  '</strong>'
// document.body.innerHTML = typ

