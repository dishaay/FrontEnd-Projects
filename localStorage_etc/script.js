//localStorage aapke browser mei sab kuch store karta hai and sessionStorage is different, if you save any data in session , when you close it woh chala jaata hai , cookies can handle less data but local storafe and session storage handles data around 5 MB. 

//localStorage - aapke browser ke andar data store karna jo ki band hone par bhi delete nahi hota hai. tab hi hatega jab aapko udana hai. 
// 1. how to store 2. fetch the data 3. remove the data 4. update the data 

localStorage.setItem("name","harsh"); //this is how u store the data, name mei harsh store karna hai


let val= localStorage.getItem("name"); //mei item ko manga raha hu. fetch kia mene data ko 

localStorage.removeItem("name"); //mei data ko remove kar raha hu bass

localStorage.setItem("name","disha");
localStorage.clear();
//sessionStorage - aapka data temporarily store karta hai , matalb tab band hua toh data gaya 

sessionStorage.setItem("name","disha"); //everything is same as localStorage.jaise hi mei tab band kar dunga toh mera session chala jaayege, used in backend or temporarily storing the data. 

sessionStorage.clear();//live server is re-adding the data again that's why your JS tends to re-run it and store it again.


//cookies - yeh bhi data store karta hai and aapka data browser ke cookies naam ki property mei save hota hai , this cookie concept kamm data/ light data ke liye hota hai. 

//this is used to store small data. mainly 4KB , but in sessionStorage and localStorage can store data upto 5 MB. cookies mei jo bhi data store karoge woh data page reload par automatically server par jaayega. 

document.cookie="email=disha@gmail.com"; //cookie set ho gaya

document.cookie ="age=20";

//in local storage, when you try to store anything aside a string, it wont store it properly.

//localStorage mei hum arrays and objects nahi store  kar sakte bass string store kar sakte  hai. to store an array or an object, you simply convert it to a string by using JSON.stringify(); 


localStorage.setItem("friends",JSON.stringify(["disha", "bhoomi","rhhea"]));

//jab localstorage se data vapas laate hai toh string milta hai but agar mujhe ditto array ya object chahiye toh mei JSON.parse() karunga.

localStorage.getItem("friends");//isme string milega 

let fr= JSON.parse(localStorage.getItem("friends"));// yeh ab mujhe uska real form nikaal ke dega.
console.log(fr);


//PRACTICE THINGS.