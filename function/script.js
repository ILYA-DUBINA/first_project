// function getName(name = 'Илья') {
//  return name;
// }
// console.log(getName());

// const getName2 = function(name) {
//    return name;
// }
// const getNameConsole = getName2('Влад');
// console.log(getNameConsole);

// const getName3 = (name) => name;
// const getNameConsole2 = getName3('Ира');

// console.log(getNameConsole2);


// const f = (number, type = 'odd') => {  
//    let sum = 0;
//    for(let i = 0; i <= number; i++){      
//       const isEven = i % 2 === 0;
//       const isOdd = !isEven;
//       if(!type){
//          sum += i;
//       } else if (isEven && type ==='even'){
//          sum += i;
//       } else if (isOdd && type === 'odd'){
//          sum += i;
//       }      
//    }

//    return sum;
// }
// const result = f(10);
// console.log(result);


// const getSumOfNumbers = (number, type = 'odd') => {
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1) {
//         const isEven = i % 2 === 0;
//         const isOdd = !isEven;
//         if (!type) {
//             sum += i;
//         } else if (isEven && type === 'even') {
//             sum += i;
//         } else if (isOdd && type === 'odd') {
//             sum += i;
//         }
//     }

//     return sum;
// }

// const result = getSumOfNumbers(10);
// console.log('result', result);

// let sum = 0;
// const getDivisorsCount = (number = 1) => {
//    if(number < 0 || !Number.isInteger(number)){
//       alert(`${number} должен быть целым числом и больше нуля!`)
//    } else {      
//       for(let i = number; i > 0; i -= 1){
//          const isDivider = number % i === 0;
//          if(isDivider){
//             sum += 1;
//          }
//       }
//       return sum;
//    }   
// }

// const result = getDivisorsCount(5)
// console.log(result);

//?=============================================================

// const checkQuestionAnswer = (question, correctAnswer) => {
//    const Question = prompt(`${question}`).trim().toLowerCase(); 
//    let correctAnsweR = correctAnswer.toLowerCase();

//    if(Question === 'ягода' && correctAnsweR === 'ягода'){
//       alert('Ответ правильный');
//    } else if(Question === '32' && correctAnsweR === '32'){ 
//       alert('Ответ правильный');
//    } else if(Question === 'колибри' && correctAnsweR === 'колибри'){ 
//       alert('Ответ правильный');
//    } else {
//       alert('Ответ не правильный');
//    }
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

//? ==================================================================

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
let couter = 0;

const showSuccessMessage = (message) => {
   console.log(message);
}

const showErrorMessage = (message) => {
   console.error(message);
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
   for(let i = 0; i < text.length; i++){   
      if(text[i] === errorSymbol && errorSymbol){
         errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
         couter++;
      }  
   }  
   if(couter === 0 && successCallback){
      successCallback('В данном тексте нет запрещенных символов');
   }
}

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);