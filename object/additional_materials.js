// const groceries = {
//    "Orange Juice": {
//        price : 1.5,
//        discount: 10,
//    },
//    "Chocolate": {
//        price : 2,
//        discount : 0,
//    },
//    // more items...
// }

// let sum = 0;
// let sumChocolate = 0; 
// let sumJuice = 0;

// const shoppingBag = [
//    { product: 'Chocolate', quantity: 3 },
//    { product: 'Orange Juice', quantity: 23 },
// ]

// const getTotalPriceOfShoppingBag = (shoppingBag) => {
//    shoppingBag.forEach((item) => {
//       if(item.product === 'Chocolate'){
//          sumChocolate = item.quantity * groceries['Chocolate'].price;
//       }
//       if(item.product === 'Orange Juice'){
//          sumJuice = ((item.quantity * groceries['Orange Juice'].price)*groceries['Orange Juice'].discount)/100;
//          sumJuice = item.quantity * groceries['Orange Juice'].price - sumJuice;
//       }      
//    });
//    return  sum = (sumChocolate + sumJuice).toFixed(2);
// }
 
// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
// console.log('totalPrice', totalPrice); 


// function getTotalPriceOfShoppingBag(shoppingBag) {
//     const shoppingItems = Object.values(shoppingBag);
//       console.log(shoppingItems);
//     if (shoppingItems.length === 0) {
//         return 0;
//     }

//     const totalPrice = shoppingItems.reduce((acc, currentProduct) => {
//         const { product, quantity } = currentProduct;
//       //   console.log(currentProduct);
//       //   console.log(acc);
//         const productObject = groceries[product];
//       //   console.log(productObject);
//       //   console.log(groceries);
//         const { price, discount } = productObject
//         console.log(productObject);
//         const priceWithDiscount = productObject.price - (price * discount / 100);
//         console.log(priceWithDiscount);
//         let totalProductPrice = priceWithDiscount * quantity;
//         console.log(totalProductPrice);
//         return acc + totalProductPrice;
//     }, 0);

//     return totalPrice.toFixed(2);
// }

//? ===================================

// const enemy = {
//    name: 'Finch',
//    health: 100,
//    heatHero: (hero) => hero.health -= 10
// }
// const hero = {
//    name: 'Max',
//    health: 100,
//    heatEnemy: (enemy) => enemy.health -= 10
// }

// function getRandomNumberInRange(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function startGame(heroPlayer, enemyPlayer) {
//    while(heroPlayer.health > 0 || enemyPlayer.health > 0){
//       let numberRandom = getRandomNumberInRange(0, 1);   
//       if(numberRandom === 0){     
//          heroPlayer.heatEnemy(enemyPlayer);
//          if (enemyPlayer.health <= 0) {
//                break;
//          }
//       } else if(numberRandom === 1){   
//          enemyPlayer.heatHero(heroPlayer);
//          if (heroPlayer.health <= 0) {
//                break;
//          }
//       }
//    }
   
//    if (heroPlayer.health <= 0) {
//       alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
//    } else {
//       alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
//    } 
// }

// startGame(hero, enemy);

//? ===================================
// const suspect = {
//    'Brad': [],
//    'Megan': ['Ben', 'Kevin'],
//    'Finn': [],
// };
// const dead = ['Ben'];
// let killer;


// function getKiller(suspectinfo, deadPeople){
//    for (const [key, value] of Object.entries(suspectinfo)) {  
//       value.filter((item, index) => {
//          if(item === deadPeople[index]){                  
//             return killer = key;            
//          }
//       });        
//    }    
//    return killer;     
// }
// let killerName = '';
// function getKiller(suspectInfo, deadPeople) {    
//     Object.entries(suspectInfo).forEach((data) => {
//         const suspectPerson = data[0];
//         const peopleWereSeen = data[1];
//         const isKiller = deadPeople.every((deadName) => peopleWereSeen.includes(deadName));
//         if (isKiller) {
//             killerName = suspectPerson;
//         }
//     })
// }
// const result = getKiller(suspect, dead);
// console.log(result);

//?==========================================================
function getRandomNumberInRange(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
   prize: '10 000$',
}
 
const winnerApplicants = {
   '001': {
      name: 'Максим',
      age: 25,
   },
   '201': {
      name: 'Светлана',
      age: 20,
   },
   '304': {
      name: 'Екатерина',
      age: 35,
   },
}

let resultWinnerHumen = {};

const getWinner = (applicants, winnerObject) => { 
   let newApplicants = Object.entries(applicants);
   let arrayKey = Object.keys(newApplicants); 
   arrayKey = arrayKey.map(parseFloat);     
   let randomNumber = getRandomNumberInRange(arrayKey[0], arrayKey[arrayKey.length-1]+1); 
   for(let i = 0; i < newApplicants.length; i+=1){      
      return resultWinnerHumen = Object.assign(winnerObject, newApplicants[randomNumber][1]);           
   }
}
 
const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 

