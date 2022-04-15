//je veux lancer un dé qui me donnera des valeurs entre 1 et 6
//si la valeur est 1 je passe mon tour
//sinon je peux relancer le dé.

//mon score global démarre à 0 
//on lui ajoute le résultat des lancers de dé au fur et à mesure
//tant que aucun score global n'est égal à 100 alors le jeu continue
//sinon le joueur qui a 100 à gagné

//toutes mes variable seront des nombres entier
//
//variable lancer 1 pour joueur1
let lancer1 = document.getElementById('roll1');
//variable lancer2 pour joueur2
let lancer2 = document.getElementById('roll2');
let recup1 = document.getElementById('hold1');
let recup2 = document.getElementById('hold2');
let de;
let global1 = 0;
let global2 = 0;

let rounds;
//fonction de tri aleatoire du tableau des valeurs de dé
de = [1, 2, 3, 4, 5, 6];
console.log('mon tableau de dé '+ de); 
function randomize(de) {
  var i, j, tmp;
  for (i = de.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = de[i];
      de[i] = de[j];
      de[j] = tmp;
  }
  return de;
  
}
de = randomize(de);
console.warn('tableau aléatoire', de);
for (i = 0; i <= de.length; i++);
console.log(de)

console.log('mon lancer1 1 ere valeur'+ ':' + de[1]);


lancer2.addEventListener('click', de);
console.log('mon lancer2 2 eme valeur'+ ':' + de[2]);


global1 =[];
//tableau vide pour ajouter les valeurs des lancers
global1 = de.map(function  ajouter1(global1, de){
//quand je clique sur hold j'envoie mes score de de[1] dans global1
    recup1.addEventListener('click', function recup(){
  de[1] === global1;});};)
  



  






//nouveau tableau des valeur de dé aleatoire qui placera les rounds










//const iterator1 = de.entries(3);
//console.log(iterator1.next(3).value);

//ajout au global
//si mon score est supérieur à 1 alors il s'ajoute au round
//if (de >1){
//  de ++ global1;
//}



////variable pour le score courant des joueurs1 et joueur 2 round
//let scoreJoueur1 = document.getElementById('round1');
//let scoreJoueur2 = document.getElementById('round2');
//let global2 = document.getElementById('global2');
//let global1 = document.getElementById('gobal1')
//
////tableauDesScores pour aller chercher les valeurs et les aditionner au global
////let tableauDesScores = [scoreJoueur1, scoreJoueur2, global1, global2]
////console.log(tableauDesScores)
//
////variable pour lancer de dé joueur 1
//let lancer1 = document.getElementById('roll1');
////clique sur le bouton rolld1 pour lancer le dé
//
//            console.log(lancers1.resultat);
//
////variable pour le message "tu peux rejouer"
//let message1 = document.getElementById('message1');
//
////lancer de dé : déclaration de fonction pour générer un nombre aléatoire
//function lancers1 (){
//      resultat = function getRandomIntInclusive(min, max){
//      min = Math.ceil(1);
//      max = Math.floor(6);
//      return Math.floor(Math.random() * (max - min +1)) + min;}; 
//      
////tant que resultat rst inférieur à supérieur à 1 et inférieur ou = à 6 alors ajouter resultats à résultat      
//      while (resultat > 1 && resultat <= 6) {
//            resultat + resultat + 1
//
////tant que cette condition au dessus est validée alor on change le text pour rejouer 
//          message1.innerHTML ="tu peux rejouer"}
//              console.log(lancer1);
//};
//
//scoreJoueur1 = [lancers1, global1];
//      for (let i = 0; i < scoreJoueur1.length ; i++) {
//              console.log(scoreJoueur1.lancers1);
// };
//      
////variable pour le message     
//let message2 = document.getElementById('message2');
//
////lancer de dé : déclaration de fonction pour générer un nombre aléatoire  
//let lancer2 = document.getElementById('roll2');
//
//$('#roll2').click(lancer2);   
//function lancers2(){
//      resultat = function getRandomIntInclusive(min, max){
//          min = Math.ceil(1);
//          max = Math.floor(6);
//                  console.log(getRandomIntInclusive(1, 6));
//        return Math.floor(Math.random() * (max - min + 1)) + min;
//        };
//                  console.log(resultat);                
//                  
//      while (resultat > 1 && resultat <= 6) {
//            (resultat + resultat ++);
//       message1.innerHTML ="tu peux rejouer"};
//      
//                  console.log('clicque 2 ok');
//
//          scoreJoueur2 = [lancer2, global2];
//                  console.log(scoreJoueur2[2]); 
//
//let messageglobal1 = document.getElementById('messageglobal1');
////bouton hold1 qui envoie dans le global1
//let hold1 = document.getElementById('hold1');
//$('#hold1').click(holdToGlobal1);
//
//let messageglobal2 = document.getElementById('messageglobal2');
////bouton hold2 qui envoie dans le global2
//
//let hold2 = document.getElementById('hold2');
//$('#hold2').click(holdToGlobal2);
//
////fonction qui envoie sur le global
//function holdToGlobal2(){
//      if (resultat >1 && global2 <100){
//            messageglobal2.innerHTML = "99"
//            //resultat +++ global1;
//            //global2;
//             
//                console.log(global2);
//      }
//      else{
//            messageglobal2.innerHTML = "dommage!"; 
//      }
//};
//
////condition pour gagner le jeu
//while(scoreJoueur1 <100) {console.log('refais une partie')};}