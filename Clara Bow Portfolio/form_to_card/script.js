let form=document.querySelector('form');
let input=document.querySelectorAll('input');

//to stop my form from submitting, because i want the details from my input details, so i need to stop it from submitting. 

form.addEventListener("submit", function (dets){
  dets.preventDefault();// i have successfully prevented it from submitting, yay! 
  console.log(dets.target[0].value);
  console.log(dets.target[1].value);
  console.log(dets.target[2].value);
  console.log(dets.target[3].value);

  let card= document.createElement('div');
  console.log(card);
  
  let profile=document.createElement('div'); 
  
  let img=document.createElement('img'); 
  img.setAttribute("src",input[3].value);
  let h2=document.createElement('h2'); 
  h2.textContent=input[0].value;
  let h3=document.createElement('h3'); 
  h3.textContent=input[1].value; 
  let p=document.createElement('p');
  p.textContent=input[2].value;
  
  card.classList.add('card');
  
  profile.classList.add('profile');
  console.log("all good");

  //the main task is to append everything on my page!
  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(p);

  document.body.appendChild(card);

  //abhi mene submit toh kar dia but now i want that after submitting all of my input values should not be there. 

  input.forEach(function(inp){
    if(inp.type!== "submit"){
      inp.value=" ";
    }
  })
}) 


