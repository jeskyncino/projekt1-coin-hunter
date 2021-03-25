
// Panáček parametry
let panacek = document.querySelector("#panacek");
let panacekSirka = 64 ;
let panacekVyska = 70 ;

let panacekXS = "500px" ;
let panacekYS = "500px" ;
panacek.style.left = panacekXS;
panacek.style.top = panacekYS;

// Okno parametry
let windowWidth = window.innerWidth ;
let windowHeight = window.innerHeight ;

// Mince parametry
mince = document.querySelector("#mince");
let minceSirka = 36;
let minceVyska = 36;
mince.style.top = (Math.floor(Math.random() * (windowHeight - 36))) + "px";
mince.style.left = (Math.floor(Math.random() * (windowWidth - 36))) + "px";

function play (event) {
	if (event.key == "ArrowDown" || event.key == "ArrowUp" || event.key == "ArrowLeft" || event.key == "ArrowRight" ) {
		hudba.play(); 
	} else {} 
}

function go (event, step) {   
	if (event.key == "ArrowDown" && ((parseInt(panacek.style.top) + panacekVyska) < (windowHeight - step))) {
		panacek.style.top = parseInt(panacek.style.top) + step + "px" ;
		panacek.src = "obrazky/panacek.png";
		zjistiStav()
	} else if (event.key == "ArrowUp" && (parseInt(panacek.style.top) > step)) {
		panacek.style.top = parseInt(panacek.style.top) - step + "px" ;
		panacek.src = "obrazky/panacek-nahoru.png";
		zjistiStav()
	} else if (event.key == "ArrowLeft" && (parseInt(panacek.style.left) > step)) {
		panacek.style.left = parseInt(panacek.style.left) - step + "px" ;
		panacek.src = "obrazky/panacek-vlevo.png";	
		zjistiStav()
	} else if (event.key == "ArrowRight" && ((parseInt(panacek.style.left) + panacekSirka) < (windowWidth - step))) {
		panacek.style.left = parseInt(panacek.style.left) + step + "px" ;
		panacek.src = "obrazky/panacek-vpravo.png";
		zjistiStav()
	} else {}
}


function zjistiStav () {
	let panacekX = parseInt(panacek.style.left);
	let panacekY = parseInt(panacek.style.top);
	let minceX = parseInt(mince.style.left);
	let minceY = parseInt(mince.style.top);
	let score = document.querySelector("#score");
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		document.querySelector("#zvukmince").play();
		mince.style.top = (Math.floor(Math.random() * (windowHeight - 36))) + "px";
		mince.style.left = (Math.floor(Math.random() * (windowWidth - 36))) + "px";
		score.innerHTML = parseInt(score.innerHTML) + 1;
		zjistiVyhru()
	} else {};
}

function zjistiVyhru () {
	if (score.innerHTML === "5" ) {
		hudba.pause()
		document.querySelector("#zvukfanfara").play();
		alert("Gratuluji! Vyhrál jsi!")
		document.querySelector("body").removeAttribute("onkeyup")
	} else {}
}
