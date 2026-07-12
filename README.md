<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday</title>

<style>
body{
    margin:0;
    font-family:Arial,sans-serif;
    background:linear-gradient(135deg,#ff6ec4,#7873f5);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    color:white;
    text-align:center;
}

.card{
    background:rgba(255,255,255,0.15);
    padding:40px;
    border-radius:20px;
    backdrop-filter:blur(10px);
    box-shadow:0 0 20px rgba(0,0,0,.3);
}

h1{
    font-size:50px;
    animation:pop 1s infinite alternate;
}

p{
    font-size:22px;
}

button{
    padding:12px 25px;
    font-size:18px;
    border:none;
    border-radius:30px;
    background:#fff;
    color:#ff4081;
    cursor:pointer;
    margin-top:20px;
    font-weight:bold;
}

button:hover{
    background:#ffe6f2;
}

@keyframes pop{
    from{transform:scale(1);}
    to{transform:scale(1.1);}
}
</style>
</head>

<body>

<div class="card">
<h1>🎉 Happy Birthday! 🎂</h1>
<p>Wishing you happiness, success and endless joy.<br>Have a wonderful day! 💖</p>

<button onclick="showWish()">Click Me 🎁</button>
</div>

<script>
function showWish(){
    alert("🎂 Happy Birthday! May all your dreams come true! 🎉❤️");
}
</script>

</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday ❤️</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background:linear-gradient(135deg,#ff4b8b,#6a5cff);
    overflow:hidden;
    font-family:Arial,sans-serif;
    color:white;
    text-align:center;
}
h1{
    margin-top:80px;
    font-size:50px;
    animation:zoom 2s infinite alternate;
}
p{
    font-size:22px;
    margin-top:20px;
}
img{
    width:220px;
    height:220px;
    border-radius:50%;
    border:5px solid white;
    margin-top:20px;
}
.cake{
    font-size:90px;
    margin-top:20px;
}
.balloon{
    position:absolute;
    bottom:-100px;
    font-size:45px;
    animation:fly 10s linear infinite;
}
@keyframes fly{
0%{transform:translateY(0);}
100%{transform:translateY(-120vh);}
}
@keyframes zoom{
from{transform:scale(1);}
to{transform:scale(1.15);}
}
button{
    margin-top:25px;
    padding:12px 25px;
    border:none;
    border-radius:30px;
    font-size:18px;
    cursor:pointer;
}
</style>
</head>

<body>

<h1>🎉 Happy Birthday 🎉</h1>

<img src="photo.jpg" alt="Birthday">

<p>Wishing you a day full of love, happiness and smiles. ❤️</p>

<div class="cake">🎂</div>

<button onclick="playMusic()">▶ Play Music</button>

<audio id="music" loop>
<source src="birthday.mp3" type="audio/mpeg">
</audio>

<script>
function playMusic(){
document.getElementById("music").play();
}

function balloon(){
let b=document.createElement("div");
b.className="balloon";
b.innerHTML="🎈";
b.style.left=Math.random()*100+"vw";
b.style.animationDuration=(5+Math.random()*5)+"s";
document.body.appendChild(b);

setTimeout(()=>{
b.remove();
},10000);
}
setInterval(balloon,300);
</script>

</body>
</html>
