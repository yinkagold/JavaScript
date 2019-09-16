//get max
// const numbers = [1, 2, 3, 4];

// const max = getMax([1, 4]);

// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined; // check if array is empty

//   //   let max = array[0];
//   //   for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
//   //   return max;

//   return array.reduce((a, b) => (a > b ? a : b));
// }

// movies
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

const title = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);
console.log(title);
