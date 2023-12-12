class Display {
    constructor(displayActualValue, displayMathValue) {
        this.displayActualValue = displayActualValue;
        this.displayMathValue = displayMathValue;
        this.calculator = new Calculadora();
        this.operatorType = undefined;
        this.actualValue = '';
        this.mathValue = '';
    }

    delete() {
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.printValues();
    }

    sub(){
        this.actualValue += '-';
        this.printValues();
    }

    multiplicate(){
        this.actualValue += 'x';
        this.printValues();
    }

    divide(){
        this.actualValue += '÷';
        this.printValues();
    }

    percentege(){
        this.actualValue += '%';
        this.printValues();
    }

    negate() {
        if (this.actualValue < 0) {
            this.actualValue = this.actualValue * -1;
        }
        this.printValues();
    }


    addNumber(num){
        if (num == '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + num.toString();
        if (num == '.' && this.mathValue.includes('.')) return
        this.mathValue = this.mathValue.toString() + num.toString();
        this.printValues();
    }

    printValues() {
        this.displayMathValue.textContent = this.mathValue;
        this.displayActualValue.textContent = this.actualValue;
    }

    // calculate(){
    //     const mathValue = parseFloat(this.mathValue);
    //     const actualValue = parseFloat(this.actualValue);

    //     if(isNaN(actualValue) || isNaN(mathValue))return
    //     this.actualValue = this.calculator[this.operatorType](mathValue, actualValue);
    // } 
}