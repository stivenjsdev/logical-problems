function reverse(text = []) {
  const size = text.length;
  const lastIndex = size - 1;
  const firstIndex = 0;

  const reverseArr = [];

  for (let i = lastIndex; i >= firstIndex; i--) {
    const element = text[i];
    reverseArr.push(element);
  }

  return reverseArr;
}

console.log(reverse([1,2,3,4,5,6,7,8,9,10]));
