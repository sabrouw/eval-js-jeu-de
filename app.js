//************************************REGLES DU JEU*******************************************
//Je veux un jeu avec 2 joueurs qui jouerons avec un dé
//je veux lancer le dé qui me donnera des valeurs entre 1 et 6
//si la valeur est 1 je passe mon tour
//sinon je peux relancer le dé.

//mon score global démarre à 0 
//on lui ajoute le résultat des lancers de dé au fur et à mesure en cliquant sur hold
//tant qu'aucun score global n'est égal à 100 alors le jeu continue
//sinon le joueur qui a 100 à gagné

//***************************VARIABLES UTILES***************************************
//variable lancer 1 pour joueur1
const lancer1 = document.getElementById('roll1');
//variable lancer2 pour joueur2
const lancer2 = document.getElementById('roll2');
const recup1 = document.getElementById('hold1');
const recup2 = document.getElementById('hold2');
let de;



//*******************************TABLEAU DE 1 A 6************************************* 
//fonction de tri aleatoire du tableau des valeurs de dé
//tableau de mon dé
de = [1, 2, 3, 4, 5, 6];
console.log('mon tableau de dé '+ de); 
//function qui randomize
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
//*******************************TABLEAU ROUND VIDE************************************ 
//tableau rounds vide
let round1 = [];
//variable de1 qui contient la valeur des lancers du joueur 1
console.log('valeur de1[1] avant random:'+de[1]);


//****************************FONCTION POUR BOUTON ROLLDICE1*****************
// au clique sur mon rolldice je lance le dé et stock sa valeur dans un tableau rounds
lancer1.onclick = function(){
  for (k = 0; k <5; k++);
  de = randomize(de);
      console.warn('tableau aléatoire', de);
      console.log('valeur de[1] après random:'+ de[1]);

// si ma valeur de [1]est supérieure à 1 et inférieure à 7
  if (de[1] >1 && de[1]<7){
//alors je push la valeur de de[1] dans mon nouveau tableau rounds
round1.push(de[1]++);  
//et je donne mon tableau  apres avoir ajouter mes [1]
            console.log('valeur rounds actuelle après ajout des valeur:'+ (round1));

// je parcour mon tableau rounds
  for(l = 0; l< 5; l++);
    
  let sumWithInitialValue1 = round1.reduce(
          (previousValue , currentValue) => previousValue + currentValue);
          console.log('somme de mon tableau round1 :' +sumWithInitialValue1);
        //affiche la somme sur ma page
        message1.innerHTML = sumWithInitialValue1;
    }
      else {

 //sinon je donne ma valeur de rounds sans ajout
            alert('tu as eu 1 alors tu passes ton tour !')}};


//*****************NOUVEAU TABLEAU GLOBAL1 VIDE OU ON METTRA LES ROUND1****************
let global1 = [];

//fonction qui envoie le score round dans le global si on clique sur hold
recup1.onclick = function roundOnGlobal(){

//parcour du tableau des valeurs de round1
      for (m = 0; m < 5; m++);

//creation du tableau global1 avec le total des round1
      global1.push(round1);
      console.log('affichage de mon tableau global1 :' + global1);


//********************FORMULE POUR AJOUTER LES VALEUR DES ROUNDS DANS MON GLOBAL1***********/
  let sumWithGlobaleInitialValue1 = round1.reduce(

//valeur de la somme de mon round2 + valeur courante de mon] , valeur de mon sumWithValue1
         (previousValue , currentValue) => previousValue + currentValue);
           console.log('somme de mon tableau round1 :' +sumWithGlobaleInitialValue1);
          console.log('mon tableau global1 :'+global1);

//On change le dom avec la valeur de global
  messageglobal1.innerHTML = sumWithGlobaleInitialValue1;
//tant que ma fonction est cliquée alors on met 0 en valeur dans le dom et 
//on reinitialise le tableau à 0
       while(recup1.onclick){
        message1.innerHTML = '0';
        round1 = []; 
          return global1;
       };


          console.log('tableau vide'+ round1); 
  };


//****************************FONCTION POUR BOUTON ROLLDICE2*****************
//Nouveau tableau round2 vide
  let round2 = [];
  let sumWithInitial;
//fonction lancer  et somme des round2 et reset pour le joueur 2
    lancer2.onclick = function(){
      for (n = 0; n <5; n++);
      de = randomize(de);
          console.warn('tableau aléatoire', de);
          console.log('valeur de[1] après random:'+ de[2]);
          
// si ma valeur de [1]est supérieure à 1
  if (de[2] >1 && de[2]<7){
          
//alors je push la valeur de de[1] dans mon nouveau tableau rounds
      round2.push(de[2]);  
      

//et je log mon tableau  apres avoir ajouter mes [2]
        console.log('valeur round2 actuelle après ajout des valeur:'+ (round2));


////********************FORMULE POUR AJOUTER LES VALEUR DES ROUNDS DANS MON GLOBAL***********/
//addition de ma valeur totale de mon round2 et la valeur actuelle du clique round2
const initialValue = 0;
sumWithInitial1 = round2.reduce(
  (previousValue, currentValue) => sumWithInitial1 + de[2]);
            console.log('somme de mon tableau round2 :' + sumWithInitial1);

//affiche la somme des round2 sur ma page
        message2.innerHTML = sumWithInitial1;
      }
      else {

//sinon je donne ma valeur de rounds sans ajouter
            alert('tu as eu 1 alors tu passes ton tour !');
        };

let sumwithinital1 =[];

let global2 = []; 
let sum = 0;
//   boucle pour ajouter les valeur sumwithinial1 dans le global
console.log('mon global2: ' + global2)
for( let u = 0; u <global2; u++){
sum
}
global2.push(sumWithInitial1);  
console.log('tableau sumwithinital1 dans global2: ' + global2);   

//************************NOUVEAU TABLEAU GLOBAL2 DE TOUS LES ROUNDS****************

//tableau global2 pour accumuler les rounds

//fonction  bouton ***hold2*** cliquer envoie le somme des round2 dans le tableau du global2 
  recup2.onclick = function (){
//  creation du tableau global2 avec le valeurs de round2


    //************************FORMULE SOMME GLOBAL2**********************************/
//tableau vide
let tableauVide =[0];

//formule reduce pour cumuller les round2 dans le global2
//Montableau = (function(accumulator, caleurcourrante, index, array)){return accumulator +valeurcourante;});
  sumWithInitial2 = global2.reduce(function(sumWithInitial1, sumWithInitial2) {
    return sumWithInitial1 + sumWithInitial2});

//valeur precedente = lui meme, valeur courante = valeur de global2 => valeur precedente + valeur courante
//global2 contient les valeurs accumulé de tous les round2
           //(previousValue,  currentValue, initialValue) => sumWithInitial1 + sumWithInitial1);
           // 
           // console.log('mon tableau global2 :'+ sumWithInitial2);
           // global2.push(sumWithInitial2);
           // console.log('dernier tableau ' +global2)

//affiche somme finale du global2 dans mon dom
            messageglobal2.innerHTML = sumWithInitial2;





//reset du round2
      //let resetRound2 = round2;
      round2.splice(0,round2.length)
      console.log('tableau vide '+ round2)
      
//message qui reset le chiffre du dom à 0 pour le round
            message2.innerHTML ='0';

//si  ma valeur totale de globale < 100 alors on met reset le tableau des rounds et on continue sinon message tu as gagné   
  if(sumWithInitial2 === 100){
    alert('tu as gagné !!😄');};
      console.log('Valeurs de round2 ' + round2);};};