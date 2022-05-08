/*
when the properties are accessed (Get), call 「track」
when the properties are changed (Set), call 「trigger」
Vue2: Object.defineProperty
Vue3: ES6 Reflect & ES6 Proxy
*/
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

let product = { price:5 , quantity: 2}

// ways to print out a property on an object
// dot notation
console.log(product.quantity)
// bracket notation
console.log(product['quantity'])
// ES6 Reflect
console.log(Reflect.get(product, 'quantity'))

function reactive(target) {
  const handler ={
    get(target, key, receiver) {
      // receiver ensures the proper value of 「this」is used when our object has inherited values or functions from another object
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    set(target, key, value, receiver) {
      let oldValue = target[key];
      let result =  Reflect.set(targett, key, value, receiver)
      if (oldValue != result) trigger(target, key);
      return result;
    }
  }
  return new Proxy(target, handler)
}

let newProduct = reactive({price: 5, quantity: 2})

console.log(proxiedProduct.quantity)