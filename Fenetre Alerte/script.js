var message = document.getElementById('message');
var calque = document.getElementById('calque');
var poubelle = document.getElementById('poubelle');
var alerte = document.getElementById('alerte');


poubelle.addEventListener('click', () => {
    message.style.display = "none";
    calque.style.display = "none";
});

alerte.addEventListener('click', () => {
    message.style.display = "initial";
    calque.style.display = "initial";
});



