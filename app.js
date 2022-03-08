const dayshtml = document.getElementById('days');
const hourshtml = document.getElementById('hours');
const minuteshtml = document.getElementById('minutes');
const secondshtml = document.getElementById('seconds');



const newYear = '1 Jan 2023';



function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60 % 60);
    const seconds = Math.floor(totalSeconds % 60);
   
    console.log(days,hours,minutes,seconds); 

    dayshtml.innerHTML = days;
    hourshtml.innerHTML = hours;
    minuteshtml.innerHTML = minutes;
    secondshtml.innerHTML = seconds;
   
    
}

countDown();

setInterval(countDown, 1000)



