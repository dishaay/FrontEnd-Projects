let email= document.querySelector("#email");
let password=document.querySelector("#password");
let form= document.querySelector("form"); 

form.addEventListener("submit", function(dets){ 
  dets.preventDefault(); 
  let isValid= true;
  document.querySelector("#emailError").textContent=""; //jo bhi pehele ka hoga woh sab hatt jaayega, and it will be blank which will give it a fresh start.
  document.querySelector("#passError").textContent="";
  const ERegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PRegex= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/; 

  //i have to check my email and password. email stores my input, email.value ke paas mera email hai. 

  let emailans=ERegex.test(email.value); 
  let passans=PRegex.test(password.value);

  if(!emailans){
    document.querySelector("#emailError").textContent= "Email is incorrect"; 
    document.querySelector("#emailError").style.display= "initial";
    isValid= false;
  }

  if(!passans){
    document.querySelector("#passError").textContent="Password is incorrect";
    document.querySelector("#passError").style.display= "initial";
    isValid=false; 
  }


  if(isValid){ 
    document.querySelector("#resultMessage").textContent="everything is fine except your life";
  }


})


//.value is used for input values and .textContent is used for  html elements like p, headings and stuff, so that is the major difference between those. 