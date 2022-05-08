
let price = 5;
let quantity = 2;
let total = 0;

// dependency to store our effects
let dep = new Set();

let effect = () => { total = price * quantity }; // code we want save

function track() { // save the code 
  dep.add(effect);
}

function trigger() { // run all the code we saved
  dep.forEach(effect => effect());
}

// track()
// effect()
// trigger()