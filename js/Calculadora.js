class Calculadora {
    add(num1, num2) {
        return num1 + num2;
    }
    sub(num1, num2) {
        return num1 - num2;
    }
    divide(num1, num2) {
        return num1 / num2;
    }
    multiplicate(num1, num2) {
        return num1 * num2;
    }
    negate(num){
        if (num < 0) {
            num = num * -1;
        }
        return num;
    }
    percentage(num){
        return num /= 100;
    }
}