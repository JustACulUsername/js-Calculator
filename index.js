let output = document.getElementById("output");
let result = 0;

const operators = ['/', '*', '-', '+', '.'];

function addNumber(num) {
    if (num === '/' || num === '*' || num === '-' || num === '+' || num === '.' ) {
        let lastchar = result.toString();
        switch(lastchar.slice(-1)) {
            case operators[0]: return;
            case operators[1]: return;
            case operators[2]: return;
            case operators[3]: return;
            case operators[4]: return;
            default: break;
        }
    }

    if (result === 0 || result === '0') {
        if (num === '/' || num === '*' || num === '-' || num === '+' || num === '.' ) {
            return;
        }
        let newNum = parseInt(num);
        result += newNum;
    }
    else {
        result += num;
    }
    output.innerHTML = result;
    return result;
}

function clearOut() {
    result = 0;
    output.innerHTML = result;
    return result;
}

function equal() {
    let newresult = eval(result);
    result = newresult;
    output.innerHTML = result;
    return result;
}

