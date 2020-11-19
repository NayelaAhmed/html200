

function askUser() {
    const input = prompt('Enter a number');
    const num = Number(input);
    const result = num * num;
    alert(result);
}

function askUserTwice() {
    const input1 = prompt('Enter first number');
    const input2 = prompt('Enter second number');
    const num1 = Number(input1);
    const num2 = Number(input2);
    const result = num1 * num2;
    alert(result);
}