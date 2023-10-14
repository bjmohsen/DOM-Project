var qntt=1; 
var prix= 10;

//fonction calculer le nomber de click btn + et affichier dans leur case

function compteur() {

    qntt++; 
    document.getElementById("qnt").value= qntt;
    document.getElementById("prix").value=qntt*prix ;  
}
document.getElementById("plus").addEventListener("click",compteur); // appel fonction compteur 

//fonction calculer le nomber de click btn - et affichier dans leur case

function compteurM(){
    if (qntt >1) { //condtion d'arret
        qntt--;
        document.getElementById("qnt").value=qntt;
        document.getElementById("prix").value=qntt*prix ; 
    } 
    else {
        alert ("a9al 7aja 1") //msg condtion d'arret
    }
}
document.getElementById("moin").addEventListener("click",compteurM); //app fonction

// les fonction de 2eme articl
var qntt1=1;
var prix1= 25;
function compteur1() {
    qntt1++;
    document.getElementById("qnt1").value=qntt1; 
    document.getElementById("prix1").value=qntt1*prix1 ;  
}
document.getElementById("plus1").addEventListener("click", compteur1);
function compteurM1(){
    if (qntt1 >0) {
        qntt1--;
        document.getElementById("qnt1").value=qntt1;
        document.getElementById("prix1").value=qntt1*prix1 ; 
    } 
    else {
        alert ("a9al 7aja 1")
    }
}
document.getElementById("moin1").addEventListener("click",compteurM1);
//fontion de 3emm articl
var qntt2=1;
var prix2= 30;
function compteur2() {
    qntt2++;
    document.getElementById("qnt2").value=qntt2; 
    document.getElementById("prix2").value=qntt2*prix2 ;  
}
document.getElementById("plus2").addEventListener("click", compteur2);
function compteurM2(){
    if (qntt2 >0) {
        qntt2--;
        document.getElementById("qnt2").value=qntt2;
        document.getElementById("prix2").value=qntt2*prix2 ; 
    } 
    else {
        alert ("a9al 7aja 1")
    }
}
document.getElementById("moin2").addEventListener("click",compteurM2);



//en utilise "removechild"  pour suprime le article
function delet() {
    var parentElem = document.getElementById('main');
     var childElem = document.getElementById('articl');
     parentElem.removeChild(childElem);
}
function delet1() {
    var parentElem = document.getElementById('main');
     var childElem = document.getElementById('articl1');
     parentElem.removeChild(childElem);
}
function delet2() {
    var parentElem = document.getElementById('main');
     var childElem = document.getElementById('articl2');
     parentElem.removeChild(childElem);
}