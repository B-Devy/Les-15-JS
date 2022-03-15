var navi2 = document.getElementById('navi2');


window.addEventListener('scroll', () => {
    var marqueur = window.scrollY;
    //console.log(marqueur);
    
    if (marqueur < 100) {
        navi2.style.top = "-150px";
    } else {
        navi2.style.top = "0";
    }
})