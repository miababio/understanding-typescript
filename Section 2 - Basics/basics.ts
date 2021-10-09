function add(a: number, b: number, showResult: boolean) {
    if(showResult) {
        console.log(a + b);
    } else {
        return a + b;
    }
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;

const result = add(num1, num2, printResult);