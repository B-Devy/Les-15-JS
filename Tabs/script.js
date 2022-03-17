const tab = [
    {
        categorie: "history",
        titre: "Depuis 1926",
        texte: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima iure reprehenderit recusandae cum tenetur quod facilis temporibus expedita. Totam ratione dolores labore numquam? Accusantium sapiente maiores illo repellendus rem.",
        list:[],
        photo: "img/mountain.jpg"
    },
    {
        categorie: "visions",
        titre: "Nos valeurs",
        texte: "Consectetur adipisicing elit. Omnis varone minima iure reprehenderit recusandae cum tenetur quod glucoz facilis temporibus expedita. Sirene ratione dolores labore numquam? Accusantium poissa sapiente maiores illo repellendus rem.",
        list:["Clocus vivo nimum", "tetar grenou marre etan", "Marre nostrum pipo requinno"],
        photo: "img/lake.jpg"
    },
    {
        categorie: "Goals",
        titre: "Tourné vers le futur",
        texte: "Pico amet consectetur adipisicing elit lima ceatur clopor. Omnis minima iure reprehenderit recusandae vinum quod facilis temporibus expedita. Holores labore numquam? Accusantium Canin leopa vue vut sapiente Vivo illo repellendus rem.",
        list:[],
        photo: "img/mountain3.jpg"
    }
]


/*
var histor = document.getElementById('history');
var visions = document.getElementById('visions');
var goals = document.getElementById('goals');*/

var hvg = document.querySelectorAll('.onglet');

var rubrique = document.getElementById('rubrique');
var informations = document.getElementById('informations');
var liste2 = document.getElementById('liste2');

var image = document.getElementById('image');


function cleaner() {
    hvg.forEach( ev => ev.style.backgroundColor = "#e4e8ec")
}

var blanc = "#ffffff";
var bleu = "#c1d6e6";
var gris = "#e4e8ec";
/*
hvg[0].style.backgroundColor = blanc;
hvg[1].style.backgroundColor = gris;
hvg[2].style.backgroundColor = gris;

*/



hvg.forEach( e => {
    /*
    if (e.style.backgroundColor != "#ffffff") {
        cleaner();

        e.addEventListener('mouseover', () => e.style.backgroundColor = "#c1d6e6" );
        e.addEventListener('mouseout', () => e.style.backgroundColor = "#e4e8ec" );

    } 
    
    if (e.style.backgroundColor == "ffffff") {
        cleaner();

        e.addEventListener('mouseover', () => e.style.backgroundColor = "#ffffff" );
        e.addEventListener('mouseout', () => e.style.backgroundColor = "#ffffff" );
    }
*/
    console.log(e);
    e.addEventListener('click', () => {
        cleaner();
        //var id = e.target.dataset.id;
        //e.style.backgroundColor = "#ffffff";
        e.classList.add('.activation');
     
    if (e.childNodes[0].innerText == "Goals") {

        rubrique.innerText = tab[2]["titre"];
        informations.innerText = tab[2]["texte"];
        liste2.innerText = tab[2]["list"];
        image.style.backgroundImage = "url(" + tab[2]['photo']+")";
        
    } else if (e.childNodes[0].innerText == "Visions") {

        rubrique.innerText = tab[1]["titre"];
        informations.innerText = tab[1]["texte"];
        image.style.backgroundImage = "url(" + tab[1]['photo']+")";
        liste2.innerHTML = "";

        for (var i = 0; i < tab[1]["list"].length; i++) {
            liste2.innerHTML += "<li>" + tab[1]["list"][i] + "</li>";
        }

    } else {

        rubrique.innerText = tab[0]["titre"];
        informations.innerText = tab[0]["texte"];
        liste2.innerText = tab[0]["list"];
        image.style.backgroundImage = "url(" + tab[0]['photo']+")";


    }
    
    })
})





