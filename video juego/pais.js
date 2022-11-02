var ca = document.getElementById("ciudad_abandonada");
var papel = ca.getContext("2d");
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};


var fondo = {
	url: "ciudad abandonada.jpg",
	cargaOK: false
};

var bola_de_fuego = {
	url: "bola_de_fuego.png",
	cargaOK: false,
	x : [],
	y : []
};

var predator = {
	url: "predator.png",
	cargaOK: false,
	x : 0,
	y : 0
};

var tanque = {
	url: "tanque.png",
	cargaOK: false,
	x : [],
	y : []
};


var cantidad = aleatorio(5,15);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
bola_de_fuego.imagen = new Image();
bola_de_fuego.imagen.src = bola_de_fuego.url;
bola_de_fuego.imagen.addEventListener("load", cargarbola_de_fuego);

predator.imagen = new Image();
predator.imagen.src = predator.url;
predator.imagen.addEventListener("load", cargarpredator);

tanque.imagen = new Image();
tanque.imagen.src = tanque.url;
tanque.imagen.addEventListener("load", cargartanque);

function cargarFondo ()
{
	fondo.cargaOK = true;
	dibujar();
}

 function cargarbola_de_fuego ()
{
	bola_de_fuego.cargaOK = true;
	dibujar();
}

function cargarpredator ()
{
	predator.cargaOK = true;
	dibujar();
}

function cargartanque ()
{
	tanque.cargaOK = true;
	dibujar();
}

function dibujar()
{

	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	if(bola_de_fuego.cargaOK)
	{
		for( var v = 0; v < cantidad; v++)
		{
			var x = (aleatorio (0,7)*100);
			var y = (aleatorio (0,7)*100);
			bola_de_fuego.x[v] = x;
			bola_de_fuego.y[v] = y;
			papel.drawImage(bola_de_fuego.imagen , x , y);
			console.log(cantidad);
		}

	}
	if(predator.cargaOK)
	{
		var x = (aleatorio (0,7)*150);
		var y = (aleatorio (0,7)*150);
		predator.x = 0;
		predator.y = 0;
		papel.drawImage(predator.imagen , x , y);

	}
	if(tanque.cargaOK)
	{
		for(var p =0; p <cantidad ; p++)
		{
			var x = (aleatorio (0,7)*150);
			var y = (aleatorio (0,7)*150);
			tanque.x [p] = x;
			tanque.y [p] = y;
			papel.drawImage(tanque.imagen , x , y);
			console.log(cantidad);
		}

	}

}


function aleatorio(min , maxi)
{
	var resultado;
	resultado =  Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

function moverpredator(x,y)
{
	papel.drawImage(predator.imagen,x,y);
}

function dibujarOtraVez()
{
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen , 0 , 0);
	}
	 if(bola_de_fuego.cargaOK)
	 {
	 	for( var v = 0; v < cantidad; v++)
		{
			papel.drawImage(bola_de_fuego.imagen , bola_de_fuego.x[v] , bola_de_fuego.y[v]);
			console.log(cantidad);
		}
	 }
	 if(tanque.cargaOK)
	 {
	 	for( var p = 0; p < cantidad; p++)
		{
			papel.drawImage(tanque.imagen , tanque.x[p] , tanque.y[p]);
			console.log(cantidad);
		}
	 }
}

document.addEventListener("keydown", moverTecla);
	function moverTecla(evento)
	{
			var movimiento = 4;
			switch (evento.keyCode)
		{
			case teclas.UP:
				dibujarOtraVez();
				moverpredator(predator.x,predator.y);
				predator.y = predator.y - movimiento;
			break;
			case teclas.DOWN:
				dibujarOtraVez();
				moverpredator(predator.x,predator.y);
				predator.y = predator.y + movimiento;
			break;
			case teclas.LEFT:
				dibujarOtraVez();
				moverpredator(predator.x,predator.y);
				predator.x = predator.x - movimiento;
			break;
			case teclas.RIGHT:
				dibujarOtraVez();
				moverpredator(predator.x,predator.y);
				predator.x = predator.x + movimiento;
			break;
			default:
				console.log("Otra tecla");
			break;
		}
	}
