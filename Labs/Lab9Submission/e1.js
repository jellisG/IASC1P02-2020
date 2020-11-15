var start = new Date();

function stopTime() {
    var stop = new Date();

    alert("You have been on this page for: " + ((stop.getTime()-start.getTime())/600) + " seconds");
}