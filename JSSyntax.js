// JQuery Button Function
#$("#button").on("click", function ()){
	console.log(button);
});
// JQuery object for button
console.log(this);
// });

// JQuery HTML Button Function
// <button id="button">CLICK ME!</button>

// Declaring a variable
var website = "bwimpn" // bwimpn in variable output
console.log(website); // Displays variable website's content to console

// Start on click function JQuery
$("#start").on("click", function () {
	// set the button' alert's timeout to run five seconds after the function's called.
	delayButtonAlert = setTimeOut(function() {
		alert("Alert #2");
	}, 5000);
});
/* Ok everything here is about timers and info for HW5 */
after 5 seconds, execute the fiveSeconds function
setTimeOut(fiveSeconds, 5000);

/* HTML for time left
<div id="time-left"></div> */

setTimeOut(timeUp, 1000);

//javascript for HW5
var number = 100; //not sure what this number is for, is this the time limit?
var intervalId;

$("#stop").on("click", stop);
$("#resume").on("click", run);

function run() {
	intervalId = setInterval(decrement, 1000);
}

// do I need this decrement function?
function decrement(){
	number--;
	$("#show-number").html("<h2>"+ number + "</h2>");
}

// DONE: Change the "display" div to "00:00"
$("#display").text("00:00");
// DONE: Empty the "laps" div
$("#laps").text("");
},
start: function(){
	//DONE: use setInterval to start the count here and set the clock to running.
	if (!clockRunning) {
		intervalId = setInterval(stopwatch.count, 1000);
		clockRunning = true
	}
}
var converted = stopwatch.timeConverter(stopwatch.time);
console.log(converted);
// use this variable to show the converted time
$("#display").text(converted);
/* the html for this is the following
<div id="display">00:00</div>




