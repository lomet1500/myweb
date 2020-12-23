//js.js

var name = document.getElementById('show').innerHTML;
console.log(name);
document.getElementById('show').innerHTML = "world";

var divTag = document.createElement("div");
divTag.innerHTML ="Nice"; //<div>Nice</div>

document.getElementById('show').append(divTag);

var li_1 = document.createElement("li");
var li_2 = document.createElement("li");
li_1.innerHTML ="Apple";  //<li>Apple</li>
li_2.innerHTML ="Orange"; //<li>Orange</li>

document.getElementById("fruit").append(li_1);
document.getElementById("fruit").append(li_2);

//////////////////////////////////////////////
var grade = 6;
for(var i =1; i <= 9; i++){
   console.log(grade + ' * '+ i + ' = ' + (grade*i));
// var str= grade + ' * '+ i + ' = ' + (grade*i);
// console.log(str);
}
//결과값: 5050 입니다.
var num = 0;
for(var t =1; t<=100; t++) {
    num = num + t;
}
{
   document.write("결과값: " + num + "입니다.");
}