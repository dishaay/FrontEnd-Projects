let count=0;
let progress= document.querySelector(".progress-bar");
let percentText= document.querySelector("#percent");
let container = document.querySelector(".container");
setInterval(function(){
  if(count<=99){
    count ++; 
    progress.style.width=`${count}%`;
    percentText.textContent=`${count}%`;
  }
},30); //3 seconds me complete karna hai toh 3000/100; yaaaa, 10 seconds mei toh 100000/100. thats how it works


setTimeout(() => {
  container.style.display="none";
}, 3000); //div ko hide  kar dia bro. 

//common confusion between setTimeout and setInterval. setTimeout: ekk baar chalta hai and setInterval : bass baar baar chalta hai 