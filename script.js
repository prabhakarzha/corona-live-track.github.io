// ////////////////////////////////////////////// Typing Effect  //////////////////////////////////////
const words = ['Covid-19 Tracker...'];
let count = 0;
let index = 0;
let currentWord = "";
let letter = "";

function type() {
    if (count === words.length) {
        count = 0;
    }
    currentWord = words[count];
    index++;
    letter = currentWord.slice(0, index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentWord.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(type, 1500);   
});


















const ind_today_confirmed = document.getElementById("ind-today-confirmed");
const ind_today_deaths = document.getElementById("ind-today-deaths");
const kar_today_confirmed = document.getElementById("kar-today-confirmed");
const kar_today_deaths = document.getElementById("kar-today-deaths");

const ind_confirmed = document.getElementById("ind-confirmed");
const ind_recovered = document.getElementById("ind-recovered");
const ind_deaths = document.getElementById("ind-deaths");

const kar_confirmed = document.getElementById("kar-confirmed");
const kar_recovered = document.getElementById("kar-recovered");
const kar_deaths = document.getElementById("kar-deaths");


$(document).ready(function() {
    fetch("https://api.covid19india.org/data.json")
  .then(res => res.json())
  .then((data) => {
    ind_today_confirmed.textContent = data.statewise[0].deltaconfirmed
    ind_today_deaths.textContent = data.statewise[0].deltadeaths
    kar_today_confirmed.textContent = data.statewise[13].deltaconfirmed
    kar_today_deaths.textContent = data.statewise[13].deltadeaths
    

    ind_confirmed.textContent = data.statewise[0].confirmed;
    ind_recovered.textContent = data.statewise[0].recovered;
    ind_deaths.textContent = data.statewise[0].deaths;

    kar_confirmed.textContent = data.statewise[13].confirmed;
    kar_recovered.textContent = data.statewise[13].recovered;
    kar_deaths.textContent = data.statewise[13].deaths;
  })
})
