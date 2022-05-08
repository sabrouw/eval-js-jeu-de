//************************************REGLES DU JEU*******************************************
//ceci un jeu de dé avec 2 joueurs 
//le dé qui me donnera des valeurs entre 1 et 6
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
let global1;;
let global2;
let round1;
let round2;
let resultGlobal1 = 0;
let resultGlobal2 = 0;
let resultRound1 = 0;
let resultRound2 = 0;
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let activePlayer;
let newGame = document.getElementById('newgame');
let round = 0;
let randomNumber;
let clr;


function myfunction() {
 }
window.onload = myfunction;

/*********************************BUTTON NEW GAME RESET**********************************/
newGame.onclick = function resultats(){
  //definit aleatoirement le joueur actif
  getRandomIntLancer()
  disabled();
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
  joueurActif.innerHTML = 'Le joueur ' + round +' commence';
  console.log('active player = ' + activePlayer);
};

/***************************FUNCTIONS QUI DEFINISSENT L'ACTIVE PLAYER ********************************/
function getRandomIntLancer() {
  if (round === 0) {
      round =  Math.floor(Math.random() * 2) + 1;
      return activePlayer = `player${round}`;
      
  }};

//function getRandomIntStart() {
//      tour =  Math.floor(Math.random() * 2) + 1;
//      console.log(`function getRandomInt la valeur de tour est ${tour}`)
//      return activePlayer = `player${tour}`;
//      
//};

function disabled(){
  if (activePlayer === 'player1'){
    lancer1.disabled = false;
    recup1.disabled = false;
    
  }
  else{
    activePlayer === 'player2'
    lancer2.disabled = false;
    recup2.disabled = false;
    
  }
};
/*********************************FUNCTION ACTIVE PLAYER*******************************/
function switchPlayer(){
  if (activePlayer === 'player1') {
      lancer2.disabled = true;
      
      
          console.log(`function switchPlayer : ${activePlayer}`);
  } else {
      activePlayer === 'player2';
      lancer2.disabled = false;
      lancer1.disabled = true;
      console.log('mon active player est : ' + activePlayer);
  }};

  
//**************************  FUNCTION NOMBRE ALEATOIRE************* ****************/
function randomize(){
  randomNumber = Math.floor(Math.random() * 6 ) + 1;
  console.warn('valeur du dé' + randomNumber);
    return randomNumber;
    };
      

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
function diceOne(){
  if (randomNumber === 1) {
      if (activePlayer === 'player1') {
          lancer1.disabled = true;
          activePlayer = 'player2';
          lancer2.disabled = false;
          console.log(`le joueur passe la main au ${activePlayer} grâce à la fonction looseDiceOne `);
          resultRound1 = 0;
          message1.textContent = resultRound1;
          resultRound2 = 0;
          message2.textContent = resultRound2;
          removeIn();
      } else {
          activePlayer = 'player1';
          console.log(`le joueur passe la main au ${activePlayer} grâce à la fonction looseDiceOne`);
          resultRound2 = 0;
          lancer2.disabled = true;
          lancer1.disabled = false;
          message2.textContent = resultRound2;
          resultRound1 = 0;
          message1.textContent = resultRound1;
          removeIn();
      }
  }
}
/**************FONCTION QUI PERMET DE STYLISER L ACTIVE PLAYER***************/
//function activePlayerStyle(){
//  if (activePlayer === 'player1') {
//      lancer2.style.backgroundColor = 'black';
//      player2.style.backgroundColor  = 'black';
//      recup2.style.backgroundColor  = 'black';
//      clr = setInterval(activePlayerStyle, 1000);
//  
//  } else if (activePlayer === 'player2') {
//    lancer1.style.backgroundColor =  'black';
//    player1.style.backgroundColor =   'black';
//    recup1.style.backgroundColor = 'black';
//     clr = setInterval(activePlayerStyle, 1000);
//  } }


//****************************APPEL DE MES FONCTIONS POUR BOUTON ROLLDICE1*****************
lancer1.onclick = function resultats(){
  //nombre aléatoire
  randomize();
  console.log('nombre aleatoire' + randomNumber);
  //song();
  //dé en image
  resultImage();
  //fonction pour supprimer image au fure et a mesure
  //myList () ;  
  //removeImage() ;
  //si je fait 1 je passe mon tour
  diceOne();
  //addition de tous mes round1 a chaque lancer
  totalRound();
};


//****************************APPEL DE MES FONCTIONS POUR BOUTON HOLD1*****************   
recup1.onclick = function (){
//formule pour ajouter le resultRound1 au global1 à revoir
      totalGlobal();
      console.log('resultGlobal1 à ce niveau: ' + resultGlobal1);
      switchPlayer();
      removeIn();  
      //la valeur de global 1 est maintenant resultGlobal1
      messageglobal1.innerHTML = resultGlobal1;
      message1.innerHTML = '0';
      activePlayer = 'player2';
      lancer1.disabled = true;
      lancer2.disabled = false;
      //vidange du tableau round1 de ses valeurs
      round1 = 0;
      console.log('valeur de round1 apres reset : ' + round1);
      winer();
    };

//****************************APPEL DE MES FONCTIONS POUR BOUTON ROLLDICE2*****************
lancer2.onclick = function resultats(){
  //nombre aléatoire
  randomize();
  //song();
  //dé en image
  resultImage();
  //fonction pour supprimer image au fure et a mesure
  //myList ()
  removeImage() ;
  //si je fait un je passe mon tour
  diceOne();
  //addition de tous mes round2
  totalRound();
  console.log('ajout des valeur dans round2:'+ round2);}
       
        

//****************************APPEL DE MES FONCTIONS POUR BOUTON HOLD1*****************   
recup2.onclick = function (){
//formule pour ajouter le resultRound2 au global2 à revoir
      totalGlobal();
      console.log('totalglobal2'+totalGlobal)
      switchPlayer(); 
      //removeIn(); 
      //la valeur de global2 est maintenant resultGlobal2
      messageglobal2.innerHTML = resultGlobal2;
      message2.innerHTML = '0';
      activePlayer ='player1';
      lancer2.disabled = true;
      lancer1.disabled = false;
      //vidange du tableau round2 de ses valeurs
      round2 = 0;
      console.log('valeur de round2 apres reset : ' + round2) ;
      winer() ;
    };


//*********************SI UN DES JOUEURS A UN GLOBAL SUPERIEUR A 100 ALORS IL GAGNE******/   
  function winer(){ 
  if(resultGlobal1 > 100 || resultGlobal2 >100){
    alert('tu as gagné !!😄');
    lancer1.disabled = true;
    lancer2.disabled = true;
    recup1.disabled = true;
    recup2.disabled = true;
  }
    else{ 
      console.log('on continue');
    }};

/************************FUNCTION POUR SUPPRIMER LES IMAGES au FUREET A MESURE */
//function myList (){
//let myListe = document.querySelectorAll('ul');
//for (i = 0; i <  myListe.length ; i ++);
//myListe.shift(myListe[1]);
//console.log('ma liste : '+ myListe);}

/************************FUNCTION POUR SUPPRIMER LES IMAGES QUAND ON CHANGE DE PLAYER */
//function removeIn(){
//    let ulImg = document.querySelectorAll('ul');
////selecteur parent
//  //let parentImg = document.getElementById('body');
//  console.log("liste image" + ulImg)
//  //parcour de ma liste
//  for(ulImg = 0; ulImg< ulImg.lenght; ulImg ++)
//  //parent.removeEnfant(enfant)
//  ulImg.splice(0, 1);

//};
function song(){
let sound = document.getElementById("audioDice");
sound.play();

}

function removeIn(){
  document.getElementById('myImages');
  $("#myImages").empty();
  
};

function removeImage() {
  if (myImages.style.transform = '100'){
    setTimeout(removeIn, 15000, clearTimeout);
    }
    else{
      console.log('ca va');
    }
  };
/*************************FUNCTION QUI PERMET D AFFICHER LES  IMAGES DE DE*************** */
  function resultImage () {
      switch (randomNumber)  {  
    case 1: 
  let myImage1 = document.createElement('img');
  myImage1.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312625_1280.png';
  document.getElementById('myImages').appendChild(myImage1).style.width = '100px';
  setTimeout(removeIn, 15000, clearTimeout);  
  soundOk();
  console.log(myImage1);
  break;
  
  case 2: 
  let myImage2 = document.createElement('img');
  myImage2.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/two-310337__480.png';
  document.getElementById('myImages').appendChild(myImage2).style.width = '100px';
  setTimeout(removeIn, 15000, clearTimeout);
  soundOk();
  console.log(myImage2);  
      break;
      
  case 3:
  let myImage3 = document.createElement('img');
  myImage3.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/three-310336__480.png';
  document.getElementById('myImages').appendChild(myImage3).style.width = '100px';
  setTimeout(removeIn, 15000, clearTimeout);
  console.log(myImage3);
  soundOk();
     break;
   
  case 4: 
  let myImage4 = document.createElement('img');
  myImage4.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623__480.png';
  document.getElementById('myImages').appendChild(myImage4).style.width = '100px', visibility = 'visible';
  setTimeout(removeIn, 15000, clearTimeout);
  console.log(myImage4);
  soundOk();
     break;
   
  case 5: 
  let myImage5 = document.createElement('img');
  myImage5.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/five-310334_1280.png';
  document.getElementById('myImages').appendChild(myImage5).style.width = '100px';
  setTimeout(removeIn, 15000, clearTimeout);
  console.log(myImage5);
  soundOk();
      break;
  
      case 6: 
  let myImage6 = document.createElement('img');
  myImage6.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621__480.png';
  document.getElementById('myImages').appendChild(myImage6).style.width = '100px';
  setTimeout(removeIn, 15000, clearTimeout);
  console.log(myImage6);
  soundOk();

    default:
      console.log('mais que se passe-t-il');
      break;
      
};};

  
  