const numbers = [1, 2, 3, 4];
let another = numbers;

//Sol 2
numbers.length = 0;

// Sol 3
//numbers.splice(0, numbers.length);

//sol 4
//while (numbers.length > 0) numbers.pop();

console.log(numbers);
