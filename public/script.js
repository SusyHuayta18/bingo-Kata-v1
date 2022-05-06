
// Se requiere una cartilla con numeros alaeatorios del 1 al 75

var rango = _.range(1,75);
    rango = _.shuffle(rango);

// Cartillas de 5 x5    
//cartilla jugador1
const cartilla1 = rango.slice(0, 25);

//cartilla jugador1
    rango = _.shuffle(rango);
const cartilla2 = rango.slice(0, 25);

//armar cartilla para la vista
function crearCartonHTML(var1,array)
{ 
  let parent = document.querySelector(var1)
  
  for(e of array)
  {
    let divcarton = document.createElement('div');
    divcarton.className = 'numero n'+e;
    divcarton.textContent = e;
    parent.appendChild(divcarton);
  }
}
crearCartonHTML('cartilla1',cartilla1);
crearCartonHTML('cartilla2',cartilla2);

function contadorBolillas()
{
  let totjugado1 = document.querySelectorAll('.cartonJugador .tachado').length;
  let totjugado2 = document.querySelectorAll('.cartonCpu .tachado').length;
  //si el jugador dice bingo
  if (totjugado1<75)
    alert('JUGADOR NUMERO 1, EL JUEGO AUN NO TERMINA');
  if(totjugado2<75)
    alert('JUGADOR NUMERO 2, EL JUEGO AUN NO TERMINA');
  if(totjugado1==75)
    alert('JUGADOR NUMERO 1 GANADOR');
  if(totjugado2==75)
    alert('JUGADOR NUMERO 2 GANADOR');
  
}

function jugar()
{  
  let bola = Math.floor(Math.random() * rango.length);
      bola = rango[bola];
  
  _.pull(rango,bola);  
  let divbola = document.querySelector('#bola');
      divbola.textContent = bola;
  let numero = document.querySelectorAll(`.n${bola}`);
    for (var i = 0; i < numero.length; ++i) {
     numero[i].classList.add('tachado');
    }
}
