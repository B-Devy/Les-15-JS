var interrupteur = document.getElementById('interrupteur');
var media = document.querySelector('video');
var boolean = true;

interrupteur.addEventListener('click', () => {
    interrupteur.classList.toggle('activateur');

    if (boolean == false) {
        media.play();
        boolean = true;
    } else {
        media.pause();
        boolean = false;
    }
});

setTimeout(jouer, 0);

function jouer() {
    media.play();
}


