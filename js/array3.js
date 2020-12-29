//array3.js

let numbers = [34, 55, 22, 10, 100, 6, 7]; //배열
// numbers.sort(); //정렬(숫자의 크기가 아닌 숫자의 키값 (1,2,3 숫자 순))

numbers.sort(function (a, b) {   
    return b - a;
    //     if (a < b) {
//         return 1;
//     } else {
//         return -1;
//     }
// });  //오름차순 내림차순
});

// console.log(numbers); 

//forEach 함수의 매개값(3개: 배열내 현재값, 배열내 현재값의 인덱스, 현재 배열)
let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum = 0;
numbers.forEach(function (a, b, c) {
    sum += a; 
    console.log(a,b);
    let liTag = document.createElement('li');
    liTag.innerHTML = a;
    ulTag.append(liTag);
}); 
let liTag = document.createElement('li');
liTag.innerHTML ='합계: ' + sum;
ulTag.append(liTag);
