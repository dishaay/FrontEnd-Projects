let form=document.querySelector('form'); 

form.addEventListener("submit", function(dets){
  dets.preventDefault();
  
  let h1= document.createElement('h1');
 
  h1.textContent=dets.target[0].value;
  
  let h2= document.createElement('h2');
  h2.textContent=dets.target[1].value;

  let p=document.createElement('p');
  p.textContent=dets.target[2].value;

  let prof=document.createElement('img');
  prof.setAttribute("src",dets.target[3].value);
  prof.classList.add('photo');
  let card=document.createElement('div');
  card.classList.add('final');
  card.prepend(prof);
  let details=document.createElement('div');
  details.append(h1);
  details.append(h2);
  details.append(p);
  card.append(details);
  console.log(dets.target[1].value);
  document.body.append(card);
})


