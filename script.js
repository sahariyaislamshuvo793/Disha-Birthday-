const districts = {

dhaka:{
title:"Dhaka",
image:"images/dhaka.jpg",
details:"Capital of Bangladesh. Famous for Lalbagh Fort, Ahsan Manzil and Jatiya Sangsad Bhaban.",
map:"https://maps.google.com/?q=Dhaka"
},

chattogram:{
title:"Chattogram",
image:"images/chattogram.jpg",
details:"Bangladesh's main port city. Famous for Patenga Sea Beach, Foy's Lake and Batali Hill.",
map:"https://maps.google.com/?q=Chattogram"
},

cox:{
title:"Cox's Bazar",
image:"images/cox.jpg",
details:"Home of the world's longest natural sea beach and Marine Drive.",
map:"https://maps.google.com/?q=Cox's Bazar"
},

sylhet:{
title:"Sylhet",
image:"images/sylhet.jpg",
details:"Tea gardens, Jaflong, Ratargul Swamp Forest and beautiful hills.",
map:"https://maps.google.com/?q=Sylhet"
},

rajshahi:{
title:"Rajshahi",
image:"images/rajshahi.jpg",
details:"City of mangoes, silk industry and Puthia Rajbari.",
map:"https://maps.google.com/?q=Rajshahi"
},

rangpur:{
title:"Rangpur",
image:"images/rangpur.jpg",
details:"Known for Tajhat Palace and Carmichael College.",
map:"https://maps.google.com/?q=Rangpur"
},

khulna:{
title:"Khulna",
image:"images/khulna.jpg",
details:"Gateway to the Sundarbans and Mongla Port.",
map:"https://maps.google.com/?q=Khulna"
},

barishal:{
title:"Barishal",
image:"images/barishal.jpg",
details:"Land of rivers and floating guava market.",
map:"https://maps.google.com/?q=Barishal"
},

mymensingh:{
title:"Mymensingh",
image:"images/mymensingh.jpg",
details:"Bangladesh Agricultural University and Muktagacha Zamindar Bari.",
map:"https://maps.google.com/?q=Mymensingh"
},

sundarbans:{
title:"Sundarbans",
image:"images/sundarbans.jpg",
details:"Largest mangrove forest in the world and home of the Royal Bengal Tiger.",
map:"https://maps.google.com/?q=Sundarbans"
}

};

function showDistrict(id){

const d=districts[id];

document.getElementById("popup").style.display="block";

document.getElementById("photo").src=d.image;

document.getElementById("title").innerHTML=d.title;

document.getElementById("details").innerHTML=d.details;

document.getElementById("visit").onclick=function(){

window.open(d.map,"_blank");

};

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

document.getElementById("search").addEventListener("keyup",function(){

let text=this.value.toLowerCase();

for(let key in districts){

if(districts[key].title.toLowerCase().includes(text)){

showDistrict(key);

break;

}

}

});
