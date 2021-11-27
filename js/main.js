// Vars

const eve = "Eve ";
const today = new Date();
const xmas = new Date(today.getFullYear(), 11, 25);

const Counter = document.getElementById("counter");
const Days = document.getElementById("days");

const one_day = 1000 * 60 * 60 * 24;
const daysAmount = Math.ceil((xmas.getTime() - today.getTime()) / one_day);

// Code

if (today.getMonth() == 11 && today.getDate() > 25) xmas.setFullYear(xmas.getFullYear() + 1);

if (daysAmount == 0) {
  Days.style.display = "none";
  Counter.style.display = "none";
  document.getElementById("xmas").style.display = "none";
  document.getElementById("xmasDay").style.display = "block";
  document.getElementById("xmasDay").innerHTML = "It's Christmas Day!"
} else if (daysAmount == 1) {
  Days.style.display = "none";
  Counter.style.display = "none";
  document.getElementById("xmas").style.display = "none";
  document.getElementById("xmasDay").style.display = "block";
  document.getElementById("xmasDay").innerHTML = "It's Christmas Eve!"
} else {
  Days.innerHTML = `${daysAmount} days left!`;
}

Counter.innerHTML = `${eve.repeat(daysAmount)}`;
