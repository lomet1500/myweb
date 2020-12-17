//table.js
// 타이틀 영역..

var tableTag = document.getElementById('tbl');

var trTag1 = document.createElement('tr');  //<tr></tr>
var trTag3 = document.createElement('tr');
var tdTag1 = document.createElement('td');  //<td></td>
var tdTag3 = document.createElement('td');
tdTag1.innerHTML ='Name';
tdTag1.setAttribute('class','title');
tdTag3.innerHTML ='Hong';
tdTag3.setAttribute('class','data');
tdTag1.setAttribute('id','first'); // 속성추가
tdTag3.setAttribute('id','second');
var tdTag2 = document.createElement('td');
var tdTag4 = document.createElement('td');
tdTag2.innerHTML ='Age';
tdTag2.setAttribute('class','title');
tdTag4.innerHTML ='15';
tdTag4.setAttribute('class','data');

trTag1.append(tdTag1);
//data 영역
trTag1.append(tdTag2);
trTag3.append(tdTag3);
trTag3.append(tdTag4);

console.log(trTag1);
console.log(trTag3);

tableTag.append(trTag1);
tableTag.append(trTag3);
