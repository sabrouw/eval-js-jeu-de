//déclaration de variable utiles
let hold = document.getElementById('hold');
hold;
let round = document.getElementById('round');
round;

//bouton rolldice pour lancer le dé et donne un nombre aléatoire entre 1 et 6
let rolldice = document.getElementById('roll');
rolldice.onclick = function getRandomIntInclusive(min, max) {
      min = Math.ceil(1);
     max = Math.floor(6);     
     console.log(Math.floor(Math.random() * (max - min +1)) + min);}



//variable de déclaration du score global et son appel
let global = document.getElementById('global');
global;

//quand on clique sur hold ca ajouter rolldice au score global
hold.onclick = function(){
     console.log(global);
      return global +++ rolldice;}


;


     //if (getRandomIntInclusive >= 2 && getRandomIntInclusive <= 6){
     // global === true;
     //}

     
     //let global;
     //function global()
     //{rolldice =+ getRandomIntInclusive

     //}

//si le player1 est = a true 
//alors  rolldice = true

$(document).ready(function(){
     alert('jquery est bien chargé');
}


    




    
      
    
      
      

//nouvelle partie avec le player1 en premier
//let newgame = document.getElementById('player1');
//while 
//
//donne un nombre aléatoire de 1 à 6 pour le dé
//le nombre aléatoire est attribué à la variable rolldice



//round est réinitialisé si rounds = 1


//if (rounds >= 2 && rounds <= 6 ) {
//    console.log(rounds);}
//else(rounds === 0);
//
////addition de tous les rounds obtenus et les envoyer dans le global
//function additionRandom1(){
//}

//si le player1 joue alors le player 2 ne joue pas
//if (player1 === true){getRandomIntInclusive();}
//    else (player2 === true);













