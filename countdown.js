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


let futureDate = new Date(2024, 4, 20, 14, 30, 0);
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