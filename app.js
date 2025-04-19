//dom element
const inputContainer = document.getElementById('input-container');
const countDown = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');
const titleElement = document.getElementById('title');

const countdwonElement = document.getElementById('countdown');
const countdownElementTitle = document.getElementById('countdown-title');
const resetBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

const completeElement = document.getElementById('complete')
const completeElementInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

// global variables
let countdownTitle = '';
let countdownDate = '';
let countdownValue = new Date();
let countdownActive;
let savedCountdown;

// time variables
const second = 1000;
const minute = second * 60;
const hour = munite * 60;
const day = hour * 24;


//set dat input mimimum with todays date
const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min',today);

//populate countdown / complete UI

function updateDOM(){
    countdownActive = setInterval(()=>{
        //get the time between jan 1,1970 to the entered date ,returned in millisecond
        const now = new Date().getTime();
        const distance = countdownValue - now;

        //split up the time held in distance into days,hours , minutes and seconds;
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance%day)/hour);
        const minutes = Math.floor((distance%hour)/munite);
        const seconds = Math.floor((distance%munite)/second);

        //hide input
    })
}