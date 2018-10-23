var monday = true;
var even = false;
var a;
if (monday) {
    if(even){
        a = 2;
    } else {
    a = 1;
}
} else {
    a = 0;
}

var b = monday ? (even ? 2 : 1)  : 0;
