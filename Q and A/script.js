const tab = [
    {
        quest: "Acceptez-vous la majeure partie des cartes de crédit",
        repo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit."
    },
    {
        quest: "Supportez-vous les fermiers locaux ?",
        repo: "Psum dolor sit cafur amet, consectetur adipisicing elit. Est dolore illo dolor lolo es quia nemo doloribus quaerat, magni numquam repellat rereprehenderit."
    },
    {
        quest: "Vos ingrédients sont-ils issus de l'agriculture biologique",
        repo: "Consectetur adipisicing elsdfit. Estss dolore illo dolores quia nemo doloribus quaerat, magni jugat numquam repellat reprehenderit."
    }
];

var themesuivant = document.getElementById('themesuivant');

function afficheur() {

    for (var i = 0; i < tab.length; i++) {
        
        var code2 = `<div class="theme2"><div class="cross"><div class="crossline"></div><div class="crossline2"></div></div><p class="question">${tab[i]["quest"]}</p><div class="interligne"></div><p class="reponse">${tab[i]["repo"]}</p></div>`;
        
        themesuivant.innerHTML += code2;
    }
}
afficheur();



var cross = document.querySelectorAll('.cross');
var titre = document.querySelector('h1');

cross.forEach( (e) => {

    e.addEventListener('mouseover', () => {
        e.style.transform = "rotate(90deg)";  
    });

    e.addEventListener('mouseout', () => {
        e.style.transform = "rotate(0deg)";  
    });

    var boolean1 = true;

    e.addEventListener('click', () => {

        

        if (boolean1 == false) {
            boolean1 = true;
            e.childNodes[1].style.backgroundColor = "#C59D5F";
            //e.parentNode.style.height = "auto";
            e.parentNode.childNodes[2].style.display = "none";
            e.parentNode.childNodes[3].style.display = "none";
            
            console.log(e.parentNode.childNodes[2])
        } else {
            boolean1 = false;
            e.childNodes[1].style.backgroundColor = "transparent";
            e.parentNode.childNodes[2].style.display = "initial";
            e.parentNode.childNodes[3].style.display = "initial";
            //e.parentNode.style.height = "auto";
        }


        


        /*var crossline2 = document.getElementsByClassName('crossline2');
        crossline2.style.display = "none";*/

        //console.log(crossline2);     
         //e.childNodes.style.back
         //e.style.height = "20px"; 
        //crossline2.style.backgroundColor = "transparent";
        //crossline2.style.background = "none";
        
    });
});



 
    
    









