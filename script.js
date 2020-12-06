

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

const Del_today_confirmed = document.getElementById("Del-today-confirmed");
const Del_today_deaths = document.getElementById("Del-today-deaths");

const up_today_confirmed = document.getElementById("up-today-confirmed");
const up_today_deaths = document.getElementById("up-today-deaths");

const ind_confirmed = document.getElementById("ind-confirmed");
const ind_recovered = document.getElementById("ind-recovered");
const ind_deaths = document.getElementById("ind-deaths");

const kar_confirmed = document.getElementById("kar-confirmed");
const kar_recovered = document.getElementById("kar-recovered");
const kar_deaths = document.getElementById("kar-deaths");

const Del_confirmed = document.getElementById("Del-confirmed");
const Del_recovered = document.getElementById("Del-recovered");
const Del_deaths = document.getElementById("Del-deaths");


const up_confirmed = document.getElementById("up-confirmed");
const up_recovered = document.getElementById("up-recovered");
const up_deaths = document.getElementById("up-deaths");

$(document).ready(function() {
    fetch("https://api.covid19india.org/data.json")
  .then(res => res.json())
  .then((data) => {
    ind_today_confirmed.textContent = data.statewise[0].deltaconfirmed
    ind_today_deaths.textContent = data.statewise[0].deltadeaths

    kar_today_confirmed.textContent = data.statewise[2].deltaconfirmed
    kar_today_deaths.textContent = data.statewise[2].deltadeaths

    Del_today_confirmed.textContent = data.statewise[7].deltaconfirmed
    Del_today_deaths.textContent = data.statewise[7].deltadeaths

    up_today_confirmed.textContent = data.statewise[5].deltaconfirmed
    up_today_deaths.textContent = data.statewise[5].deltadeaths
    

    ind_confirmed.textContent = data.statewise[0].confirmed;
    ind_recovered.textContent = data.statewise[0].recovered;
    ind_deaths.textContent = data.statewise[0].deaths;

    kar_confirmed.textContent = data.statewise[2].confirmed;
    kar_recovered.textContent = data.statewise[2].recovered;
    kar_deaths.textContent = data.statewise[2].deaths;

    Del_confirmed.textContent = data.statewise[7].confirmed;
    Del_recovered.textContent = data.statewise[7].recovered;
    Del_deaths.textContent = data.statewise[7].deaths;

    up_confirmed.textContent = data.statewise[5].confirmed;
    up_recovered.textContent = data.statewise[5].recovered;
    up_deaths.textContent = data.statewise[5].deaths;
  })
})

