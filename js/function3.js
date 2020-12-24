// function3.js
let friends = [];
let i = 0;

function input_friend() {
    let namef = document.getElementById('name').value;
    let agef = document.getElementById('age').value;
    let hobbyf = document.getElementById('hobby').value;

    let friend ={};
    friend.name = namef;
    friend.age = agef;
    friend.hobby = hobbyf;
 
    
    friends[i++] = friend;
    // console.clear();

    
    for(friend of friends){
        for(field in friend) {
            console.log(friend[field]);

        }
    }

//     console.log(namef.value, agef.value, hobbyf.value);
//     document.getElementById('result').value = namef.value+','+ agef.value+','+ hobbyf.value;
}


