// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/
let panacek = document.querySelector("#panacek");
let panacekSirka = 64 ;
let panacekVyska = 70 ;
let panacekX = parseInt(panacek.style.left);
let panacekY = parseInt(panacek.style.top);

let panacekXS = "500px" ;
let panacekYS = "500px" ;
panacek.style.left = panacekXS;
panacek.style.top = panacekYS;

let windowWidth = window.innerWidth ;
let windowHeight = window.innerHeight ;

mince = document.querySelector("#mince");
let minceSirka = 36;
let minceVyska = 36;
mince.style.top = (Math.floor(Math.random() * (windowHeight - 36))) + "px";
mince.style.left = (Math.floor(Math.random() * (windowWidth - 36))) + "px";
let minceX = parseInt(mince.style.left);
let minceY = parseInt(mince.style.top);


function go(event, step) {
	hudba.play();    
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
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	} else { 
	};
	console.log(!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY));
	//console.log(panacekX < minceX && (panacekX + panacekSirka) > (minceX + minceSirka) && panacekY < minceY && (minceY + minceVyska) < (panacekY + panacekVyska));
}