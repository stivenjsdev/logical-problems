/*
Dados 2 numeros, devolver cuantos numeros IMPARES
hay entre ellos (contandolos tambien).

Ejemplo:
impares(1, 100) // devuelve: 49
*/

function countOddNumbers(start, end) {
  // Asegurarse de que start sea menor que end
  const [min, max] = start < end ? [start, end] : [end, start];

  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  const oddNumbers = range.filter(num => num % 2 !== 0);

  // console.log(oddNumbers);
  return oddNumbers.length;
}

console.log(countOddNumbers(1,100));