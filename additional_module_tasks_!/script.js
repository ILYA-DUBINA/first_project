// let firstNumberTiket = 1016;
// let lastNumberTiket = 1937;
// let arrayNumber = [];

// for(firstNumberTiket; firstNumberTiket <= lastNumberTiket; firstNumberTiket++){
//    if((firstNumberTiket % 3 == 0 && firstNumberTiket % 7 == 0) && (firstNumberTiket % 5 != 0 && firstNumberTiket % 2 != 0)) {
//       arrayNumber.push(firstNumberTiket);         
//    }   
// }
// console.log(Math.max.apply(null, arrayNumber));

  //? ================================================================

// function isEqualSymbols(str1, str2) {
//    const stringOne = str1.split('').sort((a,b) =>{return a > b ? 1 : a === b ? 0 : -1 }).join('');
//    const stringTwo = str2.split('').sort((a,b) =>{return a > b ? 1 : a === b ? 0 : -1 }).join('');
//    if(stringOne === stringTwo){
//       return true;
//    } else {
//       return false;
//    }
// }

// console.log(isEqualSymbols('адрес', 'среда'));
// console.log(isEqualSymbols('ноутбук', 'программист'));

  //? ================================================================
//  let array = [];
// function unique (arr) {
//    return array = arr.filter((item, index) => {
//       return arr.indexOf(item) == index;         
//    })     
// }

// function unique (arr) {
//    let seen = {};
//    return arr.filter((item, index) => {
//       return console.log(seen.hasOwnProperty(item) ? false : (seen[item] = true));         
//    })     
// }

// function unique (arr) {
//    let uniqSet = [];
//    return uniqSet = new Set(arr);
//    [...uniqSet]; 
// }

// const result = unique([1, 1, 2, 2, 4, 2, 3, 7, 3]);
// console.log(result);

  //? ================================================================

function isPalindrome (word){
   return word.split('').reverse().join('') === word;
   // if(word.split('').reverse().join('') === word){
   //    return true;
   // } else {
   //    return false;
   // }
}

const result = isPalindrome('racecar'); // true
console.log(result);
const resultTwo = isPalindrome('programmer'); // false
console.log(resultTwo);