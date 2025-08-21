const filterArray = (numbers, value) => {
  // const biggerNumber = []
  // for (const number in number) {
  //   if (number > value)
  //     biggerNumber.push(number)
  // }
  // Якщо треба конерктно перебирати елементи
  // return biggerNumber

  return numbers.filter(n => n > value);
};

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
