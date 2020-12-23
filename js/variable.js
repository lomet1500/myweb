//variable.js
//undefined
let something = '30';
something = 1 > 2; 


if(something) {
    console.log("참입니다.")
} else {
    console.log("거짓입니다.")
}

// object
something = {
    name : 'Hong',
    age : 20,
    phone : '010-1111-2222',
    field : '가'
}
let name = something.name;
let age = something['age'];


for(field in something){
    console.log(field, something[field]);

}

let nameAry = ['Hong','Park','Kim','Hwang','Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'Choi';

for(let i=0; i<nameAry.length; i++) {
    console.log('nameAry['+i+'] => ' + nameAry[i]);

}

document.write('<table border = "1"><tr>');
document.write('<th>순번</th> <th>이름</th>');

for(str of nameAry) {
    document.write('<tr>' + '<td>' + str + '</td>' +'</tr>');
}

document.write('</table>');