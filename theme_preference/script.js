//laptop ke dark ya light mode pe website ko chalana. 

function setDarkOrLight(){
if(window.matchMedia('(prefers-color-scheme: dark)').matches ){
  document.body.classList.add('dark');
  document.body.classList.remove('light');
}//agar match kia toh dark mode hai varna light mode hai. 

else{
  if(window.matchMedia('(prefers-color-scheme: light)').matches ){
  document.body.classList.add('light');
  document.body.classList.remove('dark');
}
}
}

if(localStorage.getItem('theme')){
  document.body.classList.add(localStorage.getItem('theme'));
}
else{
  setDarkOrLight();
}

let btn=document.querySelector('button');

btn.addEventListener("click",function(){
  if(document.body.classList.contains("dark")){
    document.body.classList.remove("dark");
    document.body.classList.add('light');

    localStorage.setItem("theme", "light");
  }

  else{
    document.body.classList.remove('light'); 
    document.body.classList.add('dark');
    localStorage.setItem("theme", "dark");
  }
})
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function(){
  setDarkOrLight();
})

//mene jab website band kia toh woh light mode mei tha but jaise hi mene website vapas open kia toh website mujhe dark mode mil rha hai , toh mujhe uska yeh jo theme hai usko save karna hai and i can do it with the help of localStorage.


//why only strings work in localStorage? localStorage ka jo api hai woh sirf strings store kar sakta hai, it cannot store anything else strings. 