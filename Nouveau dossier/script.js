const color = ["red", "blue", "yellow", "green"];
const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const button = document.querySelector('button');
var alerte = document.getElementById('alerte');
var code = document.getElementById('code');
var body = document.querySelector('body');
body.style.backgroundColor = "red";

let i = 0;
var tog = "";

function alarme() {
    alerte.setAttribute('style','display:block;')
    var okay = document.getElementById('okay');
    okay.addEventListener('click', () => {alerte.setAttribute('style','display:none;')});  /*-----okay.style.display = "none"   marche pt aussi-----*/
}
/*------------------------*/
button.addEventListener('click', () => {
    if (tog == "simple") {
        i++;
        if (i == color.length) {
            i = 0;      
        }  
            body.style.transition = "all 0.3s";
            body.style.backgroundColor = color[i];
            code.textContent = " " + color[i];

    } else if (tog == "complexe") {
        var couleur = "#"; 

        for (let x = 0; x < 6; x++) {
            var num = Math.floor(Math.random() * 16);
            couleur += tab[num];
            }
            body.style.transition = "all 0.3s";
            body.style.backgroundColor = couleur;
            code.textContent = " " + couleur;
   
    } else {
        alarme();
    }
    
});

/*------------------------*/
var menu1 = document.getElementsByClassName('menu')[0];
var menu2 = document.getElementsByClassName('menu')[1];
var idmenu1 = document.getElementById('colsim');
var idmenu2 = document.getElementById('colcom');

menu1.addEventListener('click', () => {
    tog = "simple";
    
    idmenu1.classList.add('valide');
    idmenu2.classList.remove('valide');  
});

menu2.addEventListener('click', () => {
    tog = "complexe";
    
    idmenu2.classList.add('valide');
    idmenu1.classList.remove('valide');   
});







