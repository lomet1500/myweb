//number.js
let x = -10;
let y = '5';

// let result = x + y ; 문자와 숫자의 (연결)조합
// let result = x + parseInt(y); parseInt(int타입으로 치환)
// let result = x + parseFloat(y); parseFloat(소수점 연산)
// result = x / 0; 결과 Infinity(무한값), x가 음수일 경우 결과도 음수 
let result = x*y;

console.log(result);

function sum() {
    let num1 = document.getElementById('num1').value;//input tag
    let num2 = document.getElementById('num2').value;
    console.log(parseFloat(num1) + parseFloat(num2));
}


