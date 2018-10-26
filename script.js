

document.querySelector('button').addEventListener('click', function() {
var pole = document.getElementsByName('imie')[0];
var komunikat = document.getElementById('info');

if (pole.defaultValue === pole.value) {
    komunikat.innerHTML = 'Wartość domyślna oraz wartość bieżąca są takie same:' + pole.defaultValue + ' oraz ' + pole.value + '';
} else {
    komunikat.innerHTML = 'Domyślna wartość to: ' + pole.defaultValue + ', zaś wartość bieżąca to: ' + pole.value + '';
}
});
