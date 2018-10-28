// function to return max from 2 numbers
function max(a, b) {
    return (a > b) ? a : b;
}
console.log(max(5,2));

// // function to return true if landscape or false if portrait 
function isLandscape(width, height) {
    return (width > height);
}
console.log(isLandscape(400,200));

// // fizzBuzz
// // Divisible by 3 => Fizz
// // Divisble by 5 => Buzz
// // Divisible by both 3 and 5 => FizzBuzz
// // Not divisible by 3 or 5 => input
// // NOt a number => 'Not a number'
const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    if (input % 3 === 0) return 'Fizz';   
    if (input % 5 === 0) return 'Buzz';
    return input;
}

// // speed limit = 70
// // 5 -> 1 point 
// // Math.floor(1.3)
// // 12 points -> liscense suspended 

checkSpeed(130);
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint){
        console.log('Ok');
        return;
    }
    const points =  Math.floor((speed - speedLimit) / kmPerPoint) ;
    if (points >= 12)
        console.log('License suspended ');
    else
        console.log('Points', points)
}

// Show whether number is even or odd 

showNumber(10);

function showNumber(limit) {
    for ( let i = 0; i <= limit; i++){
       const message = (i % 2 === 0 ) ? 'EVEN' : 'ODD';
       console.log(i, message);
    }

}


// count the truthy value in an array 
const array = [0, null, undefined, '', 2, 3, 4];

console.log(countTruthy(array))
function countTruthy(array) {
    let count = 0;
    for (let value of array)
    if (value)
        count ++;
    return count;
}

// show string properties properties 

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
        console.log(key, obj[key]);
}


// sum of multiples of 3 and 5
// Multiples of 3:3,6,9
// Multipes of 5: 5, 10

console.log(sum(10));

function sum(limit) {
    let sum = 0;
   
    for (let i = 0; i<=limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
        sum += i;
   
    return sum;
}

//Grades 
// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
   
    const average =  calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return'B';
    return 'A'; 
}   

function calculateAverage(array) {
    let sum = 0;
    for ( let value of array)
        sum += value;
   return sum / array.length;
}

// Stars

showStars(10);

function showStars(rows) {
    
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
   
}

//Show Primes

showPrimes(20);

function showPrimes(limits) {
    for (let number = 2; number<=limits; number++) 
      if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) 
            return false;
    return true;
}
