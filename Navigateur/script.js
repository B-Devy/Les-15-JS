
var navi = document.querySelector('nav');
var hamburger = document.getElementById('hamburger');
var header = document.querySelector('header');

var faceb = document.getElementById('faceb');
var twit = document.getElementById('twit');
var linke = document.getElementById('linke');
var pint = document.getElementById('pint');
var diam = document.getElementById('diam');

var favicos = [faceb, twit, linke, pint, diam];
/*
https://www.tech-wiki.online/fr/how-to-add-event-listener-multiple-elements-javascript.html
*/
faceb.addEventListener('mouseover', () => faceb.style.opacity = 0.5);
faceb.addEventListener('mouseout', () => faceb.style.opacity = 1);

twit.addEventListener('mouseover', () => twit.style.opacity = 0.5);
twit.addEventListener('mouseout', () => twit.style.opacity = 1);

linke.addEventListener('mouseover', () => linke.style.opacity = 0.5);
linke.addEventListener('mouseout', () => linke.style.opacity = 1);

pint.addEventListener('mouseover', () => pint.style.opacity = 0.5);
pint.addEventListener('mouseout', () => pint.style.opacity = 1);

diam.addEventListener('mouseover', () => diam.style.opacity = 0.5);
diam.addEventListener('mouseout', () => diam.style.opacity = 1);

hamburger.addEventListener('click', () => {
    var boolean = navi.classList.toggle('closed');
    header.classList.toggle('ombrage');
    
    
});
/*
setAttribute('style','display:none;')}*/