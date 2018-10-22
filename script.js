const ola = 'ola ola ola';
let zygmunt = 'zygmunt ma ';

{
    const ela = 'ela jest ok';
    console.log(ela);

}
const liczbaPsow  = 10;
zygmunt = zygmunt + liczbaPsow + ' psow';
const zygSTR  = 'zygmunt ma ${liczbaPsow} psow';
console.log(zygmunt);




//console.log(sum(10,11));
const obj = {
ola: 'ola ma psa', 
"ala-123": ['nemo', 'gupiki', 'glonojady', 'bocja'],
"ala-321": ['gupiki', 'glonojady', 'bocja'],
ala: ['gupiki', 'glonojady', 'bocja'],
zygmunt: { 
    rodzaj: 'koty',
    kolekcja: [ 'perski', 'dachowiec', 'bez butow', 'brytyjski']

}

};

obj.ola;
const id = 123;
obj['ala-' + id]

for (let i = 0; i < obj["ala-123"].length; i++){
    console.log(obj.ala[i])
}
for(let i = 0; i < obj['ala-123'].length; i++) {
    console.log(obj['ala-123'] [i]);
}






















/*function sum (a, b) {
    const c = 10;
    console.log('c =',c)
    zygmunt = 'zygmunt ma kota';
    return a + b + c 
}

let myArray = [1, 2, 3, 4]
let arrayLength = myArray.length

for (let i = 0; i < arrayLength; i++) {
    


    console.log('mam index ', i);
}


console.log(zygmunt)
console.log (ola);

*/
