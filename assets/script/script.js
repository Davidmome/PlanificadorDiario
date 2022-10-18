var timeDisplay = document.querySelector('#currentDay')

setInterval(function(){
    timeDisplay.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}, 1000)
