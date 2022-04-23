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
//tableau de mon dé de base
de = [1, 2, 3, 4, 5, 6];
console.log('mon tableau de dé '+ de); 

//**************************  FUNCTION QUI RANDOMIZE MON TABLEAU DE BASE************* */
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
let round1 = [];
//variable de1 qui contient la valeur des lancers du joueur 1
console.log('valeur de1[1] avant random:'+de[1]);

//****************************FONCTION POUR BOUTON ROLLDICE1*****************
// au clique sur mon rolldice je lance le dé et stock sa valeur dans un tableau round1
lancer1.onclick = function resultats(){
  for (k = 0; k <5; k++);
  de = randomize(de);
      console.warn('tableau aléatoire', de);
      console.log('valeur de[1] après random:'+ de[1]);

/*********************************CONDITION DE VALEUR ENTRE 1 ET 6*********************** */
  if (de[1] >1 && de[1]<7){
//alors je push la valeur de de[1] dans mon nouveau tableau rounds
round1.push(de[1]++);  
//et je donne mon tableau  apres avoir ajouter mes [1]
            console.log('valeur round1 actuelle après ajout des valeur:'+ (round1));

// je parcour mon tableau round1
  for(l = 0; l< 5; l++);
    
  let sumWithInitialValue1 = round1.reduce(
          (previousValue , currentValue) => previousValue + currentValue);
          console.log('somme de mon tableau round1 :' +sumWithInitialValue1);
        //affiche la somme sur ma page
        message1.innerHTML = sumWithInitialValue1;
    }
      else {

 //sinon je donne ma valeur de rounds sans ajout
            console.log('tu as eu 1 alors tu passes ton tour !')}};


//*****************NOUVEAU TABLEAU GLOBAL1 VIDE OU ON METTRA LES ROUND1****************
let global1 =[];
let sumWithInitial1;
//fonction qui envoie le score round1 dans le global si on clique sur hold
recup1.onclick = function (){
round1OnGlobal1();
winer
//parcour du tableau des valeurs de round1
      for (m = 0; m < 5; m++);
      message1.innerHTML = '0';
//creation du tableau global1 avec le total des round1
      global1.push(round1);
      
      console.log('affichage de mon tableau global1 :' + global1);};


//********************FORMULE POUR AJOUTER LES VALEUR DES ROUNDS DANS MON GLOBAL1***********/
function round1OnGlobal1(){
resultGlobal1 = round1.reduce(
//valeur de la somme de mon round2 + valeur courante de mon] , valeur de mon resultGlobal1
         (previousValue , currentValue) => previousValue + currentValue);
         console.log(resultGlobal1)

         //reset du tableau round1
round1.splice(0,round1.length);
        
//On change le dom avec la valeur de global
  messageglobal1.innerHTML = resultGlobal1;}
//tant que ma fonction est cliquée alors on met 0 en valeur dans le dom et 
//on reinitialise le tableau à 0
       if(recup1.onclick){
        message1.innerHTML = '0';
        round1.splice(0,round1.length);
             }
       else{
        recup1 === indefinded
       }
          console.log('tableau vide'+ round1); 


//****************************FONCTION POUR BOUTON ROLLDICE2*****************
//Nouveau tableau round2 vide
  let round2 = [];
  
  
//fonction lancer  et somme des round2 et reset pour le joueur 2
    lancer2.onclick = function resultats(){
      for (n = 0; n <5; n++);
      de = randomize(de);
          console.warn('tableau aléatoire', de);
          console.log('valeur de[1] après random:'+ de[2]);
          
// si ma valeur de [1]est supérieure à 1
  if (de[2] >1 && de[2]<7){
          
//alors je push la valeur de de[1] dans mon nouveau tableau rounds
      round2.push(de[2]); 
      additionRound2();}
      else {
        //sinon je donne ma valeur de round2 sans ajouter
                    console.log('tu as eu 1 alors tu passes ton tour !');
                };

//et je log mon tableau  apres avoir ajouter mes [2]
        console.log('valeur round2 actuelle après ajout des valeur:'+ round2);


////********************FORMULE POUR AJOUTER LES VALEUR DES ROUNDS DANS MON GLOBAL***********/
function additionRound2() {

  resultRound2 = round2.reduce(
  (previousValue, currentValue) => resultRound2 + de[2]);
            console.log('somme de mon tableau round2 :' + resultRound2);

//affiche la somme des round2 sur ma page
        message2.innerHTML = resultRound2;
      }
      }
 
 
//************************NOUVEAU TABLEAU GLOBAL2 DE TOUS LES ROUNDS****************
//tableau global2 pour accumuler les rounds
//creation du tableau global2 avec le valeurs de round2
// ajout des valeurs du round2 dans me global2

  let global2 = [];
  
  global2.push(sumWithInitial1);
  console.log('tableau global2 avec nouvelle valeurs: ' + global2);

//*******************************APPEL DE MA FUNCTION RESULTGLOBAL2**************/
  recup2.onclick = function (){
 roundOnglobal2();
 winer();

 round2.splice(0,round2.length)
      console.log('tableau vide '+ round2)
 messageglobal2.innerHTML = resultGlobal2;

//************************FORMULE ROUND2 DANS GLOBAL2**********************************/

function roundOnglobal2(){
  resultGlobal2 =  round2.reduce(
             (previousValue , currentValue) => previousValue + currentValue);
           console.log('somme resultGlobal2: ' + resultGlobal2)
          return resultGlobal2;
        }
          
            

//affiche somme finale du global2 dans mon dom
            messageglobal2.innerHTML = resultGlobal2;
//reset du round2
      //let resetRound2 = round2;
      round2.splice(0,round2.length)
      console.log('tableau vide round2 '+ round2)
      
//message qui reset le chiffre du dom à 0 pour le round
            message2.innerHTML ='0';

//si  ma valeur totale de globale < 100 alors on met reset le tableau des rounds des 2 joueurs 
//et on continue sinon on met un message 'tu as gagné'   
  function winer(){ 
  if(sumWithInitial1 === 100){
    alert('tu as gagné !!😄');};
      console.log('Valeurs de round2 ' + round2);};};


/***************************FUNCTION POUR MES IMAGES DE VALEUR de[1]************************** */

const faceDice = de[1];
console.log('faceDice' + faceDice);

swith (de[1])

