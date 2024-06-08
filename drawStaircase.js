/*
n = 4:
     #
    ##
   ###
  ####
*/

function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    console.log(
      new Array(n - i).fill(" ").join("") + 
      new Array(i).fill("#").join("")
    );
  }
}

staircase(6);

function staircase2(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    console.log(
      " ".repeat(n - i) + 
      "#".repeat(i)
    );
  }
}
