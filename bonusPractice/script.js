let container = document.querySelector('.cards-row');
let input = document.querySelector('input');

const users = [
  {
    name: "Radha Rani",
    pic: "https://i.pinimg.com/736x/ae/49/c9/ae49c935cf438ee845350c66be27d591.jpg",
    bio: "Embodiment of divine love and devotion 💖"
  },
  {
    name: "Shri Krishna",
    pic: "https://i.pinimg.com/1200x/b3/7a/ed/b37aed612ad9a6fa23bae1d7edb938ad.jpg",
    bio: "The supreme charmer, flute bearer, and protector of dharma 🎶"
  },
  {
    name: "Govinda",
    pic: "https://i.pinimg.com/736x/29/60/1f/29601f76d2a21cb458441c1b308597be.jpg",
    bio: "Protector of cows and giver of joy 🐄"
  },
  {
    name: "Gopala",
    pic: "https://i.pinimg.com/736x/a8/e3/24/a8e324b7e50e04d5a4c7a59a74a142a0.jpg",
    bio: "The playful child who steals butter and hearts 🧈"
  },
  {
    name: "Madhava",
    pic: "https://i.pinimg.com/1200x/09/89/d5/0989d53dcf6e24359491d2b20187f7e2.jpg",
    bio: "Consort of Radha, symbol of eternal spring 🌸"
  },
  {
    name: "Shyamsundar",
    pic: "https://i.pinimg.com/1200x/60/e3/fe/60e3fe267825acbc83aca60421a6046a.jpg",
    bio: "The dark, beautiful one who enchants all 💙"
  },
  {
    name: "Radhika",
    pic: "https://i.pinimg.com/736x/cf/66/a4/cf66a42b83957205b900ebcd3de16c88.jpg",
    bio: "The queen of Vrindavan and pure devotion 🌼"
  },
  {
    name: "Vrindavan Chandra",
    pic: "https://i.pinimg.com/736x/25/21/82/252182e3a0c7fbd4a2904c435b8d07f0.jpg",
    bio: "Moon of Vrindavan, shining with divine grace 🌙"
  }
];

function showUsers(arr){ 
  container.innerHTML = ""; // clear before rendering

  arr.forEach(function(user, index){

    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.src = user.pic;
    img.classList.add('bg-img');

    let num = document.createElement('span');
    num.classList.add('card-num');
    num.textContent = String(index + 1).padStart(2, '0');

    let content = document.createElement('div');
    content.classList.add('content');

    let tag = document.createElement('span');
    tag.classList.add('card-tag');
    tag.textContent = "Sacred";

    let h3 = document.createElement('h3');
    h3.textContent = user.name;

    let p = document.createElement('p');
    p.textContent = user.bio;

    content.append(tag, h3, p);
    card.append(img, num, content);
    container.append(card);
  });
}

// initial load
showUsers(users);


let search = document.querySelector('input');

search.addEventListener("input", function (){

  let searchS = search.value.toLowerCase();

  let filtered = users.filter(function(user){
    return user.name.toLowerCase().includes(searchS);
  });
  

  showUsers(filtered);

  // ❗ handle "not found"
  let existingMsg = document.querySelector('.sep');
  if(existingMsg) existingMsg.remove();

  if(filtered.length === 0){
    let p = document.createElement('p'); 
    p.textContent = "User not found";
    p.classList.add('sep');
    document.body.append(p); 
  }
});

  

