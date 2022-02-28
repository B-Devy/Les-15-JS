var color = ["red", "blue", "yellow", "green"];
const button = document.querySelector('button');
const button2 = document.getElementsByTagName('button')[1];

var body = document.querySelector('body');
body.style.backgroundColor = "red";

let i = 0;

/*------------------------*/
button.addEventListener('click', () => {
    i++;
    if (i == color.length) {
        i = 0;      
    }  
        body.style.transition = "all 0.3s";
        body.style.backgroundColor = color[i];
});

/*------------------------*/
const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

button2.addEventListener('click', () => {
    var couleur = "#"; 

    for (let x = 0; x < 6; x++) {
        var num = Math.floor(Math.random() * 16);
        couleur += tab[num];
    }
    
    body.style.transition = "all 0.3s";
    body.style.backgroundColor = couleur;
});


var menu1 = document.getElementsByClassName('menu')[0];
var menu2 = document.getElementsByClassName('menu')[1];
var texto = document.getElementsByClassName('texte')[0];
var tog = "simple";


menu1.addEventListener('click', () => {
    tog = "simple";
    texto.innerText = tog;
    menu1.classList.add('valide');
    console.log(menu1)
    /*menu1.style.color = "#6fa8dc";*/
});

menu2.addEventListener('click', () => {
    tog = "complexe";
    texto.innerText = tog;
});




