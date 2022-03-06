var cross = document.getElementById('cross');
var hamburger = document.getElementById('hamburger');
var nav = document.querySelector('nav');
var body = document.querySelector('body');


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

var interrupteur = true;

cross.addEventListener('click', () => {
    nav.style.left = "-500px"
    interrupteur = true;
});

hamburger.addEventListener('click', () => { 
        if (interrupteur == true) {
            nav.style.left = "0px";
            interrupteur = false;
        } else {
            nav.style.left = "-500px";
            interrupteur = true;
        }
    });



var icon = document.querySelectorAll('img.icon');

icon.forEach( (e) => {
    e.addEventListener('mouseover', () => {
        //e.style.opacity = 0.2;
        //e.style.transition = "all 1s";
        e.src = e.src.replace("49A6E9", "324D67");
        
        
    e.addEventListener('mouseout', () => {
        //e.style.opacity = 1;
        //e.style.transition = "all 1s";
        e.src = e.src.replace("324D67", "49A6E9");
        })    
    })
})

