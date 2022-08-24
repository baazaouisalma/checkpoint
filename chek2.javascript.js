/*
alert("This is an alert box"); 
var visitorName = prompt("What's your name : ")

var isCoolWithIt = confirm("Are you ok with it?")
console.log(isCoolWithIt )


var a = 2 + 2 // I’m a single line comment
/*
And I’m a multi-lines comment,
Anything in here will be ignored by the Javascript
Interpreter.
var b = 3 + 3
*/
/*
console.log(typeof(true)) // prints boolean
console.log(typeof(9000)) // prints number
console.log(typeof("Übermensch")) // prints string
console.log(typeof(anUndefinedVar)) // prints undefined
console.log(typeof(null)) // prints object


// NaN
console.log(0 / 0);
console.log('Some random string' * 2);

// Infinity 
console.log(1 / 0);
console.log(Infinity * Infinity);
console.log(1e+309);

var num = 0;
console.log(num)
num ++
console.log(num)
num --
console.log(num)


*/
function checkIfNumber( x ){
    if ( typeof x === 'number' ){
        console.log( x + ' is a number.' ); 
    } else {
        console.log("Oops that's not a number.");
	}
}



