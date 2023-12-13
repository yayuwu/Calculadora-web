class Display {
    constructor(displayActualValue, displayMathValue) {
        this.displayActualValue = displayActualValue;
        this.displayMathValue = displayMathValue;
        this.actualValue = '';
        this.mathValue = '';
    }

    delete() {
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.mathValue = this.mathValue.toString().slice(0, -1);
        this.printValues();
    }

    add(){
        this.actualValue += '+';
        this.printValues();
    }

    sub(){
        this.actualValue += '-';
        this.printValues();
    }

    multiplicate(){
        this.actualValue += '*';
        this.printValues();
    }

    divide(){
        this.actualValue += '/';
        this.printValues();
    }

    percentage() {
        try {
            let result;
            const num = parseFloat(this.actualValue);
            if (!isNaN(num)) {
                const percentageResult = num / 100;
                result = percentageResult.toString();
                this.actualValue += '%';
                this.mathValue = result;
                this.printValues();
            }
        } catch (error) {
            this.displayActualValue.textContent = 'Error';
            this.displayMathValue.textContent = 'Error';
        }
    }

    negate() {
        const regex = /(-?\d+(\.\d+)?)[^\d]*$/;
        const match = this.actualValue.match(regex);

        if (match) {
            const lastNumber = match[1];
            const negatedNumber = (-parseFloat(lastNumber)).toString();
            this.actualValue = this.actualValue.replace(regex, negatedNumber);
            this.mathValue = this.actualValue;
            this.printValues();
        }
    }


    equal() {
        try {
            let expression = this.actualValue.replace('%', '*0.01');
            const result = eval(expression);
            this.actualValue = result.toString();
            this.mathValue = this.actualValue;
            this.printValues();
        } catch (error) {
            this.displayActualValue.textContent = 'Error';
            this.displayMathValue.textContent = 'Error';
        }
    }

    addNumber(num){
        if (num === '.' && this.actualValue.includes('.')) return;

        if (this.actualValue.endsWith('%')) {
            const percentageValue = parseFloat(this.actualValue.replace('%', ''));
            const percentageResult = percentageValue / 100;
            this.actualValue = percentageResult.toString() + num.toString();
            this.mathValue = percentageResult.toString() + num.toString();
        } else {
            this.actualValue = this.actualValue.toString() + num.toString();
            this.mathValue = this.actualValue;
        }

        this.printValues();
    }

    printValues() {
        const mathExpression = this.actualValue.replace(/\*/g, 'x');
        this.displayActualValue.textContent = mathExpression;
        
        this.displayMathValue.textContent = eval(this.mathValue);
 }


}