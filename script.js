var scores,roundscore,activePlayer, gameON = true ;

init();
//roll dice click function
document.querySelector('.btn-roll').addEventListener('click',function()
  {
    if(gameON){
    // RandoM Number Generation
    var dice=Math.floor(Math.random()*6)+1;
    //display the result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice'+dice+'.png';
    // if dice is 1 then next player will play
    if(dice!=1)
        {
         //add the round score
          roundscore=roundscore+dice;
          document.querySelector('#current-'+activePlayer).textContent=roundscore;
        }
    else
        {
          //nextplayer
          nextPlayer();   
        }  
      }
    })
///Hold button functionality
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameON){
    //to add current score to globala score
    scores[activePlayer]=scores[activePlayer]+roundscore;
    ///update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    //check if player won the game
    if(scores[activePlayer]>=100)
        {
          document.querySelector('#name-'+activePlayer).textContent='Winner!'
          document.querySelector('.dice').style.display='none';
          gameON=false;
        }
    else
        {
            nextPlayer();
        } 
    }
  })
//nextplayer function
function nextPlayer()
{
  activePlayer==0 ? activePlayer=1:activePlayer=0;
  roundscore=0;
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display='none';
}

//new button logic
document.querySelector('.btn-new').addEventListener('click',init)

//initilization function
function init()
{

scores=[0,0];
roundscore=0;
activePlayer=0;
gameON=true;

document.querySelector('.dice').style.display='none';

//Update Everything to 0
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
//update player name
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
//class changes
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}


































