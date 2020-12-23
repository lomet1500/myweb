

// function myFunc() {
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");

    let dan = 4;
    document.write('<table border="1">');
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {
            document.write("<tr align='center'>" + "<td>" + dan + ' * ' + i + "</td>" + "<td>" + ' = ' + "</td>" + "<td>" + '<b>' + (dan * i) + '</b>' + '</li>' + "</td>" + "</tr>");
        } else {
            document.write("<tr align='center'>" + "<td>" + dan + ' * ' + i + "</td>" + "<td>" + ' = ' + "</td>" + "<td>" + '<b>' + (dan * i) + '</b>' + '</li>' + "</td>" + "</tr>");
        }
    }
    document.write('</table>');
// }

function tableCreate() {
    var cell = document.getElementById
}