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
