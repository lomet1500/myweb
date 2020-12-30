//array_map2.js
//reduce
let students = [];

for(let i=1; i <=5; i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}
let result = students.some(function(a,b,c){
    return a.score > 81;
});
result = students.map(function (a){
    return a.sname;
}).indexOf('Hong2');
console.log('결과값: ' , result)

// console.log(students)

// let result = students.map(function(a,b,c,d){
//     console.log(a,b,c);    
//     return a.score;
// }).reduce(function(a,b,c,d){
    
//     return a < b ? a : b;
// });
// console.log('결과값: ', result)