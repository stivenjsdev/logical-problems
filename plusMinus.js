function plusMinus(arr) {
  const arrSize = arr.length;
  const positive = arr.reduce((acc, cur) => (cur > 0 ? acc + 1 : acc), 0);
  const negative = arr.reduce((acc, cur) => (cur < 0 ? acc + 1 : acc), 0);
  const zeros = arr.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);

  console.log((positive / arrSize).toPrecision(6));
  console.log((negative / arrSize).toPrecision(6));
  console.log((zeros / arrSize).toPrecision(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);