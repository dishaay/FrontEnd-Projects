// koi bhi cheez form mei vaise hi ho jaise muhje chahiye. 

//A) NOW I WANT THE NAME TO BE ENTERED MORE THAN 2 CHARACTERS. 

let nm=document.querySelector('#name');
let form= document.querySelector('form'); 


form.addEventListener("submit", function (dets){ 
  dets.preventDefault(); 
  // i want to stop my form from submitting taaki mei mere saare parameters ko check kar du. 
  if(nm.value.length <= 2){ 
    //mujhe allow kar dena hai yaha. and agar woh 2 se kamm hai toh issue dikhana chahiye. simple si baat.  jab mera naam ka letters 2 se chota ho toh mujhhe mere hide waale element ko leke aana hai.
    document.querySelector("#hide").style.display="initial";
  }

  else{
    document.querySelector("#hide").style.display="none";
  }
})

//what is inline based validation. we use regex more often. regex is a different language, it is a pattern of codes. 

//EMAIL AND PASSWORD VALIDATOR. 

form.addEventListener(s)
