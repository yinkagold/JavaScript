//using the concat and slice
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const splice = combined.slice();

// console.log(combined);
// console.log(splice);

//using functions
// const cars = [
//   { id: 1, brand: "Benz" },
//   { id: 2, brand: "Audi" },
//   { id: 1, brand: "Toyota" }
// ];

// const car = cars.find(function(cars) {
//   return cars.brand === "Audi";
// });

// usuing arrow functions

// const car = cars.find(cars => cars.brand === "Toyota");

// console.log(car);

// using the spread operator to combine two arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, "a", ...second];

// console.log(combined);

//iterating

// const numbers = [1, 2, 3];

// for (let number of numbers) console.log(number);

// numbers.forEach(function(number) {
//   console.log(number);
// });

// numbers.forEach(number => console.log(number));

// joiining arrays

// const message = "This is my lovely wife";
// // const joined = message.join(".");
// const split = message.split(" ");
// const joined = split.join("-");

// console.log(split);
// console.log(joined); // as used in urls

//Sorting arrays
// const numbers = [3, 1, 2];
// console.log(numbers.sort());
// sorting arrays with objects
// const cars = [{ id: 1, brand: "Nissan" }, { id: 2, brand: "Honda" }];
// cars.sort(function(a, b) {
//   if (a.brand < b.brand) return -1;
//   if (a.brand > b.brand) return 1;
// });

// console.log(cars);

// Testing elements
// const numbers = [1, 2, 3, -1];

// every() checks every numbers in the array
// some() checks from the first and returns
// const onePositive = numbers.some(function(numbers) {
//   return numbers >= 0;
// });

// console.log(onePositive);

// Filter

// const numbers = [1, 2, 4, -1];

// const filtered = numbers.filter(function(numbers) {
//   return numbers >= 0;
// });

// const filtered = numbers.filter(n => n >= 0);

// console.log(filtered);

//mapping array

// const numbers = [1, 2, 4, -2];

// // const filtered = numbers.filter(num => num >= 0);

// // const items = filtered.map(num => ({
// //   value: num
// // }));

// const items = numbers
//   .filter(num => num >= 0)
//   .map(num => ({
//     value: num
//   }))
//   .filter(obj => obj.value > 1);

// console.log(items);

//using reducing arrays

// const numbers = [1, 2, -1, 3, 4];

// // const sum = numbers.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue
// // );
// // console.log(sum);

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }
// console.log(sum);

// Exercise
//Array from range
// const numbers = arrayFromRange(-1, 4);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

//Includes

// const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(7));

// function includes(array, serachElement) {
//   for (let numbers of num) return num;
// }

// const numbers = [1, 2, 3, 4, 5, 1, 1, 1];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array)
//     if (!excluded.includes(element)) output.push(element);
//   return output;
// }

//Moving element

const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 3);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.log("Invalid offset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);
  return output;
}
