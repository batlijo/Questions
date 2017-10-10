/* what is the difference between the following?
- what does the . in GuessingGame.prototype mean? Are they both functions? 

GuessingGame = function () {

};

GuessingGame.prototype = {

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
^^^ WHYYYY IS THIS NOT DEFINED???????????? IS IT BECAUSE THERE'S A VAR?
