/*
Dibujar un cuadrado hueco con asteriscos

Ejemplos:
cuadrado(4)

devuelve:
****
*  *
*  *
****
*/

function drawSquare(number = 4) {
  let square = "";
  for (let x = 0; x < number; x++) {
    for (let y = 0; y < number; y++) {
      if (x === 0 || x === number - 1) {
        square += "*";
      } else if (y === 0 || y === number - 1) {
        square += "*";
      } else {
        square += " ";
      }
    }
    square += "\n";
  }

  return square;
}

console.log(drawSquare(6));
