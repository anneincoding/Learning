const targetMap = new WeakMap();

function track(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set))
  }
  dep.add(effect);
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
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
track(product,'quantity');
effect();