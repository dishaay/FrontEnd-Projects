setTimeout(function(){
  console.log("you are 5 mins late bro");
},5000); //setTimeout sirf ekk baar chalta hai. 

setInterval(function(){
  console.log("you are 5 mins late bro");
},5000); //yeh baar baar chalega! harr 5 seconds mei. 

// clearTimeout: jo timeout chalne waala hai, mei bass usse clear kar dunga.
//set timeout ko bass ekk variable mei store kar do.
let tm= setTimeout(function(){
  console.log("you are 5 mins late bro");
},5000);

clearTimeout(tm); 

//same goes for clearInterval too.

//countdown timer 

let count=10;
let si= setInterval(function(){
  if(count>=1){
    count--;
    console.log(count);
  }
  else{ 
    clearInterval(si);
  }
},1000); //harr ekk second mei yeh decrease ho raha hai. 
