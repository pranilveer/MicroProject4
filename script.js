function insert(num) {
    document.form1.textview.value += num;
}

function clearResult() {
    form1.textview.value = ' ';
}

function equal() {
    let exp = document.form1.textview.value;

    const result = eval(exp);
    if (result.toString().length > 6) {
        document.form1.textview.value = 'Error';
    } else {
        document.form1.textview.value = result;
    }
}

function backspace() {
    let exp = document.form1.textview.value;
    if(exp=='Error'){
        form1.textview.value = ' ';
    }else
    document.form1.textview.value = exp.substring(0, exp.length - 1);
}