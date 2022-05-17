// 注: 所有题目均可以使用任意 ES 版本中的 API
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Q1: 实现一个非原生类(不考虑数组, Map, Set, Date 等原生类)的浅拷贝函数
 *
 * 此函数接收一个非原生类对象(可能有自定义的原型链), 返回
 * 一个此对象的浅拷贝.
 */
function shallowCopy(obj) {
    // show me the code, please delete the following line.
    // return Object.assign({}, obj);
    var clone = obj || {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = obj[key];
        }
    }
    return obj;
    ///throw new Error('not implemented');
}
/**
 * Q2: 实现一个加权随机函数
 *
 * 此函数接收一个整数数组 input, 此数组:
 *  1. 元素个数 N < 10000
 *  2. 元素的值大于 0 且小于 100
 *
 * 返回一个随机函数, 此随机函数:
 *  1. 返回 [0, N - 1] 之间的一个随机整数
 *  2. 每个整数 i 被返回的概率为:
 *     数组 input 的第 i 个元素的值 / 数组 arr 的所有元素之和
 *
 * 例: 给定一个数组 input, 值为 [4, 2, 1, 3],
 *    调用 createWeightedRandom(input), 应当
 *    返回一个函数, 此函数返回一个 0 - 3 之间的一个
 *    随机整数, 相应的概率分别为:
 *    4/10, 2/10, 1/10, 3/10.
 *
 * 分别按以下两种要求实现该函数:
 * 1. 空间复杂度不限, 返回的随机函数时间复杂度 O(1)
 * 2. 空间复杂度 O(N), 返回的随机函数时间复杂度 O(logN)
 */
// Q2.1: 空间复杂度不限, 返回的随机函数时间复杂度 O(1)
// 重新构造数组
function createWeightedRandom_O1(input) {
    // const storeMap = new Array(input.length);
    // const sum: number = input.reduce((a,b) => a + b, 0);
    // for (let i = 0 ; i < input.length; i++) {
    //   storeMap[i] = Math.floor(input[i] / sum);
    // }
    // return () => {
    //   let weightSum: number= 0;
    //   const random: number = Math.floor(Math.random()*input.length);
    //   for (let i in storeMap) {
    //     weightSum += storeMap[i];
    //     if (random <= weightSum) return i
    //   }
    // }
    // show me the code, please delete the following line.\
    throw new Error('not implemented');
}
//二分
// Q2.2: 空间复杂度 O(N), 返回的随机函数时间复杂度 O(logN) 
function createWeightedRandom_OlogN(input) {
    // show me the code, please delete the following line.
    // const boundaryArray: number[] = [];
    // const sum: number = input.reduce((a, b , i) => {
    //   boundaryArray.push(a+b);
    //   return a+b;
    // }, 0);
    // const binarySearch = (start, end, target) => {
    //   if (start == end) return start;
    //   const mid: number = Math.floor((start + end) / 2);
    //   if (target === boundaryArray[mid]) return mid;
    //   if (target < boundaryArray[mid]) {
    //     return binarySearch(start, mid - 1, target);
    //   }
    //   return binarySearch(mid + 1, end, target);
    // }
    // return () => {
    //   let random: number = Math.floor(Math.random * sum);
    //   const res: number = binarySearch(0, boundaryArray.length - 1, random);
    //   return res;
    // }
    throw new Error('not implemented');
}
/**
 * Q3: 实现一个异步任务执行器 AsyncWorker
 *
 * 此 AsyncWorker: 最多只能同时执行 capacity
 * 个异步任务. 若正在执行的任务数达到 capacity,
 * 则新加入的任务需要等待其中一个正在执行的任务完
 * 成后才能被执行.
 */
var AsyncWorker = /** @class */ (function () {
    function AsyncWorker(capacity) {
        this.capacity = capacity;
        this.waitList = [];
        this.count = 0;
        this.capacity = capacity;
    }
    AsyncWorker.prototype.exec = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.count >= this.capacity)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.waitList.push(resolve);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.count++;
                        return [4 /*yield*/, task()];
                    case 3:
                        result = _a.sent();
                        this.count--;
                        if (this.waitList.length > 0) {
                            this.waitList.shift()();
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ;
    return AsyncWorker;
}());
/* -------- 下面是测试代码 --------- */
function assert(value, message) {
    if (value !== true) {
        throw new Error(message);
    }
}
// TEST Q1
function testShallowCopy() {
    var UserModel = /** @class */ (function () {
        function UserModel(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        UserModel.prototype.fullName = function () {
            return this.firstName + ' ' + this.lastName;
        };
        return UserModel;
    }());
    var user = new UserModel('Hello', 'World');
    var user2 = shallowCopy(user);
    user2.firstName = 'Hello 2';
    user2.lastName = 'World 2';
    assert(user2 instanceof UserModel, 'should be instance');
    assert(user.fullName() === 'Hello World', 'should keep original fields');
    assert(user2.fullName() === 'Hello 2 World 2', 'should returns new value');
}
// TEST Q2.1
function testCreateWeightedRandom_O1() {
    var input = [4, 2, 1, 3];
    var sampling = createWeightedRandom_O1(input);
    var count = [0, 0, 0, 0];
    for (var i = 0; i < 10000; i++) {
        count[sampling()]++;
    }
    var rates = count.map(function (i) { return Math.round(i / 1000); });
    assert(JSON.stringify(rates) === '[4,2,1,3]', "".concat(rates, " is not same to ").concat(input));
}
// TEST Q2.2
function testCreateWeightedRandom_OlogN() {
    var input = [4, 2, 1, 3];
    var sampling = createWeightedRandom_OlogN(input);
    var count = [0, 0, 0, 0];
    for (var i = 0; i < 10000; i++) {
        count[sampling()]++;
    }
    var rates = count.map(function (i) { return Math.round(i / 1000); });
    assert(JSON.stringify(rates) === '[4,2,1,3]', "".concat(rates, " is not same to ").concat(input));
}
// TEST Q3
function testAsyncWorker() {
    return __awaiter(this, void 0, void 0, function () {
        var start, createTask, worker, tasks, index, t, result, value, e_1, realCost, idealCost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = Date.now();
                    createTask = function (timeout, error) {
                        return function () {
                            return new Promise(function (resolve, reject) {
                                setTimeout(function () {
                                    if (error) {
                                        reject(error);
                                    }
                                    else {
                                        resolve(timeout);
                                    }
                                }, timeout);
                            });
                        };
                    };
                    worker = new AsyncWorker(2);
                    tasks = [
                        { status: 'fulfilled', value: 100, idealCost: 100, task: worker.exec(createTask(100)) },
                        { status: 'fulfilled', value: 201, idealCost: 200, task: worker.exec(createTask(201)) },
                        { status: 'rejected', reason: 'REJECTED', idealCost: 300, task: worker.exec(createTask(202, 'REJECTED')) },
                        { status: 'fulfilled', value: 203, idealCost: 400, task: worker.exec(createTask(203)) },
                        { status: 'fulfilled', value: 300, idealCost: 600, task: worker.exec(createTask(300)) },
                    ];
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < tasks.length)) return [3 /*break*/, 7];
                    t = tasks[index];
                    result = void 0;
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, t.task];
                case 3:
                    value = _a.sent();
                    result = { status: 'fulfilled', value: value };
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    result = { status: 'rejected', reason: e_1 };
                    return [3 /*break*/, 5];
                case 5:
                    realCost = Date.now() - start;
                    idealCost = (realCost - (realCost % 100)) | 0;
                    if (idealCost !== t.idealCost) {
                        throw new Error("unexpected time cost: ".concat(idealCost, ", expected is ").concat(t.idealCost, " for ").concat(index));
                    }
                    if (result.status !== t.status) {
                        throw new Error("unexpected status ".concat(result.status, " for ").concat(index));
                    }
                    if (t.status === 'fulfilled' && result.status === 'fulfilled' && result.value !== t.value) {
                        throw new Error("unexpected fulfilled value ".concat(result.value, ", expected is ").concat(t.value, " for ").concat(index));
                    }
                    if (t.status === 'rejected' && result.status === 'rejected' && result.reason !== t.reason) {
                        throw new Error("unexpected rejected reason ".concat(result.reason, ", expected is ").concat(t.reason, " for ").concat(index));
                    }
                    _a.label = 6;
                case 6:
                    index++;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var e_2, e_3, e_4, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log('Testing Q1...');
                    return [4 /*yield*/, testShallowCopy()];
                case 1:
                    _a.sent();
                    console.log('PASSED!');
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.log(e_2.stack || e_2);
                    return [3 /*break*/, 3];
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    console.log('Testing Q2.1...');
                    return [4 /*yield*/, testCreateWeightedRandom_O1()];
                case 4:
                    _a.sent();
                    console.log('PASSED!');
                    return [3 /*break*/, 6];
                case 5:
                    e_3 = _a.sent();
                    console.log(e_3.stack || e_3);
                    return [3 /*break*/, 6];
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    console.log('Testing Q2.2...');
                    return [4 /*yield*/, testCreateWeightedRandom_OlogN()];
                case 7:
                    _a.sent();
                    console.log('PASSED!');
                    return [3 /*break*/, 9];
                case 8:
                    e_4 = _a.sent();
                    console.log(e_4.stack || e_4);
                    return [3 /*break*/, 9];
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    console.log('Testing Q3...');
                    return [4 /*yield*/, testAsyncWorker()];
                case 10:
                    _a.sent();
                    console.log('PASSED!');
                    return [3 /*break*/, 12];
                case 11:
                    e_5 = _a.sent();
                    console.log(e_5.stack || e_5);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    });
}
main();
