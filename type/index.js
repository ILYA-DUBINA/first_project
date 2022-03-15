// let name = 'Ilya';
// let age = 33;
// let married = false;
// let sleep = 300000n;
// let mySymbol = Symbol();
// let myNull = null;
// let myUndefined = undefined;
// let myHouse = {
//    age: 0,
//    costs: 30000,
//    room: 2
// };

// console.log(Number(name), Boolean(name), String(name));
// console.log(Number(age), Boolean(age), String(age));
// console.log(Number(married), Boolean(married), String(married));
// console.log(Number(sleep), Boolean(sleep), String(sleep));
// console.log( Boolean(mySymbol), String(mySymbol));
// console.log(Number(myNull), Boolean(myNull), String(myNull));
// console.log(Number(myUndefined), Boolean(myUndefined), String(myUndefined));
// console.log(Number(myHouse), Boolean(myHouse), String(myHouse));

// console.log(Number(console.log), Boolean(console.log), String(console.log));
// console.log(Number({name:'Maxim'}), Boolean({name:'Maxim'}), String({name:'Maxim'}));
// console.log(Boolean(Symbol('key')), String(Symbol('key')));
// console.log(Number(Number), Boolean(Number), String(Number));
// console.log(Number(''), Boolean(''), String(''));
// console.log(Number(0), Boolean(0), String(0));
// console.log(Number(-10), Boolean(-10), String(-10));
// console.log(Number('-105'), Boolean('-105'), String('-105'));

// 1
console.log(Number(' 1 2 3 4 5')); //? 12345 - Nan
// 2
console.log(Number('1234 5'));//? 12345 - Nan
// 3
console.log(Number('12345'));//? 12345
// 4
console.log(String(false));//? 'false' - false
// 5
console.log(Boolean(0000000));//? false
// 6
console.log(Boolean(0.0000001));////? true
// 7
console.log(String(undefined));//? 'undefined' - undefined
// 8
console.log(Number('100f'));//? Nan
// 9
console.log(Number('100'));//? 100
// 10
console.log(Number('000001'));//? 1