//write a program

let arr = [1, 2, 3, 4, 5]; //->[1,4,9,16,25]

let ans = arr.every((element) => {
  return element <= 5;
});

console.log(ans);
