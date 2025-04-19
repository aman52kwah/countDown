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