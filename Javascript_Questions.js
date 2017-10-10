/* what is the difference between the following?
- what does the . in GuessingGame.prototype mean? Are they both functions? 
- a function is actually a type of object, and is used just like the dot
notation used to access a property of an object.

GuessingGame = function () {

};

GuessingGame.prototype = {

};
Protoypal inheritance: A prototype is a working object instance.
Objects inherit directly from other objects.
ie.
Array.class_name.prototype.method_name = function(first_argument) {
	// body...
};

To add a function to GuessingGame define it in the protype object
 like this:
 GuessingGame.prototype = {
	init: function () { }
};

- Define a function called "init" which accepts two arguments: minNumber and maxNumber
- Define a function called "generateNumber" which accepts no arguments
- Define a function called "guess" which accepts a single argument: theGuess

A function is a JavaScript procedure --a set of statements
that performs a task or calculates a value. It's 
like a reusable piece of code. Imagine, having 20 for loops 
and then having a single function to handle it all. To use
a function you must define it somewhere in the scope from which you
wish to call it. A function definition [also called a function declaration]
consists of the function keyword, followed by the name of the function, a
list of arguments to the function, enclosed in parantheses and seperated by
commas, the JavaScript statements that define the function, enclosed in curly
braces { }

SYNTAX
function name (argument1, argument2...argumentN){
	statement1;
	statement2;
	..
	..
	statementN;
}

EXAMPLE
function greet(name) {
	return "Hello" + name + "!";
}

--

FUNCTION CALLING

SYNTAX
functionName(argument1, argument2, ..., argumentN);

EXAMPLE
greet("Anonymous");
Hello Anonymous!
--

FUNCTION HOISTING
The two ways of declaring functions produce different results. 
Declaring a function one way "hoists" it to the top of the call, and makes it available before
it's actually defined.
EXAMPLE
hoistedFunction (); // Hello!  I am defined immediately!
notHoistedFunction (); // ReferenceErro: notHoistedFuncton is not defined
function hoistedFunction () {
	console.log("Hello! I am defined immediately!");
}

var notHoistedFunction = function () {
	console.log("I am not defined immediately.");
} 
^^^ WHYYYY IS THIS NOT DEFINED???????????? IS IT BECAUSE THERE'S A VAR? ALSO 

--
IF STATEMENTS
Example
if ( answer === 42) {
	console.log("Told you so!");
}

ELSE STATEMENTS
If the condition is true, statement1 will be executed. Otherwise
statement2 will be executed.
if (condition) {
	statement1: code that runs if condition is true
} else {
	statement2: code that runs if condition is false
}
Example
if (gender == "male") {
	console.log("hello, sir!");
} else {
	console.log("Hello, ma'am!");
}

ELSE IF STATEMENTS
This is like an else statement, but with its own condition. It will only 
if condition is true, and the previous statement's condition was false.
SYNTAX
else if . If the condition is true, statement1 will be excecuted. Otherwise, condition2 is checked .
if it is true, then statement2 is executed. Else , if nothing is true , statement3
is executed.
if (condition1) {
	statement1;
} else if (condition2) {
	statement2;
} else {
	statement3;
}
EXAMPLE

if (someNumber > 10) {
	console.log ("Numbers larger than 10 are not allowed.");
} else if (someNumber < 0) {
	console.log("Negative numbers are not allowed.");
} else {
	console.log("Nice number!");
}
--
FOR LOOPS
You use for loops, if you know how often you'll loop. The momst often used
is varName in loops is i
SYNTAX
for ([var i= startValue]; [i < endValue]; [i+stepValue]) {
	// Your code here
}
EXAMPLE
for (var i = 0; i < 5; itt) {
	console.log(i); //Prints the numbers from 0 to 4
}
EXAMPLE
var i; // "outsourcing" the definition
for (i=10; i >= 1; i--) {
	console.log(i); //Prints the numbers from 10 to 1
}
EXAMPLE - Note that all of the three statements are optional, i.e.
var i = 9;
for(;;){
	if(i === 0)break;
	console.log(i);
	i--;
}
--
WHILE LOOPS
SYNTAX
while (condition) {
	// Your code here
}
EXAMPLE
var x = 0
while (x < 5) {
	console.log(x); // prints numbers from 0 to 4
	x++;
}


