/*
we should only be calling 「track」 when we're inside of an effect
*/


function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      // receiver ensures the proper value of 「this」is used when our object has inherited values or functions from another object
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    set(target, key, value, receiver) {
      let oldValue = target[key];
      let result = Reflect.set(targett, key, value, receiver)
      if (oldValue != result) trigger(target, key);
      return result;
    }
  }
  return new Proxy(target, handler)
}

const targetMap = new WeakMap();

let activeEffect = null; // active effect that's currently running

function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}

function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set))
    }
    dep.add(activeEffect);
  }
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



let newProduct = reactive({ price: 5, quantity: 2 })

console.log(proxiedProduct.quantity)