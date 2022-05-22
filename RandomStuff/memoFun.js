// memo func ， return a function, if the params used before , no need to caculate again
const memo = (fn) => {
  let paramMap = new Map();
  return (...args) {
    if (paramMap.get(args.join('-'))) {
      return paramMap.get(args.join('-'));
    } else {
      const res = fn(...args);
      paramMap.set(args.join('-'), res);
      return res;
    }
  }
}