function input_friend(){

let fruit = document.getElementById('fruit').value;
let liTag2 = document.createElement('li');
liTag2.innerHTML = fruit;   
document.getElementById('fruits').append(liTag2); 
document.getElementById('fruits').fruit ='';
console.log(fruit);

}

let ulTag = document.createElement('ul');
ulTag.innerHTML = 'Apple'
ulTag.id = 'fruits';

let liTag = document.createElement('li');
liTag.innerHTML = 'Banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'Orange';

ulTag.append(liTag);
ulTag.append(liTag1);

document.getElementById('show').append(ulTag);

console.log(ulTag);