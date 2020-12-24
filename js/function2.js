//function2.js
// let friend1 = { };  //object 선언
// friend1.name = 'Hong'; //name이라는 field 선언
// friend1.age = 20;
// friend1.hobby = 'reading';

// let friend2 = {
//     name : 'Hwang',
//     age : 24,
//     hoddy : 'drive',
// }

// let friend3 = {
//     name : 'Park',
//     age : 29,
//     hobby : 'game',
// }



 
let friends = [];// 이름과 나이를 입력하시오. 입력받은 값을 document 영역에다가 보여지도록 생성(tr/td칸)
for(let e = 0; e < 3; e++){
let name = window.prompt('이름을 입력하시오.');
let age = window.prompt('나이를 입력하시오');
let hobby = window.prompt('취미를 입력하시오');
let friend = {}; //object
    friend.name = name;
    friend.age = age;
    friend.hobby = hobby;
    friends[e] = friend;
   
}
document.write('<table border = "1">');
    for(friend of friends) {
        document.write('<tr>')
        for(field in friend){
            document.write('<td>' + friend[field] + '</td>');
        }
            document.write('</tr>')
    }
            document.write('</table>');
        
    






// let numAry = [];
// // for (let i = 0; i < 5; i++){
// //     let name1 = window.prompt('숫자를 입력하세요.');
// //     numAry[i] = parseInt(name1);
// // } 
// // findmax();
    // function findmax(){
    
// }
// function findmax() {
//     //numAry[]
// let max = 0;
// for(val of numAry) {
//     if(max < val) {
//         max = val;

//     }
// }
// document.write(val);

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
// //         console.log('D')
// //     }

// //     document.write('점수는: ' + n1);

// // }



// }



// console.log(numAry);

    




// sum(name1, name2);

// function sum(a,b){
//     let n1 = parseInt(a); //30
//     let n2 = parseInt(b);
//     console.log(n1+n2);
// }

