//function2.js

// let name1 = window.prompt('숫자를 입력하세요.');
// let name2 = window.prompt('숫자를 입력하세요.');
    
// checkGrade(name1); // 100:A, 90:B, 80:C, 그 외 : D


// diffSum(name1,name2); //입력받은 두수 사이의 합 : 1 ~ 5

// function checkGrade(a){
//     let n1 = parseInt(a);
//     if(a > 90){
//         console.log('A')
//     }else if(a >= 80){
//         console.log('B')
//     }else if(a >= 70){
//         console.log('C')
//     }else {
//         console.log('D')
//     }

//     document.write('점수는: ' + n1);

// }

let numAry = [];
for (let i = 0; i < 5; i++){
    let name1 = window.prompt('숫자를 입력하세요.');
    numAry[i] = parseInt(name1);
} 
console.log(numAry);

    




// sum(name1, name2);

// function sum(a,b){
//     let n1 = parseInt(a); //30
//     let n2 = parseInt(b);
//     console.log(n1+n2);
// }

