<h1>🎉 Happy Birthday Disha 🎉</h1>

<p>
🌸 Dear Disha, ❤️<br><br>

Today is all about you! 🎂<br>
May your birthday be filled with endless happiness,
beautiful smiles, sweet memories, and lots of love. 💖<br><br>

May Allah bless you with good health, success,
peace, and everything your heart desires. 🤲✨<br><br>

Keep smiling, keep shining,
and always stay the wonderful person you are. 🌹<br><br>

🎈 Happy Birthday, Disha! 🎉❤️
</p>
<img id="1783603214477.jpg" src="">

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday ❤️</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{
font-family:Arial,sans-serif;
background:linear-gradient(135deg,#ff4e8a,#7b5cff);
display:flex;
justify-content:center;
align-items:center;
height:100vh;
overflow:hidden;
color:white;
text-align:center;
}

.page{
width:100%;
padding:20px;
}

h1{
font-size:45px;
margin-bottom:20px;
}

p{
font-size:20px;
margin-bottom:25px;
line-height:1.6;
}

button{
padding:15px 35px;
font-size:20px;
border:none;
border-radius:30px;
cursor:pointer;
background:white;
color:#ff2d75;
font-weight:bold;
}

#gallery{
display:none;
}

img{
width:260px;
height:320px;
border-radius:20px;
object-fit:cover;
box-shadow:0 0 20px white;
}

.caption{
margin-top:20px;
font-size:24px;
}

.balloon{
position:absolute;
bottom:-100px;
font-size:35px;
animation:fly 8s linear infinite;
}

@keyframes fly{
0%{transform:translateY(0);}
100%{transform:translateY(-120vh);}
}
</style>
</head>

<body>

<div id="welcome" class="page">
<h1>🎉 Happy Birthday 🎉</h1>

<p>
Today is your special day ❤️<br>
May your life be filled with happiness,<br>
love and endless smiles.<br><br>
Happy Birthday My Dear! 🎂
</p>

<button onclick="start()">Continue ❤️</button>
</div>

<div id="gallery" class="page">
<img id="photo" src="1.jpg">

<div class="caption" id="text">
Beautiful Memories ❤️
</div>
</div>

<script>

let images=[
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg"
];

let captions=[
"Our Beautiful Moment ❤️",
"Your Sweet Smile 😊",
"Best Memory Together 💖",
"Happy Birthday My Love 🎂"
];

let i=0;

function start(){
document.getElementById("welcome").style.display="none";
document.getElementById("gallery").style.display="block";

setInterval(()=>{
i=(i+1)%images.length;
document.getElementById("photo").src=images[i];
document.getElementById("text").innerHTML=captions[i];
},3000);

setInterval(balloon,300);
}

function balloon(){
let b=document.createElement("div");
b.className="balloon";
b.innerHTML="🎈";
b.style.left=Math.random()*100+"vw";
document.body.appendChild(b);

setTimeout(()=>{
b.remove();
},8000);
}

</script>

</body>
</html>
