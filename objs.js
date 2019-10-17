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
/*const movies = [
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
*/
// object using factories
/*
function creatCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}
const circle = creatCircle(1);
// constructor
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const another = new Circle(1);

// Primitive and reference
let x = 10;
let y = x;

x = 20;

// Reference
let x = { value: 10 };
let y = x;

x.value = 20;


let number = 10;

function increase(number) {
  number++;
}
increase(number);
console.log(number);


[1, 2, 3, 4, 5].forEach(function(elem, index, array) {
  console.log(elem);
});

let myNum = [1, 2, 3, 4, 5];

for (var i = 0; i < myNum.length; i++) {
  console.log("Numbers :" + myNum[i]);
}

var person = { name: "Bill", age: 50 };
var anotherPErson = {
  name: "Mary",
  age: "51"
};
person.favoriteColor = "blue";

console.log(anotherPErson.name);
console.log(anotherPErson["name"]);
console.log(anotherPErson);
delete anotherPErson.age;
console.log(anotherPErson);

// tenary operator
const obj = { name: "Yinka", color: "blue" };
const hair = obj.hair;

const hair_again = obj.hair || "has some";
hair_again;

obj.hair ? obj.hair : "deafult hair value";

//scoping
function foo(x) {
  var xPlusOne = x + 1;

  function bar(y) {
    console.log(x);
    console.log(xPlusOne);
    console.log(y);
  }
  bar(xPlusOne + x);
}

foo(7);
