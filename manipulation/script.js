/* i want to change the value of my h1*/

let h1 = document.querySelector("h1");
console.dir("h1");
h1.textContent = "hii dishaa :3";

/* innerText, innerHTML, jo mujhe manipulate karna hai mujhe usse select karna hai and then woh select karke usko manipulate karna hai 

innertext- text badalta hai 
textContent- bhi same woh hi kaam karta hai jo innerText karta hai. 
innerHTML- text nahi badalta hai but html badalta hai. 

h1.innerHTML- h1 ke andar waala html badalta hai. */

h1.innerHTML = "bro hi";
console.dir(h1);

/* manipulating my attribute part 1*/

let a = document.querySelector("a");
console.dir(a);
/* yaha mere href ki value is same as the link of my page. matlab agar mere href ki value kuch nahi hogi toh it will be same as the value of my link. lets manipulate the attribute i.e. href ki value */

a.href = "www.google.com";

/* manipulating the value of attribute part 2*/

a.setAttribute("href", "www.instagram.com");

/* element.setAttribute ("kya select kar rahi hu mei", "uski value")*/

let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1773332585788-9104ec6f38ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);

/* kya change karna hai, uski updated value.*/

a.getAttribute("href");

/*but yeh print nahi hogi*/

console.log(a.getAttribute("href"));
a.removeAttribute("href");

/* Dynamic DOM manipulation*/

/* createElement- i will create an h2 element */

let h2 = document.createElement("h2");
h2.textContent = "HI DISHA";
document.body.append(h2);

/* remove element*/
h1.remove(); /* remove ho gaya*/

let p = document.createElement("p");
p.textContent = "hi dishaaaaaa";
document.querySelector("div").appendChild(p);

p.style.color = "pink";
p.style.backgroundColor = "black";
p.style.fontFamily = "helvetica";

/* adding a class to my h1*/

h1.classList.add("hulu"); /*adds the class*/
h1.classList.remove("hulu"); /*removes the class*/

/*toggle matlab hata dega agar lagi rahegi, laga degi agar hata hai toh. this is how toggle works. */

/* PRACTICE SESSION
 1.  WHAT IS DOM- AAP JO BHI HTML ELEMENT BANATE HO WOH EKK NODE JAISE ACT KARTA HAI 

 2. NODES KITNE HOTE HAI : ELEMENT NODE, TEXT NODE, ALAG ALAG HTML KE NODES HOTE HAI. 

 3. WHAT IS THE DIFFERENCE BETWEEN AN ELEMENT NODE, TEXT NODE,ATTRIBUTE
 <P> THIS IS DISHA </P>. THIS IS THE ANSWER

 element node ka children ho sakta hai but text node ka kabhi bhi children nahi ho sakta. 

 4. WHAT IS THE DIFFERENCE BETWEEN GETELEMENTBYID AND QUERYSELECTOR. 
  GETELEMENTBYID- BASS AAP SE ID KA NAAM MAANGTA HAI. 
  QUERYSELECTOR- AAP SE TAG, ID, ATTRIBUTE, CLASS, THIS IS UNIVERSAL AND MULTIPUPRPOSE. ID MEI AAPKO # YEH DAALNA PADEGA. CLASS MEI AAPKO . DAALNA PADEGA.

 5. WHAT DOES GETELEMENTBYCLASSNAME RETURNS? IS IT AN ARRAY? 

 IT ALWAYS RETURNS HTMLCOLLECTION. 
*/

/*TASK 1: SELECT THE HEADING OF A PAGE BY ID AND CHANGE ITS TEXT TO WELCOME TO SHERYIANS. */ 

let sher= document.createElement('h3');
sher.textContent="welcome to sheryians"; 
document.querySelector('body').append(sher); 

/* TASK 2: SELECT ALL <LI> ELEMENTS AND PRINT THEIR TEXT USING A LOOP */ 

let liz= document.querySelectorAll('li'); 

liz.forEach(function (val){
  console.log(val.textContent);
});

for(let i=0;i<liz.length;i++){
  console.log(liz[i].textContent);
} /*another way of writing it. */

/* when should u use textcontent and innertext? textcontent is the modern way to change the text. it will change even the hidden text . innertext is basically the old way of changing the content, bass woh hi content change karega jo visible so it is always recommended to use textcontent */ 

/*  TASK 3: SELECT A PARAGRAPH AND REPLACE ITS CONTENT WITH : DISHA IS SO COOL */

let p2= document.querySelector('#paragraph'); 

p2.textContent= "disha is so cool omg";

/* set attribute is basically used for changing the value of the attribute which i want*/ 

/* TASK 4: SELECT A LINK AND UPDATE ITS HREF */ 

let link= document.querySelector('#link2');
link.setAttribute("href", "www.disha.com");

let div= document.querySelector('div'); 
div.setAttribute("title", "some info");

/* remove the disabled attribute from a button*/ 

let btn= document.querySelector('button');
btn.removeAttribute('disabled');

/* what does createElement() do? what does it return? 

IT RETURNS AN HTML NODE.*/  

/* TASK: CREATE A NEW LIST ITME <LI> NEW TASK </LI> AND ADD IT TO THE END OF THE UL */ 

let newL= document.createElement('li'); 
newL.textContent="new list"; 
document.querySelector('ul').appendChild(newL);

/* task: create a new image element with a placeholder source and add it at the top of a div */ 

let newimg= document.createElement('img'); 
newimg.setAttribute('alt', 'idk'); 
newimg.setAttribute('src', 'https://s.yimg.com/fz/api/res/1.2/d68wFWkCf3yXQBlteFh.Qg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cT04MDt3PTUxMg--/https://s.yimg.com/am/60d/0a47ed8dd4ec70af8b2ce5f29b5bfcfd'); 

div.prepend(newimg);

/* task 09: select the first item in the list and delete it from the list */ 

let ull= document.querySelector('ul'); 
let lii= document.querySelectorAll('li'); 


/* task 10: add the highlight class to even number on my list */ 
let lii1= document.querySelectorAll('li'); 

console.log(lii1);
for (let i=1;i<lii1.length;i += 2){
  lii1[i].classList.add('highlight');
}

lii1.forEach(val => {
  val.style.fontSize= "5px";
}
)