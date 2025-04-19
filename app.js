//dom element
const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');
const titleElement = document.getElementById('title');

const countdownElement = document.getElementById('countdown');
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
const hour = minute * 60;
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
        const hours = Math.floor((distance % day)/hour);
        const minutes = Math.floor((distance % hour)/minute);
        const seconds = Math.floor((distance % minute)/second);

        //hide input
        inputContainer.hidden = true;

        // if countdown has ended,show complete messaging
        if (distance < 0) {
            countdownElement.hidden = true;
            clearInterval(countdownActive);
            completeElementInfo.textContent=`${countdownTitle} countdown finished on ${countdownDate}`;
            completeElement.hidden= false;
        } else{
            //else show countdwon in progess
            //populate the countdown

            countdownElementTitle.textContent=`${countdownTitle}`;
            timeElements[0].textContent=`${days}`;
            timeElements[1].textContent=`${hours}`;
            timeElements[2].textContent=`${minutes}`;
            timeElements[3].textContent=`${seconds}`;
            completeElement.hidden= true;
            countdownElement.hidden=false;
        }

    },second)
}

// take values from form input
function updateCountdown(event){
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;
    savedCountdown ={
        title:countdownTitle,
        date:countdownDate,
    };
    localStorage.setItem('countdown',JSON.stringify(savedCountdown));

    // check for valid date
    if (countdownDate === '') {
       alert('please select a date for the countdown'); 
    } else {
        // get the number of current date and update dom
        countdownValue = new Date(countdownDate).getTime();
        updateDOM();
    }
}

function reset() {
    //hide countdown and show input
    countdownElement.hidden = true;
    completeElement.hidden = true;
    inputContainer.hidden = false;

    //stop the countdown
    clearInterval(countdownActive);

    // reset value
    countdownTitle = '';
    countdownDate ='';
    titleElement.value= '';
    dateElement.value = '';
    localStorage.removeItem('countdown');
}

//get countdown from localstorage if available
function restorePreviousCountdown (){
    if (localStorage.getItem('countdown')) {
        inputContainer.hidden = true;
        savedCountdown = JSON.parse(localStorage.getItem('countdown'))
        countdownTitle = savedCountdown.title;
        countdownDate = savedCountdown.date;
        countdownValue = new Date(countdownDate).getTime();
    }
    updateDOM();
}

// event listener
countdownForm.addEventListener('submit', updateCountdown);
resetBtn.addEventListener('click',reset);
completeBtn.addEventListener('click',reset);

// on load
restorePreviousCountdown();
