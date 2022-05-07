const isP = (n: number) => { // 判断是否是素数
  const x = (n ** 0.5) | 0;
  for (let i = 2; i <= x; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
const list: number[] = [];
for (let i = 1000; i < 10000; i++) {
  if (isP(i)) {
    list.push(i);
  }
}
console.log(list, 'list 1000-10000的素数'); 
const ans1 = new Map<string | number, number[]>();
const ans2 = new Map<string | number, number[]>();
// 2621
const getKey1 = (n: number) => {
  const a = Array(10).fill(0);
  // []
  while (n) {
    const v = n % 10;
    a[v]++;
    n = (n / 10) | 0;
  }
  //a[1] = 1
  //a[2] = 1
  //a[6] = 1
  //a[2] = 2
  // [0,1,2,0,0,0,1,0,0,0]
  return a.join(",");
};
const getKey2 = (n: number) => {
  let a = 0;
  while (n) {
    const v = n % 10;
    // 这个是有问题的... 
    // a += 1 << v;
    a += (1 << v*2); 
    n = (n / 10) | 0;
  }
  return a;
};

const x = getKey2(1234);
// 辅助理解位运算
const show = (n: number) => {
  const a = Array(10).fill(0);
  for (let i = 0; i < 10; i++) {
    const low = (n >> (i * 2)) & 1;
    const high = (n >> (i * 2 + 1)) & 1;
    const v = 2 * high + low;
    a[i] = v;
  }
  for (let i = 0; i < 10; i++) {
    console.log(`n: ${i}, count:${a[i]}`);
  }
};
show(x);

for (const n of list) {
  const k1 = getKey1(n);
  const k2 = getKey2(n);
  // const k = getKey2(n); 
  // if (!ans1.has(k1) && ans2.has(k2)) {
  //   console.log(k1, k2, n, 'ans1 !k1 as2 k2');
  // }
  if (ans1.has(k1)) {
    ans1.get(k1)?.push(n);
  } else {
    ans1.set(k1, [n]);
  }
  if (ans2.has(k2)) {
    ans2.get(k2)?.push(n);
  } else {
    ans2.set(k2, [n]);
  }
}
console.log(ans2, 'ans1')
// for (const [k, v] of ans1) { 
// if (v.length > 1) { 
// console.log(k, v); 
// } 
// } 
console.log([...ans1.keys()].length === [...ans2.keys()].length);
console.log([...ans1.keys()].length, [...ans2.keys()].length);
console.log(getKey2(1100), '1100');
console.log(getKey2(2200), '2200');
console.log(getKey1(9091), 'getkey1')
