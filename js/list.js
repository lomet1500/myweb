

function myFunc(){
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");

    let dan = 4;
    document.write('<ul>');
    for(let i = 1; i <=10; i++) {
        if(i % 2 == 1){
            document.write("<table border='1'>"+ "<td>" + '<li class="even">' + dan + ' * ' + i + "</td>" + "<td>" +' = <b>' +"</td>" + "<td>"+ (dan*i) + '</b>' + '</li>'+"</td>"+"</table>");
        }else{
            document.write("<table border='1'>"+ "<td>" +'<li class="odd">' + dan + ' * ' + i + "</td>" + "<td>" +' = <b>' + "</td>" + "<td>"+ (dan*i) + '</b>' + '</li>'+"</td>"+"</table>");
        }
    }
    function tableCreate(){
        var cell = document.getElementById
    }
    document.write('</ul>');
    
}
