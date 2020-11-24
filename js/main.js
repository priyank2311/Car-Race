let cityout = document.querySelector('.city-in');

setInterval(function(){
    cityout.classList.toggle('daynight');
},8000)

$(document).ready(function (){
  $surface = $('.city-out');

  $(document).on('keypress',function(e){
    if(e.which == 13){
      $($surface).toggleClass('moveRight');
      function myfunc1(){
        bar2 = setTimeout(()=>alertfunc1('Move 1 - Car at 5, petrol remaining 25'))
        bar2 = setTimeout(()=>alertfunc1('Move 2 - Car at 9, petrol remaining 21'), 2000)
        bar2 = setTimeout(()=>alertfunc1('Move 3 - Car at 14, petrol remaining 16'), 3000)
        bar2 = setTimeout(()=>alertfunc1('Move 4 - Car at 19, petrol remaining 11'), 4000)
        bar2 = setTimeout(()=>alertfunc1('Move 5 - Car at 22, petrol remaining 8'), 5000)
        bar2 = setTimeout(()=>alertfunc1('Move 6 - Car at 28, petrol remaining 2'), 6000)
        bar2 = setTimeout(()=>alertfunc1('Move 7 - Car at 30, petrol remaining Game Over'), 7000) 
      }
      
      function alertfunc1(text){
        alert(text)
      }
      
      myfunc1()
    }
    if(e.which == 13);
  })
});




//const gameArea = document.querySelector('gameArea');
//const startScreen = document.querySelector('.startScreen');
//const score = document.querySelector('.score');

//startScreen.addEventListener("click", start);
//function start() {
  //  startScreen.classList.add("hide");
