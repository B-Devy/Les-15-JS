const perso = [
    {
    photo: "img/person-1.jpg",
    nom: "Susan Dujardin",
    profession: "Caissière",
    para: "Sit amet, consectetur camion adipisicing elit. Nam minima alias voluptatem repeus voluptate facere comodi nobis laudantium aperiam nemo doloribus neque mollitia perferendis reiciendis eos, hic ducimus error totam"
    },
    {
    photo: "img/person-2.jpg",
    nom: "Pierrick Rousseau",
    profession: "Web Developer",
    para: "Itetur camion adipisicing elit. Nam minima alias voluptatem repeus voluptate facere eque mollitia perferendis reiciendis eos, hic ducimus error totam"
    },
    {
    photo: "img/person-3.jpg",
    nom: "Thomas Cellier",
    profession: "Photographe",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam minima alias voluptatem repellendus voluptate facere commodi nobis laudantium aperiam nemo doloribus neque mollitia perferendis reiciendis eos, hic ducimus error totam"
    },
    {
    photo: "img/person-4.jpg",
    nom: "Frédéric Pichard",
    profession: "Camionneur",
    para: "Consectetur adipisicing elit. Nam minima alias voluptatem repellendus voluptate facere commodi nobis laudantium aperiam nemo doloribus neque mollitia perferendis reiciendis eos, hic ducimus error tot maisonm voitures voyage"
    }
]

var arr = document.getElementById('arr');
var ava = document.getElementById('ava');
var random = document.getElementById('randomizer');
var photos = document.querySelector('img');
var champNom = document.querySelector('h2');
var champProf = document.querySelector('h3');
var champText = document.querySelector('p');

var counter = 0;

function afficheur() {
    /*photos.src = 'img/person-2.jpg';  Alternative*/
    photos.setAttribute('src', perso[counter]["photo"]);
    champNom.textContent = perso[counter]["nom"];
    champProf.textContent = perso[counter]["profession"];
    champText.textContent = perso[counter]["para"];
}

ava.addEventListener('click', () => {
    counter++;
    if (counter > perso.length - 1) {
        counter = 0;
    }
    
    afficheur();
});

arr.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = perso.length - 1;
    }

    afficheur();
});

/*-------------RANDOMIZER---------------------------*/
function generator() {
    var gener = Math.floor(Math.random() * perso.length);
    return gener;
};

random.addEventListener('click', function start() {
    
    var num = generator(); /*--- genere un chiffre grace à la fonction generator*/
    
    if (num === counter) {
        start()
    } else {
        counter = num;
        afficheur();
    }
})

