/*
Cuanto es el X por ciento de X numero


Ejemplos:
tantoPorCiento(20,100)   // Devuelve 20
tantoPorCiento(43, 897)  // Devuelve 385.71
*/

function tantoPorCiento(porcentaje, numero) {
  const operacion = (numero * (porcentaje/100));
  const resultado = `El ${porcentaje}% de ${numero} es ${operacion}`;
  return resultado
}

console.log(tantoPorCiento(43, 897));
