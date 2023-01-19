// Set up an array of bus timings and names
var busTimings = [
  { time: "08:00", name: "Vishal" },
  { time: "08:10", name: "Vishal" },
  { time: "08:46", name: "Vishal" },
  { time: "08:00", name: "Vishal" },
  { time: "08:46", name: "Vishal" },
  { time: "08:10", name: "Vishal" },
  { time: "09:30", name: "Navadurga Prasad" },
  { time: "09:45", name: "Vishal"},
  { time: "09:58", name: "Vishal" },
  { time: "10:05", name: "Laxmi Prasad" },
  { time: "10:26", name: "Reshma" },
    { time: "10:50", name: "Padmambikaa" },
    { time: "11:10", name: "Padmambikaa" },
    { time: "11:20", name: "Christa Kiran" },
    { time: "11:29", name: "Vishal" },
    { time: "11:40", name: "Vishal" },
    { time: "11:51", name: "Padmambikaa" },
    { time: "12:00", name: "Navadurga Prasad" },
    { time: "12:09", name: "Rajarajeshwari" },
    { time: "12:09", name: "Shree Annapoorneshwari" },
    { time: "12:25", name: "Vishal" },
    { time: "12:33", name: "Navadurga Prasad" },
    { time: "12:35", name: "Vishal" },
    { time: "12:45", name: "Padmambikaa" },
    { time: "12:56", name: "Rajarajeshwari" },
    { time: "13:10", name: "Navadurga Prasad" },
    { time: "13:21", name: "Vishal" },
    { time: "13:32", name: "Vishal" },
    { time: "13:59", name: "Laxmi Ganesh" },
    { time: "14:00", name: "Vishal" },
    { time: "14:15", name: "Laxmi Ganesh" },
    { time: "14:37", name: "Padmambikaa" },
    { time: "14:44", name: "Navadurga Prasad" },
    { time: "14:57", name: "Padmambikaa" },
    { time: "15:05", name: "Reshma" },
    { time: "15:20", name: "Vishal" },
    { time: "15:33", name: "Vishal" },
    { time: "15:48", name: "Vishal" },
    { time: "15:59", name: "Padmambikaa" },
    { time: "16:10", name: "Ayra" },
    { time: "16:19", name: "Vishal" },
    { time: "16:29", name: "Vishal" },
    { time: "16:30", name: "Bharathi" },
    { time: "16:41", name: "Vishal" },
    { time: "16:56", name: "Vishal" },
    { time: "17:07", name: "Navadurga Prasad" },
    { time: "22:22", name: "Navadurga Prasad" }
  ];
  
// Get the current time in 24-hour format
// Get the current time in 24-hour format
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();

// Sort the busTimings array
busTimings.sort(function(a, b) {
    var timeA = a.time.split(':');
    var timeB = b.time.split(':');
    var busTimeA = parseInt(timeA[0]) * 60 + parseInt(timeA[1]);
    var busTimeB = parseInt(timeB[0]) * 60 + parseInt(timeB[1]);
    return busTimeA - busTimeB;
});

// Find the next bus
var nextBus = null;
var currTime = hours * 60 + minutes;
for (var i = 0; i < busTimings.length; i++) {
    var busTime = busTimings[i].time.split(':');
    var busTime24 = parseInt(busTime[0]) * 60 + parseInt(busTime[1]);
    if (busTime24 > currTime) {
        nextBus = busTimings[i];
        break;
    }
}



// Display the next bus timing
var nextBusElement = document.getElementById("next-bus");
if (nextBus) {
  nextBusElement.innerHTML = "Next bus: " + nextBus.name + " at " + nextBus.time;
} else {
  nextBusElement.innerHTML = "No more buses for today.";
}



