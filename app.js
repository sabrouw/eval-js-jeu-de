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
let global1;
let global2;
let round1;
let round2;
let resultGlobal1 = 0;
let resultGlobal2 = 0;
let resultRound1 = 0;
let resultRound2 = 0;
let player1;
let player2;
let activePlayer;
let newGame = document.getElementById('newgame');
let round = 0;


/*********************************BUTTON NEW GAME RESET**********************************/
newGame.onclick = function resultats(){
  getRandomIntLancer()
  getRandomIntStart();
  //supprime les images de dé
  removeIn();
  // mise a 0 scores
  round1 = 0;
  round2 = 0;
  global1 = 0;
  global2 = 0;
  message1.innerHTML = '0';
  message2.innerHTML = '0';
  messageglobal1.innerHTML = '0';
  messageglobal2.innerHTML= '0';
  console.log('active player = ' + activePlayer);
};

/***************************FUNCTIONS QUI DEFINISSENT L'ACTIVE PLAYER ********************************/
function getRandomIntLancer() {
  if (round === 0) {
      round =  Math.floor(Math.random() * 2) + 1;
      return activePlayer = `player${round}`;
      
  }};

function getRandomIntStart() {
      tour =  Math.floor(Math.random() * 2) + 1;
      console.log(`function getRandomInt la valeur de tour est ${tour}`)
      return activePlayer = `player${tour}`;
      
};

/*********************************FUNCTION ACTIVE PLAYER*******************************/
function switchPlayer(){
  if (activePlayer === 'player1') {
      lancer2.disabled = true;
      activePlayer = 'player2';
      console.log(`function switchPlayer : ${activePlayer}`);
  } else {
      activePlayer = 'player1';
      lancer2.disabled = false;
      console.log('mon active player est : ' + activePlayer);
  }};
//**************************  FUNCTION NOMBRE ALEATOIRE************* ****************/
function randomize(){
  randomNumber = Math.floor(Math.random() * 6 ) + 1;
  console.warn('valeur de dé' + randomNumber);
    return randomNumber;
    }
      

/********************FONCTION QUI SAUVEGARDE LES POINTS DANS SCORE GLOBAL ************/
function totalGlobal() {
  if (activePlayer === 'player1') {
      resultGlobal1 = resultRound1 += resultGlobal1;
      messageglobal1.textContent = resultGlobal1;
      resultRound1 = 0;
      message1.textContent = 0;
      console.log(`le total du joueur 1 est : ${resultGlobal1} function globalPlayer`);
  } else if (activePlayer === 'player2') {
      resultGlobal2 = resultRound2 += resultGlobal2;
      messageglobal2.innerHTML = resultGlobal2;
      resultRound2 = 0;
      message2.textContent = 0;
      console.log(`le total du joueur 2 est : ${resultGlobal2} function globalPlayer`);
  }
};

/***************************FONCTION QUI STOCK LES POINTS DANS ROUND***********************/
function totalRound(){
  if (activePlayer === 'player1') {
      resultRound1 = resultRound1 + randomNumber;
      message1.innerHTML = resultRound1;
      console.log(`function totaRound : le round1 est : ${resultRound1}`);
      return resultRound1;
  } else if (activePlayer === 'player2'){
      resultRound2 = resultRound2 + randomNumber;
      message2.innerHTML = resultRound2;
      console.log(`function totaRound : le round2 est : ${resultRound2}`);
      return resultRound2;
  }
};


/******************************CONDITION SI LE DE FAIT 1************************************ */
function DiceOne(){
  if (randomNumber === 1) {
      if (activePlayer === 'player1') {
          activePlayer = 'player2';
          console.log(`le joueur passe la main au ${activePlayer} grâce à la fonction DiceOne `);
          resultRound1 = 0;
          message1.innerHTML = resultRound1;
          resultRound2 = 0;
          message2.innerHTML= resultRound2;
      } else {
          activePlayer = 'player1';
          console.log(`le joueur passe la main au ${activePlayer} grâce à la fonction DiceOne`);
          resultRound2 = 0;
          message2.innerHTML = resultRound2;
          resultRound1 = 0;
          message1.innerHTML = resultRound1;
      }
  }
}
/*********************************FORMULE AJOUTER SOMME ROUND1 DANS GLOBAL1************************/
//function totalRound1(){
//resultRound1 = round1.reduce(
//        (previousValue , currentValue) => previousValue + currentValue);
//        console.log('somme de mon tableau round1 :' +resultRound1);  
//               //j'ajoute la somme de mont tableau round1 dans ma variable global1
//       global1 = [resultRound1];
//       console.log('affichage global1 :' + global1);
//};
//
///*********************************FORMULE AJOUTER SOMME ROUND1 DANS GLOBAL1************************/
//function totalRound2(){
//resultRound2 = round2.reduce(
//        (previousValue, currentValue) => previousValue + currentValue);
//        console.log('somme de mon tableau round2 :' +resultRound2);  
//        //j'ajoute la somme de mont tableau round2 dans ma variable global2
//         global2 = [resultRound2];
//       console.log('affichage global2 :' + global2);
//};
//
//****************************APPEL DE MES FONCTIONS POUR BOUTON ROLLDICE1*****************
lancer1.onclick = function resultats(){
  randomize()
  console.log('nombre aleatoire' + randomNumber)
  resultImage();
  //si je fait un je passe mon tour
  DiceOne();
  totalRound();
  //push de[1] dans round1
  //round1.push(randomNumber++);
  //round1;
  //totalRound1();
  //affiche la somme du tableau round1 sur ma page
  //message1.innerHTML = resultRound1;
  console.log('ajout des valeur dans round1:'+ round1);}        //parcour de mon tableau round1
       // for(m = 0; m< round1.length; m++);


//****************************APPEL DE MES FONCTIONS POUR BOUTON HOLD1*****************   
recup1.onclick = function (){
//formule pour ajouter le resultRound1 au global1 à revoir
      totalGlobal();
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
  randomize();
  resultImage();
  //si je fait un je passe mon tour
  DiceOne();
  totalRound();
  //push de[2] dans round2
  //round2.push(randomNumber++);
  //round2;
  //totalRound2();
  //affiche la somme du tableau round1 sur ma page
  //message2.innerHTML = resultRound2;
  console.log('ajout des valeur dans round2:'+ round2);}
       
        //parcour de mon tableau round2
        //for(n = 0; n< round2.length; n++);

//****************************APPEL DE MES FONCTIONS POUR BOUTON HOLD1*****************   
recup2.onclick = function (){
//formule pour ajouter le resultRound2 au global2 à revoir
      totalGlobal();
      console.log('totalglobal2'+totalGlobal)
      switchPlayer();  
      //la valeur de global2 est maintenant resultGlobal2
      messageglobal2.innerHTML = resultGlobal2;
      message2.innerHTML = '0';
      //vidange du tableau round2 de ses valeurs
      round2= [];
      console.log('valeur de round2 apres reset : ' + round2)  
    };


//*********************SI UN DES JOUEURS A UN GLOBAL SUPERIEUR A 100 ALORS IL GAGNE******/   
  function winer(){ 
  if(resultGlobal1 > 100 || resultGlobal2 >100){
    alert('tu as gagné !!😄');}
    else{ 
      console.log('on continue');
    }};


/***************************FUNCTION POUR MES IMAGES DE VALEUR de[1]************************** */
//function animer (){
//  let elem = document.getElementById('myImages');
//  let position = 0;
//  let id = setInterval(mvt, 5);
//  function mvt(){
//    if (position > 570 ){
//      clearInterval(id);
//    }
//    else{
//      position+15;
//      elem.style.left = position + "px";
//    }
//  }
//}
function 

removeIn(){
  document.getElementById('myImages');
  $("#myImages").empty();
  
};
function removeImage() {
  if (myImages.style.transform = '100'){
    setTimeout(removeIn, 8000, clearTimeout);
    }
    else{
      console.log('ca va');
    }
  };
   
  function resultImage () {
  switch (randomNumber){
  
    case 1: 
  let myImage1 = document.createElement('img');
  myImage1.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312625_1280.png';
  document.getElementById('myImages').appendChild(myImage1).style.width = '100px';
  
  
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
  document.getElementById('myImages').appendChild(myImage4).style.width = '100px', visibility = 'visible';
  
  
     console.log(myImage4);
     break;
   
  case 5: 
  let myImage5 = document.createElement('img');
  myImage5.src = '/images/de 5 icone.png';
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

  
  