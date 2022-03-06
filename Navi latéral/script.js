var cross = document.getElementById('cross');
var hamburger = document.getElementById('hamburger');
var nav = document.querySelector('nav');


var boolean = false;

var fonct = setInterval(function() {
    if (boolean == false) {
        hamburger.style.transform = "scale(0.8)"
        boolean = true;
    }
    else {
        hamburger.style.transform = "scale(1)"
        boolean = false;
    }
}, 1000);

cross.addEventListener('click', () => nav.style.left = "0px");
hamburger.addEventListener('click', () =>{ 
        nav.style.left = "0px";
    });

console.log(nav)
