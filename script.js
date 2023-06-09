 // Disable right-click context menu
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });
    
    //timer
    
     var countdownTimer;
    var secondsLeft = 0;

    function toggleTimer(seconds) {
      if (secondsLeft > 0) {
        clearInterval(countdownTimer);
        secondsLeft = 0;
        document.getElementById("timer").textContent = "";
      } else {
        secondsLeft = seconds;
        document.getElementById("timer").textContent = secondsLeft;
        countdownTimer = setInterval(function() {
          secondsLeft--;
          document.getElementById("timer").textContent = secondsLeft;

          if (secondsLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("timer").textContent = "Time's up!";
            playBeepSound();
          }
        }, 1000);
      }
    }

    function playBeepSound() {
      var audio = new Audio("beep.mp3");
      audio.play();
    }
    
    
    //dice
    var currentNumber = 1;
    var currentNumber1 = 1;
    var previousrandomnumber=-1;
    var globalrandomnumber;
    var imageResetSource =
      "d1.jpg";

    var matrix = [
  [0,1],
  [1,1],
  [1,2],
      [1,3],
      [1,4],
      [1,5],
      [1,6],
      [2,6],
      [4,5],
      [5,5],
      [5,6],
      [6,6]
      
];
    
function generate(){
    for (var i = 1; i <= 30; i++) {
      rollDice();
    }
    }
    
  

    function rollDice() {

       
      var box = document.getElementById("box");
      var box1 = document.getElementById("box1");
      
        //get random numbe between 1 and 12
    globalrandomnumber=generateRandomNumber1to12(previousrandomnumber);
      previousrandomnumber=globalrandomnumber;
      updateDiv(globalrandomnumber); 
      var randomNumber;
      var randomNumber1;
      
      // generate dice1 image
      
      if (globalrandomnumber==1) {

        randomNumber=1;
        randomNumber1=1;
        updateImageSource();
        
      }
      else{
        resetDice2(); // Reset image
        randomNumber=generateRandomBetween(matrix[globalrandomnumber-1][0],matrix[globalrandomnumber-1][1] )
        randomNumber1=globalrandomnumber-randomNumber
      }
   
     
      
 
      //cleardice images
      box.classList.remove("show-" + currentNumber);
      box1.classList.remove("show-" + currentNumber1);
      
      //update currentrnumber
      currentNumber=randomNumber;
      currentNumber1=randomNumber1;

      //
      box.classList.add("show-" + randomNumber);
      box1.classList.add("show-" + randomNumber1);
    }
    
     function generateRandomNumber1to12(nbr) {
      var newNumber = Math.floor(Math.random() * 12) + 1;
      while (newNumber === nbr) {
        newNumber = Math.floor(Math.random() * 12) + 1;
      }
      return newNumber;
    }
    
     function generateRandomBetween(min,max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    
    function resetDice2()
    {
      var sideD1 = document.querySelector(".side1.d11");
      sideD1.querySelector("img").src = imageResetSource;
      //updateDiv("dice reset:" + imageResetSource )
    }
    
    function updateImageSource() {

      var sideD1 = document.querySelector(".side1.d11");
      var imageSource="d0.jpg";
      sideD1.querySelector("img").src = imageSource;
    }
    
    function updateDiv(txt) {
  //var div = document.getElementById("myDiv");
  //div.innerHTML = div.innerHTML + "<br />" + txt;
}
    
