function slika(a)
{
switch(a){
	case 1: document.getElementById("zvuk").src = "./audio/bubnjevi.ogg";
	break;
	case 2: document.getElementById("zvuk").src = "./audio/violoncelo.mp3";
	break;
	case 3: document.getElementById("zvuk").src = "./audio/orgulje.mp3";
	break;
	case 4: document.getElementById("zvuk").src = "./audio/vibrafon.ogg";
	break;
	case 5: document.getElementById("zvuk").src = "./audio/klavir.mp3";
	break;
	case 6: document.getElementById("zvuk").src = "./audio/gitara.mp3";
}
zvuk.play();
}
function BubnjeviOpen()
{
	window.open("https://sr.wikipedia.org/wiki/%D0%91%D1%83%D0%B1%D0%B0%D1%9A");
}

function ViolonceloOpen()
{
	window.open("https://sr.wikipedia.org/wiki/%D0%92%D0%B8%D0%BE%D0%BB%D0%BE%D0%BD%D1%87%D0%B5%D0%BB%D0%BE");
}

function OrguljeOpen()
{
	window.open("https://sr.wikipedia.org/wiki/%D0%9E%D1%80%D0%B3%D1%83%D1%99%D0%B5");
}

function VibrafonOpen()
{
	window.open("https://sr.wikipedia.org/wiki/%D0%92%D0%B8%D0%B1%D1%80%D0%B0%D1%84%D0%BE%D0%BD");
}

function KlavirOpen()
{
	window.open("https://sr.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B0%D0%B2%D0%B8%D1%80");
}

function GitaraOpen()
{
	window.open("https://sr.wikipedia.org/wiki/%D0%93%D0%B8%D1%82%D0%B0%D1%80%D0%B0");
}