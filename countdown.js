let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let weekDays = [
   "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
]

let deadline = document.querySelector(".deadline");
let giveaway = document.querySelector(".giveaway");
let items = document.querySelectorAll(".btn h2");



const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();


const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 13, 30, 0)
//let futureDate = new Date(2024, 4, 20, 13, 45, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
//console.log(year)
const hours = futureDate.getHours();
//console.log(hours);
const minutes = futureDate.getMinutes();
//console.log(minutes)
const date = futureDate.getDate();
//console.log(date);

let month = futureDate.getMonth();
month = months[month];

let weekDay = futureDate.getDay();
weekDay = weekDays[weekDay];

giveaway.textContent = `giveaway ends on ${weekDay} ${date} ${month} ${year} ${hours}:${minutes}pm`;

//future time in ms
const futureTime = futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    //console.log(t);
    // 1s = 1000ms
    // 1m = 60s 
    // 1hr = 60min
    // 1d = 24hr

    // values in ms

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    //calculate all values
    let days = Math.floor(t/oneDay);
    //console.log(days);
    let hours = Math.floor((t%oneDay)/oneHour);
    //console.log(hours)
    let minutes = Math.floor((t%oneHour)/oneMinute);
    //console.log(minutes);
    let seconds = Math.floor((t%oneMinute)/ 1000);
    //console.log(seconds)

    // set values array
    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item < 10){
            return item =`0${item}`
        }
        return item
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML =`<h4 class="expired">Sorry, this giveaway has expired</h4>`
}
}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
