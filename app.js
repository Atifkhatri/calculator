var calcin = document.getElementById('calculater');

function show(abc){
    calcin.value += abc
}
function cler(){
    calcin.value = ''
}

function result(){
    calcin.value  = eval(calcin.value)
}

function squre(){
    calcin.value = calcin.value * calcin.value
}


function del(){
    var clearlast =calcin.value;
    clearlast = clearlast.substring(0,clearlast.length-1)
    calcin.value = clearlast
}