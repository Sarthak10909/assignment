//3rd problem
var a = [1,2,3,4,5];

a.push(6);

console.log(a);

//4th problem
a.shift();

console.log(a);

//5th problem
var index = 2;

a.splice(index, 0, 8);

console.log(a);

//6th problem
var b = [2, 4, 1, 3, 1, 1, 1, 4];

var oldNum = 1;
var newNum = 5;

for(var i = 0; i < b.length; i++){
    if(b[i] === oldNum){
        b[i] = newNum;
    }
}

console.log(b);

//7th problem
var c = [3, 1, 4, 2, 5, 6, 8, 7];
var len = c.length;

for(var i = 0; i < len; i++){
    for(var j = 0; j < len - i; j++){
        if(c[j] > c[j+1]){
            [c[j], c[j+1]] = [c[j+1], c[j]];
        }
    }
}

console.log(c);


//8th problem
for(var i = 0; i < c.length/2; i++){
    var temp = c[i];
    c[i] = c[c.length - 1 - i];
    c[c.length - 1 - i] = temp;
}

console.log(c);

//9th problem
var ind = b.indexOf(5);

console.log(ind);