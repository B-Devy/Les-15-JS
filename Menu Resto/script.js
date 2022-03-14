const tab = [
    {
        name: "Buttermilk Pancakes",
        prix: "$15.99",
        texte: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        sorte: "petitdej",
        image: "img/item-1.jpg"
    },
    {
        name: "Diner Double",
        prix: "$12.99",
        texte: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        sorte: "dej",
        image: "img/item-2.jpg"
    },
    {
        name: "Godzilla Milkshake",
        prix: "$6.99",
        texte: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        sorte: "shaker",
        image: "img/item-3.jpg"
    },
    {
        name: "Country Delight",
        prix: "$20.99",
        texte: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        sorte: "petitdej",
        image: "img/item-4.jpg"
    },
    {
        name: "Egg Attack",
        prix: "$22.99",
        texte: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        sorte: "dej",
        image: "img/item-5.jpg"
    },
    {
        name: "Oreo Dream",
        prix: "$18.99",
        texte: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        sorte: "shaker",
        image: "img/item-6.jpg"
    },
    {
        name: "Bacon Overflow",
        prix: "$8.99",
        texte: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        sorte: "dej",
        image: "img/item-7.jpg"
    },
    {
        name: "American Classic",
        prix: "$12.99",
        texte: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        sorte: "dej",
        image: "img/item-8.jpg"
    },
    {
        name: "Quarantine Buddy",
        prix: "$16.99",
        texte: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        sorte: "shaker",
        image: "img/item-9.jpg"
    },
    {
        name: "Steak Dinner",
        prix: "$39.99",
        texte: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        sorte: "diner",
        image: "img/item-10.jpg"
    }
]

var tout = document.getElementById('tout');
var petitdej = document.getElementById('petitdej');
var dej = document.getElementById('dej');
var shaker = document.getElementById('shaker');
var diner = document.getElementById('diner');

var section = document.querySelector('section');

//-------------------ALL-------------------------------------
function debut() {
    section.innerHTML = '<div><div/>';
    for (var i = 0; i < tab.length; i++) {
            var formule = `<div class="cadre"><div class="photo"><img src="${tab[i]["image"]}" alt=""></div><article><div class="titre"><div><h2>${tab[i]["name"]}</h2></div> <div><h3>${tab[i]["prix"]}</h3></div></div><div class="interligne"></div><div class="para"><p>${tab[i]["texte"]}</p></div></article></div>`
            section.innerHTML += formule;
    }
};

debut();

tout.addEventListener('click', debut);
//-----------------PETIT DEJ----------------------------

petitdej.addEventListener('click', () => {

    const newTab = tab.filter( (obj) => obj.sorte == "petitdej" );
    section.innerHTML = '<div><div/>';
       
       for (var i = 0; i < newTab.length; i++) {

            var formule = `<div class="cadre"><div class="photo"><img src="${newTab[i]["image"]}" alt=""></div><article><div class="titre"><div><h2>${newTab[i]["name"]}</h2></div> <div><h3>${newTab[i]["prix"]}</h3></div></div><div class="interligne"></div><div class="para"><p>${newTab[i]["texte"]}</p></div></article></div>`
            section.innerHTML += formule;
    }
})

//------------------------------MIDI------------------------
dej.addEventListener('click', () => {

    const newTab = tab.filter( (obj) => obj.sorte == "dej" );
    section.innerHTML = '<div><div/>';
       
       for (var i = 0; i < newTab.length; i++) {

            var formule = `<div class="cadre"><div class="photo"><img src="${newTab[i]["image"]}" alt=""></div><article><div class="titre"><div><h2>${newTab[i]["name"]}</h2></div> <div><h3>${newTab[i]["prix"]}</h3></div></div><div class="interligne"></div><div class="para"><p>${newTab[i]["texte"]}</p></div></article></div>`
            section.innerHTML += formule;
    }
})

//------------------------------SHAKER------------------------
shaker.addEventListener('click', () => {

    const newTab = tab.filter( (obj) => obj.sorte == "shaker" );
    section.innerHTML = '<div><div/>';
       
       for (var i = 0; i < newTab.length; i++) {

            var formule = `<div class="cadre"><div class="photo"><img src="${newTab[i]["image"]}" alt=""></div><article><div class="titre"><div><h2>${newTab[i]["name"]}</h2></div> <div><h3>${newTab[i]["prix"]}</h3></div></div><div class="interligne"></div><div class="para"><p>${newTab[i]["texte"]}</p></div></article></div>`
            section.innerHTML += formule;
    }
})

//------------------------------DINER------------------------
diner.addEventListener('click', () => {

    const newTab = tab.filter( (obj) => obj.sorte == "diner" );
    section.innerHTML = '<div><div/>';
       
       for (var i = 0; i < newTab.length; i++) {

            var formule = `<div class="cadre"><div class="photo"><img src="${newTab[i]["image"]}" alt=""></div><article><div class="titre"><div><h2>${newTab[i]["name"]}</h2></div> <div><h3>${newTab[i]["prix"]}</h3></div></div><div class="interligne"></div><div class="para"><p>${newTab[i]["texte"]}</p></div></article></div>`
            section.innerHTML += formule;
    }
})

//---------------A RESOUDRE ULTERIEUREMENT-----------------------------------------
/*
const boutons = [petitdej, dej, shaker, diner];

boutons.forEach((e) => {

    e.addEventListener('click', () => {
        const newTab = tab.filter( (obj) => {obj.sorte == /*"petitdej"});

        section.innerHTML = '<div><div/>';
           
           for (var i = 0; i < newTab.length; i++) {
    
                var formule = `<div class="cadre"><div class="photo"><img src="${newTab[i]["image"]}" alt=""></div><article><div class="titre"><div><h2>${newTab[i]["name"]}</h2></div> <div><h3>${newTab[i]["prix"]}</h3></div></div><div class="interligne"></div><div class="para"><p>${newTab[i]["texte"]}</p></div></article></div>`
                console.log(formule);
                section.innerHTML += formule;
        }
    })
})
*/











