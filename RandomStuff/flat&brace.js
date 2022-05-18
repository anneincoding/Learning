// (2) 括号匹配, () {} <> []
const vaildBrackets = string => {
    if (string.length === 0) return false;
    const braceMap = {
        '(' :  ')',
        '{' :  '}',
        '<' :  '>',
        '[' :  ']',
    }
    const stack = [];
    for (let i = 0 ; i < string.length; i ++) {
        if (stack.length > string.length / 2 ) return false;
        if (Object.keys(braceMap).includes(string[i])) {
            stack.push(string[i]);
        } else if (Object.values(braceMap).includes(string[i])) {
            if (stack.length === 0) return false;
            const char = stack.pop();
            if (braceMap[char] === string[i]) {
                continue;
            } else {
                return false;
            }
        }
    }
    return stack.length == 0;
}
console.log(vaildBrackets('AB(<123{abc}d[e]f>456)CD'));
// 输出 true

// const flatten = (array) => {
//   // recursion
//   const res = [];
//   return () =>  {
//     for (let i = 0; i < array.length; i++) {
//         console.log()
//         if (array[i] instanceof Array) {
//             res.push(...flatten(array[i]));
//         } else {
//             res.push(array[i]);
//         }
//     }
//     return res;
//   };
// }
// console.log(
//     flatten(
//         [
//             [1, 2], 
//             [3, 4], 
//             [6, 7, 
//                 [8, 9, 
//                     [10, 11, [12]]
//                 ], 13
//             ], 
//             1, 
//             2
//         ]
//     )
// )
// // 输出[1,2,3,4,6,7,8,9,10,11,12,13,1,2]