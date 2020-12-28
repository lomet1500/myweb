//string.js
let str = 'please locate where "locate" occurs!';
let strLeng = str.length;

// indexOF, lastIndexOf, search

srtLeng = str.indexOf('locate', 13);
str.lastIndexOf('locate');

console.log(str.lastIndexOf('locate'));
console.log(str.search('locate'));

// slice, substring, substr
let fruit ='Apple,Banana,kiwi';
let result = fruit.slice(0,5);

let from = fruit.indexOf('Banana');
result = fruit.substring(from, from+6);

result = fruit.substr(from, 6);
console.log(result);

// replace(문자열 치환)
let newFruit = fruit.replace('Banana','Orange');
console.clear();
console.log(newFruit);

// toUpperCase,toLowerCase, concat, trim, padStart, padEnd

console.log('       good       hello       '.trim().toUpperCase());
console.log('55'.padEnd(4,'0'));

let uri = 'http://www.naver.net';
console.log(uri.replace('net','com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')),'.com'));

let fruits = fruit.split(','); //Apple, Banana, kiwi
for(f of fruits){
    console.log(f.trim());
}

function getGender(num){
   let fnum = num.substr(7,1);
   if(fnum == '1'){
       return '남자';
   }else if(fnum == '2'){
       return '여자';
   }else if(fnum == '3'){
        return '남자';
   }else if(fnum == '4'){
        return '여자';
    }else {
        return '여백';
    }
}
    
// 990101-1234567
// 990102-2345678
// 000201-3456789
// 000202-4567890

//2000년 이전, 이후 구분 -> 1,3이면 남자
//2000년 이전, 이후 구분 -> 2,4이면 여자



let numbers = '990101-1234567';
numbers += '990102-2345678';
numbers += '000201-3456789';
numbers += '000202-4567890';
numbers += '0003014567890';

let numAry = numbers.split(' ');
    for(num of numAry) {
    result = getGender(num);
    console.log('결과: ' + result);
    
}

// return '남자';
// }

// result = getGender('');