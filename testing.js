const stringLength = (string) => {
    return string.length;
}

const reverseString = (string) => {
    return string.split('').reverse().join('')
}

class Calculator {
    static sum = (a,b) => { return a+b; };
    static substract = (a,b) => { return a-b; }
    static multiply = (a,b) => { return a*b; }
    static divide = (a,b) => { return a/b; }
    
}

const capitalize = (string) => {

    if(typeof string !== 'string'){
        throw new Error('Error, The input must be a string');
    }
    const capital = string.charAt(0).toUpperCase() + string.slice(1)    
    return capital;
}
capitalize('gol')

module.exports = {stringLength, reverseString, Calculator, capitalize};