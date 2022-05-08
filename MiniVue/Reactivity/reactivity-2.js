
// deps Map to store all the deps of the object
// key: object property name
// value is a dep
const depsMap = new Map();

function track(key) {
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set))
  }
  dep.add(effect);
}

function trigger(key) {
  let dep = depsMap.get(key);
  if (dep) {
    dep.forEach(effect => effect());
  }
}

//e.g.
let product = {
  price: 5, // each one has a dep
  quantity: 2
};
let total = 0;
let effect = () => { total = product.price * product.quantity };
track('quantity');
effect();