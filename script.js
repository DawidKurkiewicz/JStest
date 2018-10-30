// const osoby = [
//     {
//         imie: 'Jan',
//         nazwisko: 'Kowalski',
//         wiek: 18,
//         imieNazwisko: function() { return this.imie + ' ' + this.nazwisko; }
//     },
//     {
//         imie: 'Maria',
//         nazwisko: 'Nowak',
//         wiek: 21,
//         imieNazwisko: function() { return this.imie + ' ' + this.nazwisko; }
//     }
// ];

// let tabela = '<table><tr><th>Imie i naziwsko</th><th>wiek</th></tr>';
// for(cecha in osoby) {
//     tabela += `<tr>`
//     tabela +=  `<td>${osoby[cecha].imieNazwisko()}</td>`
//     tabela += `<td>${osoby[cecha].wiek} lat</td>`
//     tabela += `</tr>`
// }
// tabela += '</table>';
// document.body.innerHTML = tabela




const osoby = [
    {
        imie: 'Jan',
        nazwisko: 'Kowalski',
        wiek: 18,
    },
    {
        imie: 'Maria',
        nazwisko: 'Nowak',
        wiek: 21,
    }
];

let tabela = '<table><tr><th>Imie i naziwsko</th><th>wiek</th></tr>';
for(cecha in osoby) {
    tabela += `<tr>`
    tabela +=  `<td>${osoby[cecha].imie} ${osoby[cecha].nazwisko}</td>`
    tabela += `<td>${osoby[cecha].wiek} lat</td>`
    tabela += `</tr>`
}
tabela += '</table>';
document.body.innerHTML = tabela