let score=JSON.parse(localStorage.getItem('score')) 
    || {
    wins : 0,
    losses : 0,
    ties :0
    };
    /*
    if(score === null){
      score ={
      wins : 0,
      losses : 0,
      ties :0
      }
    };*/

    updateScoreElement();

    function resetScore(){
        score.wins= 0,
        score.losses= 0,
        score.ties = 0
        localStorage.removeItem('score');
        updateScoreElement();
    }
  

  

    let isAutoPlaying = false;
    let intervalId;
    document.querySelector('.js-auto-btn')
       .addEventListener('click', () => {
        autoPlay();
       })
  
  
    function autoPlay(){
      if( !isAutoPlaying ){
        intervalId =setInterval(() => {
          const playerMove = pickComputer();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

        document.querySelector('.auto-play-btn').
         innerHTML = 'Stop Playing'
      }
      else{
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.auto-play-btn').
         innerHTML = 'Auto Play'
      }
      
    }

    document.querySelector('.js-rock-btn')
       .addEventListener('click', () => {
        playGame('Rock');
       })
        
       
    document.querySelector('.js-paper-btn')
       .addEventListener('click', () => {
        playGame('Paper');
       })
    

    document.querySelector('.js-scissor-btn')
       .addEventListener('click', () => {
        playGame('Scissors');
       })

     
      document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r'){
          playGame('Rock');
        }
        else if(event.key === 'p'){
          playGame('Paper');
        }
        else if(event.key === 's'){
          playGame('Scissors');
        }
        else if(event.key === 'a'){
          autoPlay();
        }
        else if(event.key === 'Backspace'){
          showResetConfirmtion();
        }
      })


      document.querySelector('.js-reset-btn')
         .addEventListener('click', () =>{
          showResetConfirmtion();
      })
       


      function showResetConfirmtion(){
        document.querySelector('.js-reset-confirmation').innerHTML = `
        Are you sure you want to reset the score?
        <button class="js-reset-yes reset-confirm-btn">Yes</button>
        <button class="js-reset-no reset-confirm-btn">No</button>`;

        document.querySelector('.js-reset-yes').addEventListener('click', () =>{
          resetScore();
          hidesResetConfirmation();
        });
        document.querySelector('.js-reset-no').addEventListener('click', () => {
          hidesResetConfirmation();
        });
      }
        function hidesResetConfirmation(){
          document.querySelector('.js-reset-confirmation').innerHTML = '';
        }
      


    function playGame(playerMove){
      const computer= pickComputer();
      let result='';
      if(playerMove === 'Rock'){
      if(computer === 'Rock'){
      result='Tie';
      }
      else if(computer === 'Paper'){
      result='You lose';
      }
      else if(computer === 'Scissors'){
      result='You win';
      }
      }
      else if(playerMove === 'Paper'){
      if(computer === 'Rock'){
      result='You win';
      }
      else if(computer === 'Paper'){
      result='Tie';
      }
      else if(computer === 'Scissors'){
      result='You lose';
      }
      }
      else if(playerMove === 'Scissors'){
      if(computer === 'Rock'){
      result='You lose';
      }
      else if(computer === 'Paper'){
      result='You win';
      }
      else if(computer === 'Scissors'){
      result='Tie';
      }
    }


    if(result === 'You win'){
        score.wins += 1;
      }
      else if(result === 'You lose'){
        score.losses += 1;
      }
      else if(result === 'Tie'){
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));
      updateScoreElement();
      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML =`You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computer}-emoji.png" class="move-icon">
      Computer`
    }

    function updateScoreElement(){
      document.querySelector('.js-score')
      .innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    
    function pickComputer(){
    const rno= Math.random();
    let computer=''; 
    if (rno >= 0 && rno < 1/3){
    computer='Rock';
    }
    else if(rno >= 1/3 && rno < 2/3){
    computer='Paper';
    }
    else if(rno >=2/3 && rno <1){
    computer='Scissors';
    }
    console.log(computer);
    return computer;
    }