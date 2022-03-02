const aug = document.getElementById('aug');
const reset = document.getElementById('reset');
const dim = document.getElementById('dim');
var span = document.querySelector('span');

var counter = 0;
span.textContent = counter;

aug.addEventListener('click', () => {
    counter++;
    span.textContent = counter;
    if (counter == 0) {
        span.style.color = "black";
    } 
    if (counter > 0) {
        span.style.color = "green";
    } 
    if (counter < 0) {
        span.style.color ="red";
    }
});

dim.addEventListener('click', () => {
    counter--;
    span.textContent = counter;
    if (counter == 0) {
        span.style.color = "black";
    } 
    if (counter > 0) {
        span.style.color = "green";
    } 
    if (counter < 0) {
        span.style.color ="red";
    }
});

reset.addEventListener('click', () => {
    counter = 0;
    span.textContent = counter;
    if (counter == 0) {
        span.style.color = "black";
    } 
    if (counter > 0) {
        span.style.color = "green";
    } 
    if (counter < 0) {
        span.style.color ="red";
    }
});


