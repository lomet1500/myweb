//date.js

let today = new Date('2020-12-01'); // GMT:00:00:00 -> 09:00:00
// today.setMonth(0); console.log(today.getDay());

function setCal(yyyy, mm, dd) {
    let today = new Date(yyyy + '-' + mm + '-' + dd);
    today = new Date(yyyy, mm, 0);
    console.log(today.getDate());
}

setCal('2020', '06', '05');

   // showCal(2019, 5);

let input = document.getElementsByTagName('input');
for (let i = 0; i < input.length; i++) {
    input[i].onchange = calender
}

function calender() {
    let yyyy = document
        .getElementById('yyyy')
        .value;
    let mm = document
        .getElementById('mm')
        .value;
    document.getElementById('show');
    
}
showCal(yyyy, mm);


function showCal(yyyy, mm) {
    let today = new Date(yyyy + '-' + mm + '-01');
    let firstDay = today.getDay()
    today = new Date(yyyy, mm, 0);
    let lastDate = today.getDate();

}

let table = document.createElement('table');
table.setAttribute('border', '1');
let tr,td;
tr = document.createElement('tr');

td = document.createElement('td');
td.innerHTML = i;
tr.append(td);
if (i % 7 == 1) {
    td.setAttribute('style', 'color: red;')
} else if (i % 7 == 0) {
    td.setAttribute('style', 'color: blue;')
    table.append(tr);
    tr = document.createElement('tr');
}
 