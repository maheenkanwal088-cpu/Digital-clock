function updateClock() {
    const now = new Date();
    
    // Time extract karna
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = "AM";

    // 12-Hour format setting
    if (hours >= 12) {
        amPm = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    // Single digits ke sath '0' add karna (e.g., 5 ki jagah 05)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // DOM update karna
    document.getElementById("clock-display").textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("format-display").textContent = amPm;

    // Date display setting
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = now.toLocaleDateString("en-US", options);
    document.getElementById("date-display").textContent = dateString;
}

// Clock ko har 1 second (1000 milliseconds) baad run karna
setInterval(updateClock, 1000);

// Page load hote hi clock chalane ke liye function call
updateClock();