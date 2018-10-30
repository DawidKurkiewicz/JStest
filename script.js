
function render(what, where) {
    where.innerHTML = what;
}

function numbers() {
    var matma = Math.min(2, 18, -10, 0, 11, 95, -29, 80, 22, 91, -91, 47, 81, 33, 59, -102, 21, 20, -14, 60);
    matma = Math.abs(matma) 
    matma = Math.sqrt(matma)
    matma = Math.round(matma)
    matma = Math.pow(matma, 2) * Math.PI
    matma = Math.ceil(matma)
    return matma;
}
render(numbers(), document.body)