//je veux lancer un dé qui me donnera des valeurs entre 1 et 6
//si la valeur est 1 je passe mon tour
//sinon je peux relancer le dé.

//mon score global démarre à 0 
//on lui ajoute le résultat des lancers de dé au fur et à mesure
//tant que aucun score global n'est égal à 100 alors le jeu continue
//sinon le joueur qui a 100 à gagné

//toutes mes variable seront des nombres entier
//variable lancer 1 pour joueur1
let lancer1 = document.getElementById('roll1');
//variable lancer2 pour joueur2
let lancer2 = document.getElementById('roll2');
let recup1 = document.getElementById('hold1');
let recup2 = document.getElementById('hold2');
let de;

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
  
//tableau rounds vide
let round1 = [];
//variable de1 qui contient la valeur des lancers du joueur 1
console.log('valeur de1[1] avant random:'+de[1]);


// au clique sur mon rolldice je lance le dé et stock sa valeur dans un tableau rounds
lancer1.onclick = function(){
  for (i = 0; i <5; i++);
  de = randomize(de);
      console.warn('tableau aléatoire', de);
      console.log('valeur de[1] après random:'+ de[1]);
// si ma valeur de [1]est supérieure à 1
  if (de[1] >1 && de[1]<7){
//alors je push la valeur de de[1] dans mon nouveau tableau rounds
round1.push(de[1]++);  
//et je donne mon tableau  apres avoir ajouter mes [1]
            console.log('valeur rounds actuelle après ajout des valeur:'+ (round1));
// je parcour mon tableau rounds
  for(i = 0; i< 5; i++);
    
  let sumWithInitialValue1 = round1.reduce(
          (previousValue , currentValue) => previousValue + currentValue);
          console.log('somme de mon tableau round1 :' +sumWithInitialValue1);
        //affiche la somme sur ma page
        message1.innerHTML = sumWithInitialValue1;
    }
      else {
//sinon je donne ma valeur de rounds sans ajout
            console.log('valeur rounds actuelle si valeur du lancer = 1:'+ (round1))}};


//nouveau tableau global avec le total de tous les global
let global1 = [];
//fonction qui envoie le score round dans le global si on clique sur hold
recup1.onclick = function roundOnGlobal(){
//parcour du tableau des valeurs de round1
      for (i = 0; i < 5; i++);
//creation du tableau global1 avec le total des round1
      global1.push(round1);
      console.log('affichage de mon tableau global1 :' + global1);

//la formule pour ajouter toutes les valeurs au score global1


//la variable ou on stock la formule reduce pour la somme des valeur du tableau round1
  let sumWithGlobaleInitialValue1 = round1.reduce(
//valeur precedente, valeur courante => valeur precedente + valeur courante, valeur initiale
         (previousValue , currentValue) => previousValue + currentValue);
           console.log('somme de mon tableau round1 :' +sumWithGlobaleInitialValue1);
          console.log('mon tableau global1 :'+global1);
  //On change le dom avec la valeur de global
  messageglobal1.innerHTML = sumWithGlobaleInitialValue1;
  //tant que ma fonction est cliquée alors on met 0 en valeur dans le dom et on reinitialise le tableau à 0
       while(roundOnGlobal){
        message1.innerHTML = '0';
        round1 = []; 
          return global1;
       };
//reset le tableau round1
          console.log('tableau vide'+ round1); 
  };
//fonction lancer somme et reset pour le joueur 2
  let round2 = [];
    lancer2.onclick = function(){
      for (i = 0; i <= de.length; i++);
      de = randomize(de);
          console.warn('tableau aléatoire', de);
          console.log('valeur de[1] après random:'+ de[2]);
          // si ma valeur de [1]est supérieure à 1
  if (de[2] >1 && de[2]<7){
          
//alors je push la valeur de de[1] dans mon nouveau tableau rounds
  round2.push(de[2]++);  
//et je log mon tableau  apres avoir ajouter mes [2]
        console.log('valeur round2 actuelle après ajout des valeur:'+ (round2));
// je parcour mon tableau rounds
  for(i = 0; i< 5; i++); 
  
  let sumWithInitialValue2 = round2.reduce(
      (previousValue , currentValue) => previousValue + currentValue, 0);
            console.log('somme de mon tableau round2 :' +sumWithInitialValue2);
//affiche la somme sur ma page
        message2.innerHTML = sumWithInitialValue2;
      }
      else {
//sinon je donne ma valeur de rounds sans ajout
            console.log('valeur rounds actuelle si on ajoute pas:'+ (round2));
        }};
//tableau global2 accumuler les rounds
  let global2 = [];
//fonction qui envoie le score round dans le global si on clique sur hold
  recup2.onclick = function (){
//parcour du tableau des valeurs de round1
    for (i = 0; i <5; i++);
//creation du tableau global1 avec le total des round1
    global2.push(round2);
              console.log('affichage de mon tableau global2 :' + global2);
//la formule pour ajouter toutes les valeurs au score global1
       
  let sumWithGlobaleInitialValue2 = round2.reduce(
                 (previousValue , currentValue) => previousValue + currentValue);
                 console.log('somme de mon tableau round2 :' +sumWithGlobaleInitialValue2);
                console.log('mon tableau global2 :'+global2);
          messageglobal2.innerHTML = sumWithGlobaleInitialValue2;          
          
//reset le tableau round dans le dom    
          message2.innerHTML = '0';
                        console.log('tableau vide'+ round2);

    while (sumWithGlobaleInitialValue2<100)
  {
              console.log('tu peux continuer de jouer');
            sumGlobalInitialeValue2++;
  }};