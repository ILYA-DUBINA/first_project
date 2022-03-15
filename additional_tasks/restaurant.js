const password = prompt('Введите пароль').trim();
let reg = /([0-9A-Za-z]{1,})([a-z0-9A-Z]{1,})$/;

if(3 <= password.length && password.length <= 20){
   if(reg.test(password)){
      alert('Пароль валидный. Добро пожаловать в аккаунт!')
   }else {
      alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
   }
} else {
   alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}

// const clientName = prompt('Введите имя клиента').trim();

// let clientSpentToday = prompt('Сколько клиент потратил сегодня?').trim();
// let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?').trim();

// if(String(clientSpentToday) || String(clientSpentForAllTime)){
//    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку');
//    clientSpentToday = prompt('Сколько клиент потратил сегодня?').trim();
//    clientSpentForAllTime = prompt('Сколько клиент потратил за все время?').trim();
// }

// let clientSpentToday1 = Number(clientSpentToday);
// let clientSpentForAllTime1 = Number(clientSpentForAllTime);

// let discount;
// let price;
// if(clientSpentForAllTime1 > 100 && clientSpentForAllTime1 < 300){
//    discount = 10;
//    price = clientSpentForAllTime1 * discount/100;
// } else if (clientSpentForAllTime1 > 300 && clientSpentForAllTime1 < 500){
//    discount = 20;
//    price = clientSpentForAllTime1 * discount/100;
// } else if (clientSpentForAllTime1 > 500){
//    discount = 30;
//    price = clientSpentForAllTime1 * discount/100;
// }
// alert(`Вам предоставляется скидка в ${discount}%!`);

// clientSpentForAllTime1 = clientSpentForAllTime1 + clientSpentToday1;
// clientSpentToday1 = clientSpentForAllTime1 - price;

// alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday1}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime1}$.`)
