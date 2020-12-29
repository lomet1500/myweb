//array1.js

let fruits = ['Apple','Banana']; //배열선언
fruits[2] = 'Melon'; // 반복해서 쓰기 귀찮다.
fruits[fruits.length] = 'Orange';  //fruits.length 위치의 값 : 3
fruits[fruits.length] = 'Mango' ;  // 4
// fruits[2] = 'New Melon'; // 기존의 값 대체
delete fruits[2]; //배열에 정해진 번호에 해당하는 값 삭제
// for(let i = 0; i<fruits.length; i++) {
//     console.log(fruits[i]);

// }

//배열 추가
fruits = [];
fruits.push('Apple');     //push : 값을 추가
fruits.push('Banana');
fruits.unshift('Orange'); // unshift : 앞쪽에 추가
fruits.unshift('Melon');
//배열 삭제 메소드
// fruits.pop(); //pop : 제일 뒤에 있는 요소 제거
// fruits.shift(); //shift : 제일 앞 요소 제거

//Melon, Orange, Apple, Banana

let fruit = fruits.splice(1, 0, 'New Orange', 'New Apple'); //splice : 하나를 제거하고 나머지들을 앞으로 당김, 또는 추가를 할수 있다. 
console.log(fruit);

    for(fruit of fruits) {
        console.log(fruit);

}

fruits =['Apple, Banana, Mango'];
fruit = {
    name: 'Apple',
    price: 2000,
    weight: 50
} 
fruit['name']; // name based ; fruit.name; (object)
fruits[0]; // index based (배열)

