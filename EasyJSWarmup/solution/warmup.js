// Constants
let numbers = [1,2,3,4,5,6,7,8,9,10];
const people = ['Kookla','Fran','Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda'],
};

// for loop

function forLoop(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//while loop
function whileLoop(arr) {
  let array = [...arr];
  while( array.length ) {
    console.log(array.shift());
  }
}

// map function
function map(arr,cb) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
}

// filter function
function filter(arr,cb) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if ( cb(arr[i]) ) { newArray.push(arr[i]); }
  }
  return newArray;
}

// reduce function
function reduce(arr, cb, newThing) {
  for(let i = 0; i < arr.length; i++) {
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

// running each of the solutions for the basic functions created

console.log('forLoop()');
forLoop(numbers);

console.log('whileLoop()');
whileLoop(numbers);

console.log('map()');
let squares = map(numbers, (val=>val * val));
console.log({squares});

console.log('filter()');
let odds = filter(numbers, (val => !!(val % 2)));
console.log({odds});

console.log('reduce()');
let sum = reduce(numbers, (acc,num) => {
  acc += num;
  return acc;
},0);

console.log({sum});


// array manipulation exercise

const state = {people,stuff};
let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars:[...stuff.cars, 'GMC']};
let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff:{...stuff, cars:[...stuff.cars, 'GMC']} };

console.log({people});
console.log('------------------\n\n');

console.log({newPeople});
console.log('------------------\n\n');

console.log({stuff});
console.log('------------------\n\n');

console.log({newStuff});
console.log('------------------\n\n');

console.log({state});
console.log('------------------\n\n');

console.log({newState});
console.log('------------------\n\n');