var number = 837249874;

var funcArg = function() {
    var i;
    var sum = 0;

    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
};

console.log(funcArg(5, 1, 1, 800));


console.log('******');
console.log('******');
console.log('******');



var myClosure = (function outerFunction() {
    var i = 5;

    return {
        inc: function innerFunction() {
            console.log(i++);
        }
    };

}());

myClosure.inc();
myClosure.inc();



console.log('******');
console.log('******');
console.log('******');

document.write(navigator.userAgent);


useCallback(5, callbackX);

function useCallback(x, callback) {
    console.log('Hello');
    callback();
}

function callbackX() {
    return 'This is the callbackX function';
}

function callbackY() {
    return 'This is the callbackY function';
}