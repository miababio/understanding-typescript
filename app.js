function add(a, b, showResult) {
    if (showResult) {
        console.log(a + b);
    }
    else {
        return a + b;
    }
}
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var result = add(num1, num2, printResult);
