// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// const giveParcel = (name) => {
//    peopleWaiting.shift();
//    alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
// }
// const leaveQueueWithoutParcel = (name) => {
//    peopleWaiting.pop();
//     alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
// }

// giveParcel('Кристина');
// giveParcel('Олег');
// giveParcel('Кирилл');

// leaveQueueWithoutParcel('Глеб');
// leaveQueueWithoutParcel('Артем');
// leaveQueueWithoutParcel('Светлана');
// leaveQueueWithoutParcel('Мария');

// console.log(peopleWaiting);
// let arr = [];
// const getSumOfSequence =(number) => {
//    for(let i = 1; i <= number; i++){
//       arr.push(i);            
//    }

//    const firstElement = arr[0]
//    const lastElement = arr.length;

//    const result = firstElement + lastElement;

//    return result;
// }

// const result = getSumOfSequence(7);
// console.log(result);

//?============================================================

// const goals = [8, 1, 1, 3, 2, -1, 5];
// const newGoals = [];
// let minNumbers = 0;
// const minNumbersInd = [];
// let maxNumbers = 0;
// const maxNumbersInd = [];
// let sum = 0;
// let count = 0;

// const max = Math.max.apply(null, goals);

// goals.map((item) => {
//    if(item > 0){
//       newGoals.push(item);
//    } else {
//       count++;
//    }
// })

// const min = Math.min.apply(null, newGoals);

// for(let i = 0; i < newGoals.length; i++){
//    sum += newGoals[i];
// }

// for(let i = 0; i < goals.length; i++){
//    if(goals[i] === max){
//       maxNumbers = goals[i];
//       maxNumbersInd.push(i+1);
//    } else if(goals[i] === min){                
//       minNumbers = goals[i];
//       minNumbersInd.push(i+1);    
//    } 
// }

// let endMaxNumbersInd = maxNumbersInd.join(' и ');
// let endMinNumbersInd = minNumbersInd.join(' и ');

// let sort = goals.sort((a, b) => a - b).join(', ');

// alert(`Самый результативный матч был под номером ${endMaxNumbersInd}. В нем было забито ${maxNumbers} гол(ов)`);
// alert(`Самые нерезультативные матчи были под номерами ${endMinNumbersInd}. В каждом из них было забито по ${minNumbers} мячу(а).`);
// alert(`Общее количество голов за сезон равно ${sum}`);
// if(count > 0){
//    alert(`Были автоматические поражения: да`);
// } else {
//    alert(`Были автоматические поражения: нет`);
// }
// alert(`Среднее количество голов за матч равно ${Math.round(sum/goals.length)}`);
// alert(`Все голы в порядке возрастания ${sort}`);
//?============================================================


// const getMathResult = (expression) => {  
//    let arrayNewExpression = [];
//    expression.map((item) => {           
//       if(item === '<' || item === '>' || item === '+' || item === '-' || item === '*' || item === '/' || item === '='){
//          arrayNewExpression[1] = item;                  
//       } else if(Number(item)) {  
//          arrayNewExpression.push(item);           
//       }   
//    })

//    if(arrayNewExpression[1] === '>'){
//       return Number(arrayNewExpression[0]) > Number(arrayNewExpression[2]);            
//    } else if(arrayNewExpression[1] === '<'){
//       return Number(arrayNewExpression[0]) < Number(arrayNewExpression[2]);
//    } else if(arrayNewExpression[1] === '='){
//       return Number(arrayNewExpression[0]) == Number(arrayNewExpression[2]);
//    } else if(arrayNewExpression[1] === '-'){
//       return Number(arrayNewExpression[0]) - Number(arrayNewExpression[2]);
//    } else if(arrayNewExpression[1] === '+'){
//       return Number(arrayNewExpression[0]) + Number(arrayNewExpression[2]);
//    } else if(arrayNewExpression[1] === '*'){
//       return Number(arrayNewExpression[0]) * Number(arrayNewExpression[2]);
//    } else if(arrayNewExpression[1] === '/'){
//       return Number(arrayNewExpression[0]) / Number(arrayNewExpression[2]);
//    }
// }

// console.log(getMathResult(['200', '+', '300'])); // 500
// console.log(getMathResult(['20', '-', '5'])); // 15
// console.log(getMathResult([100, '/', 100])); // 1
// console.log(getMathResult([2, '-', 2])); // 0
// console.log(getMathResult(['5', '>', '10'])); // false
// console.log(getMathResult(['5', '<', '10'])); // true
// console.log(getMathResult(['1', '=', 1])); // true
// console.log(getMathResult(['1', '**', 1])); // 'Ошибка'
// console.log(getMathResult(['100', 'hello', 'javascript', , 'help200', '+', 4])); // 'Ошибка'

//?============================================================

// const array = [1, 2, 3];
// const arrayTwo = [];
// for(let i = 1; i > arrayTwo.length; i--){ 
//    for(let j = 0; j < array.length; j++){
//       console.log(array);
//    }
// }

// const matrix = [];

// for (let i = 0; i < 3; i += 1) {
//     const row = [];
//     for (let j = 0; j < 5; j += 1) {
//         row.push(j + 1);
//     }
//     matrix.push(row);
// }

// console.log(matrix);

//?============================================================

const matrix = [
   [ 1, 2, 3 ],
   [ 4, 5, 6 ],
   [ 7, 8, 9 ],
];
// let matrixNew = [];

// for(let i = 0; i < matrix.length; i++){
//    matrixNew = matrix[0].concat(matrix[1], matrix[2]);
//    // for(let j = 0; j < matrix.length; j++){
//    //    console.log(matrix[i]);
//    // }
// }
// console.log(matrixNew);


const flatArray = matrix.reduce((acc, array) => {
   console.log(acc);
   console.log(array);
    return [...acc, ...array];
}, []);

console.log('flatArray', flatArray);