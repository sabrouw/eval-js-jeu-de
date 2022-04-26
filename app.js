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
const lancer1 = document.getElementById('roll1');
const lancer2 = document.getElementById('roll2');
const recup1 = document.getElementById('hold1');
const recup2 = document.getElementById('hold2');
let de;
let global1;
let global2;
let round1 = [];
let round2 = [];
let resultGlobal1 = 0;
let resultGlobal2 = 0;
let resultRound1;
let resultRound2;
let player1;
let player2;
let activePlayer;
let newGame = document.getElementById('newgame');

/*********************************BUTTON NEW GAME**********************************/
newGame.onclick = function resultats(){
  round1 = 0;
  round2 = 0;
  global1 = 0;
  global2 = 0;
  message1.innertext = '0';
  message2.textcontent = '0';
  messageglobal1.textcontent = '0';
  messageglobal2.textcontent = '0';
};

//*******************************TABLEAU DE 1 A 6************************************* 
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
    randomize(de);
    console.warn('tableau aléatoire' + de);
    console.log('valeur de[1] après random:'+ de[1]);
    
  
    
let de1 = de[1];
let de2 = de[2];
console.log('de1 :' + de1);
console.log('de2 :' + de2);
/*********************************CONDITION DE VALEUR ENTRE 1 ET 6*********************** */
function cond1() {
  if (de1 >1 && de1< 7){
    console.log('bravo');
  }
  else
  activePlayer == player2;
};

function cond2() {
  if (de2 >1 && de2< 7){
    console.log('bravo');
  }
  else
  activePlayer == player1;
};

/*********************************FUNCTION ACTIVE PLAYER*********************** */
function switchPlayer(){
  if (activePlayer === 'player1') {
      activePlayer = 'player2';
      console.log(`function switchPlayer : ${activePlayer}`);
  } else {
      activePlayer = 'player1';
      console.log('mon active player est : ' + activePlayer);
  }
};

/******************************CONDITION SI LE DE FAIT 1************************************ */
function DiceOne(){
  if (de1 === 1) {
      if (activePlayer === 'player1') {
          activePlayer = 'player2';
          console.log(`le joueur passe la main au ${activePlayer} grâce à la fonction looseDiceOne `);
          resultRound1 = 0;
          message1.innerHTML = resultRound1;
          resultRound2 = 0;
          message2.innerHTML= resultRound2;
      } else {
          activePlayer = 'player1';
          console.log(`le joueur passe la main au ${activePlayer} grâce à la fonction looseDiceOne`);
          resultRound2 = 0;
          message2.innerHTML = resultRound2;
          resultRound1 = 0;
          message1.innerHTML = resultRound1;
      }
  }
}
/*********************************FORMULE AJOUTER SOMME ROUND1 DANS GLOBAL1************************/
function totalRound1(){
resultRound1 = round1.reduce(
        (previousValue , currentValue) => previousValue + currentValue);
        console.log('somme de mon tableau round1 :' +resultRound1);  
        
       //j'ajoute la somme de mont tableau round1 dans ma variable global1
       global1 = [resultRound1];
       console.log('affichage global1 :' + global1);
};

/*********************************FORMULE AJOUTER SOMME ROUND1 DANS GLOBAL1************************/
function totalRound2(){
resultRound2 = round2.reduce(
        (previousValue, currentValue) => previousValue + currentValue);
        console.log('somme de mon tableau round2 :' +resultRound2);  
      
       //j'ajoute la somme de mont tableau round1 dans ma variable global1
       global2 = [resultRound2];
       console.log('affichage global2 :' + global2);
};
/*********************************FORMULE ROUND1 DANS GLOBAL1************************/
function totalGlobal1(){
  resultGlobal1 = global1.reduce(
    (resultGlobal1 , round1) => previousValue + currentValue)
    return resultGlobal1;
};
console.log("totalGlobal1 avec valeur dans parenthese: "+ resultGlobal1)
//************************FORMULE ROUND2 DANS GLOBAL2**********************************/
function totalGlobal2(){
  resultGlobal2 =  global2.reduce(
             (previousValue , currentValue) => previousValue + currentValue)
             return resultGlobal2;
                               };
     
//****************************APPEL DE MES FONCTIONS POUR BOUTON ROLLDICE1*****************
lancer1.onclick = function resultats(){
  randomize(de);
  de[1];
  console.log('function' + de[1])
  resultImage1(de[1]);
  //condition entre 1 et 6
  cond1();
  //si je fait un je passe mon tour
  DiceOne();
  //push de[1] dans round1
  round1.push(de[1]++);
  //parcour du tableau de round1
  for (k = 0; k <5; k++);
  round1;
  totalRound1();
  //affiche la somme du tableau round1 sur ma page
  message1.innerHTML = resultRound1;
  console.log('ajout des valeur dans round1:'+ round1);}
       

        //parcour de mon tableau round1
        for(m = 0; m< round1.length; m++);


//****************************APPEL DE MES FONCTIONS POUR BOUTON HOLD1*****************   
recup1.onclick = function (){
//formule pour ajouter le resultRound1 au global1 à revoir
      totalGlobal1();
      console.log('resultGlobal1 à ce niveau: ' + resultGlobal1)
      
      switchPlayer();
      //la valeur de global 1 est maintenant resultGlobal1
      messageglobal1.innerHTML = resultGlobal1;
      message1.innerHTML = '0';
      //vidange du tableau round1 de ses valeurs
      round1= [];
      console.log('valeur de round1 apres reset : ' + round1)  
    };

//****************************APPEL DE MES FONCTIONS POUR BOUTON ROLLDICE2*****************
lancer2.onclick = function resultats(){
  randomize(de);
  de[2];
  resultImage2();
   //condition entre 1 et 6
  cond2();
  //si je fait un je passe mon tour
  DiceOne();
  //push de[2] dans round2
  round2.push(de[2]++);
  //parcour du tableau de round1
  for (l = 0; l <5; l++);
  round2;
  totalRound2();
  //affiche la somme du tableau round1 sur ma page
  message2.innerHTML = resultRound2;
  console.log('ajout des valeur dans round:'+ round2);}
       
        //parcour de mon tableau round1
        for(n = 0; n< round2.length; n++);


//****************************APPEL DE MES FONCTIONS POUR BOUTON HOLD1*****************   
recup2.onclick = function (){
//formule pour ajouter le resultRound1 au global1 à revoir
      totalGlobal2();
      console.log('resultGlobal1 à ce niveau: ' + resultGlobal2);
      switchPlayer();
      //la valeur de global2 est maintenant resultGlobal2
      messageglobal2.innerHTML = resultGlobal2;
      message2.innerHTML = '0';
      //vidange du tableau round2 de ses valeurs
      round2= [];
      console.log('valeur de round1 apres reset : ' + round2)  
    };


//*********************SI UN DES JOUEURS A UN GLOBAL SUPERIEUR A 100 ALORS IL GAGNE******/   
  function winer(){ 
  if(resultGlobal1 > 100 || resultGlobal2 >100){
    alert('tu as gagné !!😄');}
    else{ 
      console.log('Valeurs de round2 ' + round2);
    }};


/***************************FUNCTION POUR MES IMAGES DE VALEUR de[1]************************** */
function resultImage1 () {
  switch (randomize(de[1])){
  case 1: 
  let myImage1 = document.createElement('img');
  myImage1.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312625_1280.png';
  document.getElementById('myImages').appendChild(myImage1).style.width= '100px';
  myImage1.transition  = 1000;
  
              console.log(myImage1);
  break;
  case 2: 
  let myImage2 = document.createElement('img');
  myImage2.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/two-310337__480.png';
  document.getElementById('myImages').appendChild(myImage2).style.width = '100px';
  
        console.log(myImage2);  
      break;
      
  case 3: 
  let myImage3 = document.createElement('img');
  myImage3.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/three-310336__480.png';
  document.getElementById('myImages').appendChild(myImage3).style.width = '100px';
    
     console.log(myImage3);
     break;
   
  case 4: 
  let myImage4 = document.createElement('img');
  myImage4.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623__480.png';
  document.getElementById('myImages').appendChild(myImage4).style.width = '100px';
 
     console.log(myImage4);
     break;
   
  case 5: 
  let myImage5 = document.createElement('img');
  myImage5.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/five-310334__480.png';
  document.getElementById('myImages').appendChild(myImage5).style.width = '100px';
  
  
      console.log(myImage5);
      break;
  case 6: let myImage6 = document.createElement('img');
  myImage6.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621__480.png';
  document.getElementById('myImages').appendChild(myImage6).style.width = '100px';
  
        console.log(myImage6);
    break;
    default:
      console.log('mais que se passe-t-il');
      break;
};};

recup2.onclick = function (){
  //formule pour ajouter le resultRound1 au global1 à revoir
        totalGlobal2();
        console.log('resultGlobal1 à ce niveau: ' + resultGlobal2);
        switchPlayer();
        //la valeur de global 1 est maintenant resultGlobal1
        messageglobal2.innerHTML = resultGlobal2;
        message2.innerHTML = '0';
        //vidange du tableau round1 de sa premiere valeur
        round2= [];
        console.log('valeur de round1 apres reset : ' + round2)  
      };
  
  /***************************FUNCTION POUR MES IMAGES DE VALEUR de[2]************************** */
  function resultImage2 () {
    switch (randomize(de[2])){
    case 1: 
    let myImage1 = document.createElement('img');
    myImage1.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312625_1280.png';
    document.getElementById('myImages').appendChild(myImage1).style.width= '100px';
    
                console.log(myImage1);
    break;
    case 2: 
    let myImage2 = document.createElement('img');
    myImage2.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/two-310337__480.png';
    document.getElementById('myImages').appendChild(myImage2).style.width = '100px';
    
          console.log(myImage2);  
        break;
        
    case 3: 
    let myImage3 = document.createElement('img');
    myImage3.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/three-310336__480.png';
    document.getElementById('myImages').appendChild(myImage3).style.width = '100px';
      
       console.log(myImage3);
       break;
     
    case 4: 
    let myImage4 = document.createElement('img');
    myImage4.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623__480.png';
    document.getElementById('myImages').appendChild(myImage4).style.width = '100px';
   
       console.log(myImage4);
       break;
     
    case 5: 
    let myImage5 = document.createElement('img');
    myImage5.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/five-310334__480.png';
    document.getElementById('myImages').appendChild(myImage5).style.width = '100px';
    
    
        console.log(myImage5);
        break;
    case 6: let myImage6 = document.createElement('img');
    myImage6.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621__480.png';
    document.getElementById('myImages').appendChild(myImage6).style.width = '100px';
    
          console.log(myImage6);
      break;
      default:
        console.log('mais que se passe-t-il');
        break;
  };};
