let calculation=localStorage.getItem('calculation') || '';
    updateResult();
      function updateCalculation(num){
        calculation += num;
        updateResult();
        localStorage.setItem('calculation', calculation);
      }
      function updateResult(){
          document.querySelector('.js-result').innerHTML =calculation;
      }