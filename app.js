//************************************REGLES DU JEU*******************************************
//ceci un jeu de dé avec 2 joueurs 
//le dé me donnera des valeurs entre 1 et 6 (logique)
//si la valeur est 1 je passe mon tour à l'autre joueur et je lui donne la valeur de mon dé actuel qui est 1
//sinon je peux relancer le dé autant de fois que je veux

//mes score démarrent à 0 
//on lui ajoute le score des lancers de dé au fur et à mesure en cliquant sur hold
//quand on clique sur hold on passe aussi la main à l'autre joueur
//tant qu'aucun score total n'est égal à 100 alors le jeu continue
//sinon le joueur qui a 100 a gagné

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
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
let activePlayer;
const newGame = document.getElementById('newgame');
let round = 0;
let randomNumber;
const modal = document.getElementById('modal');
let regles = document.getElementById('regles');

/****************************************REGLES DU JEU MODAL*************************** */
regles.onclick = function (){
  joueurActif.innerHTML = 
  "Bienvenue sur le benjigum, jeu de dé qui va faire défiler le temps pour toi. " +
  "Voici les règles: " +
  "Ce jeu de dé est pour 2 joueurs " +
  "Le dé du joueur qui donnera 1 fera perdre tous ses points à ce joueur et ce joueur donnera ce point et laissera la main à son adversaire " +
  "Pour ne pas perdre ses points le joueur peut récolter ses points " +
  "Le joueur actif peut lancer le dé autant de fois qu'il le souhaite. " +
 " Le premier joueur qui obtient 100 a gagné !"
 joueurActif.style.textTransform = 'lowercase';
 joueurActif.style.fontSize = '18px'
}


/*********************************BUTTON NEW GAME RESET JOUEUR ALEATOIRE**********************************/
newGame.onclick = function resultats(){
  //definit aleatoirement le joueur actif
  getRandomIntLancer();
  //supprime les images de dé
  removeIn();
  // mise a 0 des scores
  round1 = 0;
  round2 = 0;
  global1 = 0;
  global2 = 0;
  message1.innerHTML = '0';
  message2.innerHTML = '0';
  messageglobal1.innerHTML = '0';
  messageglobal2.innerHTML= '0';
  //affiche le message du joueur qui doit jouer
  joueurActif.innerHTML = 'Le joueur ' + round +' commence';
  console.log('active player = ' + activePlayer);
};

/***************************FUNCTIONS QUI DEFINISSENT L'ACTIVE PLAYER ********************************/
function getRandomIntLancer() {
  if (round === 0) {
            round =  Math.floor(Math.random() * 2) + 1;
            return activePlayer = `player${round}`;
      
  }};

  
/*********************************FUNCTION ACTIVE PLAYER*******************************/
function switchPlayer(){
  if (activePlayer === 'player1') {
             
          console.log(`function switchPlayer : ${activePlayer}`);
  } else {
      activePlayer === 'player2';
            console.log('mon active player est : ' + activePlayer);
  }};

  
//**************************  FUNCTION NOMBRE ALEATOIRE POUR LE DE************* ****************/
function randomize(){
  randomNumber = Math.floor(Math.random() * 6 ) + 1;
  console.warn('valeur du dé' + randomNumber);
  removeIn();
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
          activePlayer = 'player2';
          console.log(`le joueur passe la main au ${activePlayer} grâce à la fonction looseDiceOne `);
          resultRound1 = 0;
          message1.textContent = resultRound1;
          resultRound2 = 0;
          message2.textContent = resultRound2;
                    
      } else {
          activePlayer = 'player1';
          console.log(`le joueur passe la main au ${activePlayer} grâce à la fonction looseDiceOne`);
          resultRound2 = 0;
          message2.textContent = resultRound2;
          resultRound1 = 0;
          message1.textContent = resultRound1;
           
      }
  }
}


//****************************APPEL DE MES FONCTIONS POUR BOUTON ROLLDICE1*****************
lancer1.onclick = function resultats(){
  //nombre aléatoire
  randomize();
  console.log('nombre aleatoire' + randomNumber);
  //dé en image
  resultImage();
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
      removeIn();  
      //la valeur de global 1 est maintenant resultGlobal1
      messageglobal1.innerHTML = resultGlobal1;
      message1.innerHTML = '0';
      activePlayer = 'player2';
      //vidange du tableau round1 de ses valeurs
      round1 = 0;
      console.log('valeur de round1 apres reset : ' + round1);
      winer();
    };

//****************************APPEL DE MES FONCTIONS POUR BOUTON ROLLDICE2*****************
lancer2.onclick = function resultats(){
  //nombre aléatoire
  randomize();
  //dé en image
  resultImage();
  //si je fait un je passe mon tour
  diceOne();
  //addition de tous mes round2
  totalRound();
  console.log('ajout des valeur dans round2:'+ round2);}
       
        

//****************************APPEL DE MES FONCTIONS POUR BOUTON HOLD1*****************   
recup2.onclick = function (){
  //formule pour ajouter le resultRound2 au global2 à revoir
      totalGlobal();
      console.log('totalglobal2'+ totalGlobal)
      removeIn(); 
      //la valeur de global2 est maintenant resultGlobal2
      messageglobal2.innerHTML = resultGlobal2;
      message2.innerHTML = '0';
      activePlayer = 'player1';
      //vidange du tableau round2 de ses valeurs
      round2 = 0;
      console.log('valeur de round2 apres reset : ' + round2) ;
      winer() ;
    };


//*********************SI UN DES JOUEURS A UN GLOBAL SUPERIEUR OU = A 100 ALORS IL GAGNE******/   
 
let modalWin = document.getElementsByClassName('modal-dialog')
function winer(){ 
  if(resultGlobal1 > 100 || resultGlobal2 >100){
    alert('ton score est de 100 tu as gagné bravo !')
  }
    else{ 
      console.log('on continue');
    }};


/****************************************SUPPRIMES LES IMAGES A CHAQUE LANCER **********/
function removeIn(){
  document.getElementById('myImages');
  $("#myImages").empty();
  
};

/*************************FUNCTION QUI PERMET D AFFICHER LES  IMAGES DE DE*************** */
  function resultImage () {
    
      switch (randomNumber)  {  
    case 1: 
  let myImage1 = document.createElement('img');
  myImage1.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312625_1280.png';
  document.getElementById('myImages').appendChild(myImage1).style.width = '100px';
  //message pour prevenir que le tour change, mais ca ne marche pas pour petits ecran alors désactiver
  myImages.innerHTML = 'tu as fais 1, tu passes ton tour';
  myImages.style.fontSize = '15px';
  /*myImages.style.background = '#a7c957';*/
  myImages.style.fontStyle = 'bold';
  myImages.style.marginTop = '150%'; paddingRight = '10%';
  myImages.style.borderRadius = '15%';
  myImages.style.textAlign = 'center';
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
  myImage5.src = 'https://cdn.pixabay.com/photo/2014/04/03/10/24/five-310334_1280.png';
  document.getElementById('myImages').appendChild(myImage5).style.width = '100px';
    console.log(myImage5);
        break;
  
      case 6: 
  let myImage6 = document.createElement('img');
  myImage6.src = 'https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621__480.png';
  document.getElementById('myImages').appendChild(myImage6).style.width = '100px';
    console.log(myImage6);
    break;
  
    default:
      console.log('mais que se passe-t-il');
      break;
      
};};