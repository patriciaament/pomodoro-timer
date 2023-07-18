let initial = document.getElementById('start')
let workOption = document.getElementById('work')
let longPauseOption = document.getElementById('longPause')
let shortPauseOption = document.getElementById('shortPause')

let workTime = 25;
let shortPauseTime = 5;
let longPauseTime = 10;
let seconds = "00"

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    window.localStorage.setItem("pause", 25)
    workOption.classList.add('active');
    initial.classList.add('active');
}

window.onclick = function (event) {
    if (event.target.matches("#work")) {
        document.getElementById('minutes').innerHTML = workTime;
        window.localStorage.setItem("pause", 25)
        workOption.classList.add('active');
        shortPauseOption.classList.remove('active');
        longPauseOption.classList.remove('active');
    }
    if (event.target.matches("#shortPause")) {
        document.getElementById('minutes').innerHTML = shortPauseTime;
        window.localStorage.setItem("pause", 5)
        shortPauseOption.classList.add('active');
        workOption.classList.remove('active');
        longPauseOption.classList.remove('active');
    }
    if (event.target.matches("#longPause")) {
        document.getElementById('minutes').innerHTML = longPauseTime;
        window.localStorage.setItem("pause", 10);
        longPauseOption.classList.add('active');
        workOption.classList.remove('active');
        shortPauseOption.classList.remove('active');
    }

}


function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    const option = window.localStorage.getItem("pause")
    switch (option) {
        case "25":
            var timeMinutes = workTime;
            break;
        case "10":
            var timeMinutes = longPauseTime;
            break;
        case "5":
            var timeMinutes = shortPauseTime;
            break;

    }

    seconds = 60;
    document.getElementById("seconds").innerHTML = seconds - 1;
    document.getElementById("minutes").innerHTML = timeMinutes - 1;

    var minInterval = setInterval(minutesTimer, 60000);
    var secInterval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        timeMinutes = timeMinutes - 1;
        document.getElementById("minutes").innerHTML = timeMinutes - 1;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds;

        if (seconds <= 0) {
            if (timeMinutes <= 0) {
                document.getElementById("minutes").innerHTML = 0;
                clearInterval(minInterval);
                clearInterval(secInterval);
            }
            seconds = 60;
        }
    }
}