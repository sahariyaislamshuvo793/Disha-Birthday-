const districts = {

dhaka:{
name:"Dhaka",
image:"images/dhaka.jpg",
details:"Capital of Bangladesh. Famous for Lalbagh Fort, Ahsan Manzil, National Parliament and busy city life."
},

cox:{
name:"Cox's Bazar",
image:"images/cox.jpg",
details:"Home of the world's longest natural sea beach. Popular for Inani Beach, Himchari and Marine Drive."
},

sylhet:{
name:"Sylhet",
image:"images/sylhet.jpg",
details:"Tea gardens, Ratargul Swamp Forest, Jaflong and beautiful green hills."
},

rangpur:{
name:"Rangpur",
image:"images/rangpur.jpg",
details:"Known for Tajhat Palace, Carmichael College and delicious Rangpur Shataranji."
},

rajshahi:{
name:"Rajshahi",
image:"images/rajshahi.jpg",
details:"Famous for mangoes, silk industry and Puthia Rajbari."
},

khulna:{
name:"Khulna",
image:"images/khulna.jpg",
details:"Gateway to the Sundarbans, the largest mangrove forest in the world."
},

barishal:{
name:"Barishal",
image:"images/barishal.jpg",
details:"Known as the land of rivers. Floating guava market is very popular."
},

chittagong:{
name:"Chattogram",
image:"images/chittagong.jpg",
details:"Port city of Bangladesh. Patenga Sea Beach, Foy's Lake and Batali Hill."
},

mymensingh:{
name:"Mymensingh",
image:"images/mymensingh.jpg",
details:"Known for Bangladesh Agricultural University and Muktagacha Zamindar Bari."
},

sundarban:{
name:"Sundarbans",
image:"images/sundarban.jpg",
details:"Largest mangrove forest in the world and home of the Royal Bengal Tiger."
}

};

function showDistrict(id){

document.getElementById("popup").style.display="block";

document.getElementById("photo").src=districts[id].image;

document.getElementById("title").innerHTML=districts[id].name;

document.getElementById("details").innerHTML=districts[id].details;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

for(let key in districts){

if(districts[key].name.toLowerCase().includes(value)){

showDistrict(key);

break;

}

}

});
