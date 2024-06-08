function coincidences(text = "", wordToSearch = "") {
  // clean the text
  const cleanTextArr = text
    .toLowerCase()
    .replace(/[.,;:!]/gi, "")
    .split(/[ ,;]+/);

  // create a coincidences obj to store the words and their counts
  const coincidencesMap = {};

  for (const word of cleanTextArr) {
    if (!coincidencesMap[word]) {
      coincidencesMap[word] = 1;
    } else {
      coincidencesMap[word]++;
    }
  }

  // console.log(coincidencesMap);
  return coincidencesMap[wordToSearch] || 0;
}

const response = coincidences(
  "Hi, I am Stiven and this is my home. welcome Home Stiven! home",
  "home"
);

console.log(response);
