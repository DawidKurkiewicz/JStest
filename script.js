var a = 'ala'
if(a == 1) {
    console.log (1)
} else if ( typeof a == 'string') {
    console.log ('to jest string' );
    if (a === 'ala' ){
    console.log ('hello ala')
    }
} else if (a == null) {
    console.log('mamy null')
} else {
    console.log('oh no!')
}