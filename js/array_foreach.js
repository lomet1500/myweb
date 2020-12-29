//array_foreach.js

let persons = ['Hong','Hwang','Park','Choi'];

// persons.forEach(function(a, b, c){  
//     console.log(a, b, c);
// });

//array3과 같이 document 화면창에서 표시하라 
let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
persons.forEach(myCallBack); //callback 함수

function myCallBack(a,b,c) {
    console.log(a, b, c);
    let liTag = document.createElement('li');
    liTag.innerHTML = a;
    ulTag.append(liTag);
}

persons = [];

let person = {
    name: '이혜빈',
    age: 20,
    score: 90
}

persons.push(person);

let person1 = {};
    person1.name = '이나경';
    person1.age = 21;
    person1.score = 80;
persons.push(person1);

// persons.push('송다희');

console.log(persons);

    //테이블, row, column => persons의 배열요소.
    //document.createElement('table');
    //부모요소.append(자식요소);
    //#show에 append;
    //persons.forEach();

    let tableTag = document.createElement('table');
    tableTag.setAttribute('border','1');


function drawTable(){
    let titles = ['이름','나이','점수'];

    // let tableTag = document.createElement('table');
    // tableTag.setAttribute('border','1');

    let trTag = document.createElement('tr');
    for(title of titles){
    let tdTag1 = document.createElement('td');
    tdTag1.innerHTML = title;
    trTag.append(tdTag1);
    }
   
    tableTag.append(trTag); //타이틀 생성
    persons.forEach(myCallFunc); //데이터 생성

    document.getElementById('show').append(tableTag);
//     persons.forEach(function (a,b,c){
//         let trTag = document.createElement('tr');
//         for(field in a){
//         let tdTag1 = document.createElement('td');
//         tdTag1.innerHTML = a[field];
//         trTag.append(tdTag1);
//         }
//         tableTag.append(trTag);
//     }); //데이터 생성.

//     document.getElementById('show').append(tableTag);
    
// }
    
function myCallFunc(a,b,c){
    let trTag = document.createElement('tr');
        for(field in a){
        let tdTag1 = document.createElement('td');
       tdTag1.innerHTML = a[field];
        trTag.append(tdTag1);
        }
        tableTag.append(trTag);

}   
}
