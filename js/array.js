    //array.js

    let friend1 = {
        name: '송다희',
        age : 20,
        hobby: '코딩'
    }
    let friend2 = {
        name: '이나경',
        age : 22,
        hobby: '자바'
    }
    let friend3 = {
        name: '이혜빈',
        age : 25,
        hobby: '오라클'
    }

    let friends = [friend1, friend2, friend3];

    document.write('<table border = "1"><tr>');
    for(field in friend1) {
        document.write('<th>' + field + '</th>');
    }
    document.write('</tr>');
    for(friend of friends) {
        document.write('<tr>');
        for(field in friend){
    document.write('<td>' + friend[field] + '</td>');
        }    
    document.write('</tr>');
    }
    document.write('</table>');



//     let numbers =[3,4,8,6,12,83,22];
//     let sum = 0;
//     for (num of numbers) {
//         if(num > sum){
//         sum = num++;
//         console.log(num);
        
//     }
// }
//     console.log("가장 큰수:  " + sum);