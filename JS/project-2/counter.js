let counterNumber = 0;
let counterValue = document.querySelector('.counter-number');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let increase = document.querySelector('.increase');
decrease.addEventListener("click", function(){
    counterNumber--;
    counterValue.textContent = counterNumber;
    if(counterNumber < 0){
        counterValue.style.color = 'red';
    }
    if(counterNumber === 0){
        counterValue.style.color = 'black';
    }
  })
reset.addEventListener("click", function(){
    counterNumber = 0;
    counterValue.textContent = counterNumber;
    counterValue.style.color = 'black';
})
increase.addEventListener("click", function(){
    counterNumber++;
    counterValue.textContent = counterNumber;
    if(counterNumber > 0){
        counterValue.style.color = 'green';
    }
    if(counterNumber === 0){
        counterValue.style.color = 'black';
    }
})
