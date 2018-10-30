// Factory function 
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    };
}

const circle = createCircle(1);
console.log(circle);

//Constructor function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const myCircle = new Circle(1);
console.log(myCircle);

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
// getting access to properties and methods in an obj
for (let key in circle)
    console.log(key, circle[key]);

// // for 'of' only works for arrays and maps not objects(is not iterable)
// //method: Object.keys returns arrays and arrays are iterable  
for (let key of Object.keys(circle))
    console.log(key, circle[key]);

// // gives the key & value
for (let entry of Object.entries(circle))
    console.log(entry)

// cloning properties and obj
// using the assign
const another = Object.assign({}, circle);

// using the spread operator
const  another = { ...circle };
console.log(another);