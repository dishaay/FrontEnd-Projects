let p= document.querySelector('p'); 

function red(){
  p.style.color="red";
}

p.addEventListener("click", red)
/*how to remove an event listener? */ 
p.removeEventListener("click", red);

/* common events*/ 
let hi=document.querySelector('hi');
let input= document.querySelector('input'); 
console.log(input);
input.addEventListener('keypress',() =>{
  console.log("Typed");
}) /*everytime i type, it records it. that means this is listening for an event everytime i try to type something*/ 

/* how to make it dynamic like mei jo bhi likhu input mei toh woh record kar de*/ 

/* add event listener ke function mei addEventListener ("event", function(details){...}) this is the detail we are talking about, mann mei bithalo ki yeh humesha detial lete hai. 

input ke liye details mei data mei aata hai. */ 

input.addEventListener("input", function (details){ 
  if(details.data!==null){
    console.log(details.data);
  } /*only log when data is not null*/ 
})

// change event tab chalta hai jab aapka input select ya textarea mei change ho jaaye 

//  task is jab bhi mei device select karu toh woh console.log print karde ki device is selected. how to do it? 

let sel=document.querySelector("select");

sel.addEventListener("change",function(dets){
  console.log(dets.target.value);
})

let h3=document.querySelector('h3');

sel.addEventListener("change", function(){
  h3.textContent="Device Successfully Selected";
})

sel.addEventListener("change", function(dets){
  h3.textContent=`${dets.target.value} Device Successfully Selected`;
})

//mujhe mere h1 mei change chahiye, jaise hi mei kuch type karu, it should change it asap. so my approach would be, mera window hai right, there is no input field to type so i am typing on my window so my window is the goal here. 
/*i want my h3 to change*/ 

// let h1= document.querySelector('h1');
// window.addEventListener("keydown", function(dets){
//   h1.textContent= dets.key;
// })

//task is that whenever i click on my button, it should take a file as an input. 

let btn= document.querySelector('button'); 
let file=document.querySelector('#file');

btn.addEventListener('click', function(){
  file.click(); //meri file select ho gayi button ke through. f
})

file.addEventListener("change",function (dets){
  console.log(dets.target.files[0].name);
}) // yaha mene file jo mene choose ki, uska naam successfully display karwa dia. 

file.addEventListener("change",function(dets){ 
  btn.textContent= dets.target.files[0].name;
}) //the name of the button when selecting the file is successfully changed!

//but what happens when i press the cancel button while selecting the file. it throws an error in the console. lets fix that. 

file.addEventListener('change', function (dets){
  const rec_file=dets.target.files[0]; //file ka naam lia mene

  if(rec_file){
    btn.textContent=rec_file.name;
  }
})

//the next task is to work with forms, i have multiple fields in this form and the moment i submit it, ekk card bann jaaye yaha.

/*jaise hi mei form submit karti hu, vaise hi mera form reload ho jaayega, ab mujhe mana karna hai ki mera form reload hi nahi ho. 
mujhe meri form ki details leni hai uske submit hone se pehele, that is step a) i need to stop my file from submitting. we can do it by preventDefault. ab mera form submit hone se prevent ho jaayega successfully. step 2) is to get the value of all of my inputs submitted in my form. 
*/

let form= document.querySelector('#form');
let inputs= document.querySelectorAll('input');
form.addEventListener('submit',function(dets){
  dets.preventDefault();
  console.log(inputs);
})

//some more events. 1. mouseover and mouse move. mouseover means jiske upar mouse aata hai. 

let abcd=document.querySelector('.abcd'); 

abcd.addEventListener('mouseover',function(){
  abcd.style.backgroundColor="pink";
}) //color change ho gaya mere div ka 
 
abcd.addEventListener('mouseout',function(){
  abcd.style.backgroundColor="red";
}) //color change ho gaya mere div ka bahar jaate hi.

//i want my div to move wherever my cursor moves on the screen. 

// window.addEventListener("mousemove",function(dets){
//   abcd.style.top=dets.clientY + "px";
//   abcd.style.left=dets.clientX + "px";

// })

//what is the difference between keyup and keydown? READ IT.

//what is event object? A)target: jaha pe actually event hua, matlab click hua i.e. The exact element that was clicked! . B)type: event ka type, kis type ka event tha, kya woh click tha, mouseover tha, used when multiple events are happening on a single object. C)preventDefault(): used mostly when i am trying to submit a form. 

//event bubbling: jispe event aayega agar uss par listener nahi hua toh humara event uske parent pe listener dhundega par listener dhundega aisa karte karte upar ke taraf ke move karega 

// main div 
//  nav div 
//   links 
//   button - yaha pe event listener nahi hoga, toh woh ab upar dhundega! nav div pe dhundega. kyuki woh hi uska parent hai 

//i want ki jab mei koi bhi list pe click karu toh woh fatt se woh list ko strikethrough kar de , toh ab mei 5 li items pe agar yeh event listener daalu toh it would be waste, isse achaa, i can simply put the event listener on my parent i.e. ul and jaise hi mei li pe click karungi toh event bubbling ke vajah se woh parent ke paas jaayega and parent ke paas toh already class daala hai mene heh 

let ul=document.querySelector('ul'); 

ul.addEventListener('click',function(dets){
  console.log("hi");
  // dets.target.style.textDecoration="line-through"; way 1. 

  dets.target.classList.toggle("lt");
})

/*event capturing. 
rare concept. event bubbling ka ekdam ulta pattern hai. pattern neeche se upar nahi ab pattern upar se neeche jaayega , this is event capturing. 

whenever we click, 2 events are always raised. 

phase 1: event top level element se neeche ke taraf aayega 
phase 2: event raised element se parent ki taraf aayega

aur pehele phase 1 hi hota hai. yeh phase 1 tab hoga jab capture phase on rahega. and fir event bubbling hota hai.
 uske parent pe capture phase on hona chahiye. a.addEventLister("click", function(){...},true)
 jispe on hai sirf woh hi chalega, agar mene b and c pe true nahi daala hai toh woh nahi chalega. 
 jaha true nahi likha hai waha bubbling phase chalega. 
*/

input.addEventListener("input",function(){
  // console.log(input.value.length);
  let left = 20 - input.value.length
  h1.textContent=`total characters left: ${left}`;

  //mei nahi chahti ki mera character minus nahi ho. 

  if(left<0){
    h1.style.color="red";
  }
  else{
    h1.style.color="black";
  }
})