var arr = [1, 4, 5];

//console.log(arr[1]);

arr[100] = 25;

delete arr[100];

//console.log(arr[100]);


var red = 4/0;

var matrix = [
  [2, 4, 5],
  [56, 1, 52],
  [13, 3, 9]
];

//console.log(matrix[1][1]);

var myFish1 = ['angel', 'clown', 'mandarin', 'surgeon'];
var myFish2 = ['angel', 'clown', 'mandarin', 'surgeon'];

var removed1 = myFish1.splice(2, 0, 'drum');
var removed2 = myFish2.splice(2, 3, 'drum');

//console.log(myFish1);
//console.log(myFish2);

var obj = {
    propOne: 'One',
    propTwo: 'two'
},

prop;

for(prop in obj)
{
    if(obj.hasOwnProperty(prop))
        console.log(prop + ': ' + obj[prop]);
}

var getSumNum = function (a, b)
{
    return a + b;
};

console.log('***************');
console.log(getSumNum(56, 1));
console.log('***************');
var a = 12 / 3;
var c = 3 * 4;
console.log(getSumNum(a, c));

console.log(typeof getSumNum);