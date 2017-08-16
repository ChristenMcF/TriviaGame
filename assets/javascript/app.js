$(document).ready(function() {
  
  var seconds;
var temp;

// still not working properly...
function countdown() {
    time = document.getElementById('time').innerHTML;
    timeArray = time.split(':')
    seconds = timeToSeconds(timeArray);
    if (seconds == '') {
        temp = document.getElementById('time');
        temp.innerHTML = "00:00";
        return;
    }
    seconds--;
    temp = document.getElementById('time');
    temp.innerHTML = secondsToTime(seconds);
    timeoutId = setTimeout(countdown, 1000);
}

function timeToSeconds(timeArray) {
    var minutes = (timeArray[0] * 60) + (timeArray[1] * 1);
    var seconds = (minutes * 60) + (timeArray[2] * 1);
    return seconds;
 }
// pseudocoded so far...
 $(".startbtn").on("click", function() {
 	countdown();

 });


    $(".btn").on("click", function() {

        if {
        		q1 = "d"
        		q2 = "a"
        		q3 = "c"
        		q4 = "a"
        		q5 = "b"
        		q6 = "b"
        		q7 = "c"
        		q8 = "a"
        		q9 = "d"
        		q10 = "a"
        }

        	alert("Correct!")

         {
            alert("You didn't answer all the questions!");
        } else {
            alert("Wrong!")


    });
})