
document.querySelector('button').addEventListener('click', function() {
function render(what, where) {
    where.innerHTML = what;
}
var pole = document.getElementsByName('imie')[0];
var komunikat = document.getElementById('info');

    render( (pole.defaultValue === pole.value) ? (komunikat.innerHTML = 'Wartość domyślna oraz wartość bieżąca są takie same: ' + pole.defaultValue + ' oraz ' + pole.value + '') : (komunikat.innerHTML = 'Domyślna wartość to: ' + pole.defaultValue + ', zaś wartość bieżąca to: ' + pole.value + ''), komunikat );

});