
// Panáček parametry
let panacek = document.querySelector("#panacek");
let panacekSirka = 64 ;
let panacekVyska = 70 ;

let panacekXS = "50%" ;
let panacekYS = "50%" ;
panacek.style.left = panacekXS;
panacek.style.top = panacekYS;

// Okno parametry
let windowWidth = window.innerWidth ;
let windowHeight = window.innerHeight ;

// Mince parametry
mince = document.querySelector("#mince");
let minceSirka = 36;
let minceVyska = 36;
mince.style.top = (Math.floor(Math.random() * (windowHeight - minceVyska))) + "px";
mince.style.left = (Math.floor(Math.random() * (windowWidth - minceSirka))) + "px";

function play (event) {
	if (event.key == "ArrowDown" || event.key == "ArrowUp" || event.key == "ArrowLeft" || event.key == "ArrowRight" ) {
		if (parseInt(document.querySelector("#score").innerHTML ) < 5) {
			hudba.play(); 
		}
	} else { hudba.pause();} 
}

function go (event, step) {   
	if (event.key == "ArrowDown" && ((parseInt(panacek.style.top) + panacekVyska) < (windowHeight - step))) {
		panacek.style.top = parseInt(window.getComputedStyle(panacek).getPropertyValue('top')) + step + "px" ;
		console.log;
		panacek.src = "obrazky/panacek.png";
		zjistiStav();
	} else if (event.key == "ArrowUp" && (parseInt(panacek.style.top) > step)) {
		panacek.style.top = parseInt(window.getComputedStyle(panacek).getPropertyValue('top')) - step + "px" ;
		panacek.src = "obrazky/panacek-nahoru.png";
		zjistiStav();
	} else if (event.key == "ArrowLeft" && (parseInt(panacek.style.left) > step)) {
		panacek.style.left = parseInt(window.getComputedStyle(panacek).getPropertyValue('left')) - step + "px" ;
		panacek.src = "obrazky/panacek-vlevo.png";	
		zjistiStav();
	} else if (event.key == "ArrowRight" && ((parseInt(panacek.style.left) + panacekSirka) < (windowWidth - step))) {
		panacek.style.left = parseInt(window.getComputedStyle(panacek).getPropertyValue('left')) + step + "px" ;
		panacek.src = "obrazky/panacek-vpravo.png";
		zjistiStav();
	}
}


function zjistiStav () {
	let panacekX = parseInt(panacek.style.left);
	let panacekY = parseInt(panacek.style.top);
	let minceX = parseInt(mince.style.left);
	let minceY = parseInt(mince.style.top);
	let score = document.querySelector("#score");
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		document.querySelector("#zvukmince").play();
		mince.style.top = (Math.floor(Math.random() * (windowHeight - minceVyska))) + "px";
		mince.style.left = (Math.floor(Math.random() * (windowWidth - minceSirka))) + "px";
		score.innerHTML = parseInt(score.innerHTML) + 1;
		zjistiVyhru()
	}
}

function zjistiVyhru () {
	if (score.innerHTML === "5" ) {
		hudba.pause();
		document.querySelector("#zvukfanfara").play();
		alert("Gratuluji! Vyhrál jsi!");
	}
}
