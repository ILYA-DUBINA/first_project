// const coffees = ['latte', 'cappuccino', 'americano'];
// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map((item) =>  item + 0.5 );

// coffees.forEach((item, index) => {
//    alert(`Кофе ${item} сейчас стоит ${updatedPrices[index]} евро`);  
// });   




// let coffe = prompt('Поиск кофе по названию').trim();
//     coffe = String(coffe).toLocaleLowerCase();
// let coffeName = coffees.findIndex((salary) => {
//    return salary === coffe;
// });
//    coffeName++;
// if(0 <= coffeName){
//    alert(`Держите ваш любимый кофе ${coffe}. Он ${coffeName}-й по популярности в нашей кофейне.`);
// } else {
//    alert('К сожалению, такого вида кофе нет в наличии');
// }

// const clientsEstimations = [];
// let notGoodEstimations = 0;
// let goodEstimations = 0;

// const askClientToGiveEstimation = () => {
//   let grade = prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim();
//       grade = Number(grade);

//    if (grade > 0 && grade <= 10){
//       clientsEstimations.push(grade);
//    }

//    return clientsEstimations;
// }

// for(let i = 0; i < 5; i++){
//    askClientToGiveEstimation();
// }

// clientsEstimations.filter((item) => {
//    if(5 >= item){
//       notGoodEstimations++;
//    } else {
//       goodEstimations++;
//    }   
// });

// alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);


const numbers = [10, 4, 100, -5, 54, 2];
let cub = 0;

// for(let i = 0; i < numbers.length; i++){
//    cub += numbers[i]**3;
// }

// console.log(cub);

// for ( let c of numbers){
//    cub += c**3;
// }

// numbers.forEach((c) => {
//    cub += c**3;  
// });

cub = numbers.reduce((acc, salary) => {
   return acc+(salary**3);
}, 0);

console.log(cub);