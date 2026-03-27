let body=document.querySelector('body');
let p=document.querySelector('p');
let savedT= localStorage.getItem("theme");

if(savedT){
  document.body.classList.add(savedT);
}
else{
  colorC();
}
function colorC(){
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }

  else{ 
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}

//mene jab yeh website chora tha toh woh konse theme pe tha? yeh mujhe record karke rakhna hai bass. i will use localStorage to record this tho. 

let btn=document.querySelector("button"); 

btn.addEventListener("click", function (){
  if(document.body.classList.contains("dark")){
    body.classList.remove("dark"); 
    body.classList.add("light");
    let theme= localStorage.setItem("theme", "light");
    p.textContent="ugh, so much light! turn it dark please!!"
  }

  else{
    body.classList.remove("light"); 
    body.classList.add("dark");
    let theme= localStorage.setItem("theme", "dark");
    p.textContent= "yay, thanks! I can finally read :3"
  }
})