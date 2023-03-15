let AC = document.getElementById("AC")
let DEL = document.getElementById("DEL")
let virgule = document.getElementById("virgule")
let diviser = document.getElementById("diviser")
let sept = document.getElementById("sept")
let huit = document.getElementById("huit")
let neuf = document.getElementById("neuf")
let multiplier = document.getElementById("multiplier")
let quatre = document.getElementById("quatre")
let cinq = document.getElementById("cinq")
let six = document.getElementById("six")
let moins = document.getElementById("moins")
let un = document.getElementById("un")
let deux = document.getElementById("deux")
let trois = document.getElementById("trois")
let plus = document.getElementById("plus")
let cent = document.getElementById("cent")
let zero = document.getElementById("zero")
let egal = document.getElementById("egal")
let affichage = document.getElementById("affichage")
let affichageCalcul = document.getElementById("affichage_calcul")


AC.addEventListener('click', event => {
  affichage.value = '';
  affichageCalcul.value = '';
});

DEL.addEventListener('click', event => {
    affichage.value = affichage.value.slice(0, -1);
});

virgule.addEventListener('click', event => {
    affichage.value += '.';
});

diviser.addEventListener('click', event => {
    affichage.value += '/';
});

sept.addEventListener('click', event => {
    affichage.value += '7';
});

huit.addEventListener('click', event => {
    affichage.value += '8';
});

neuf.addEventListener('click', event => {
    affichage.value += '9';
});

multiplier.addEventListener('click', event => {
    affichage.value += '*';
});

quatre.addEventListener('click', event => {
    affichage.value += '4';
});

cinq.addEventListener('click', event => {
    affichage.value += '5';
});

six.addEventListener('click', event => {
    affichage.value += '6';
});

moins.addEventListener('click', event => {
    affichage.value += '-';
});

un.addEventListener('click', event => {
    affichage.value += '1';
});

deux.addEventListener('click', event => {
    affichage.value += '2';
});

trois.addEventListener('click', event => {
    affichage.value += '3';
});

plus.addEventListener('click', event => {
    affichage.value += '+';
});

cent.addEventListener('click', event => {
    affichage.value += '00';
});

zero.addEventListener('click', event => {
    affichage.value += '0';
});

egal.addEventListener('click', event => {
    if(affichage.value.length === 0){
        affichage.value = ''
    }else{
        affichageCalcul.value = affichage.value
        affichage.value = eval(affichage.value);
    }
});