// let health = prompt('Введите число параметра "здоровье" для персонажа');
// if (health <= 0 || !health) {   
//    alert('Параметр "здоровье" должен быть больше нуля!');
//    console.log(health);
// } else {
//    alert(`Параметр "здоровье" равен ${health}`);
//    console.log(health);
// }

// const temperatureInCelsius0 = prompt('Введите температуру в градусах Цельсия');
// const temperatureInCelsius = Number(temperatureInCelsius0);

// console.log(temperatureInCelsius);
// if (temperatureInCelsius === 0) {
//    alert('0 градусов по Цельсию - это температура замерзания воды');   
// } else if (temperatureInCelsius > 0) {
//    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }

// const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;

// alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
// Фаренгейту.`);

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;

let taxPercentage = 13;
let totalJuniorDevelopersSalary=0;
console.log(totalJuniorDevelopersSalary);
                
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
   const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
   console.log(salaryWithTax);
   totalJuniorDevelopersSalary += salaryWithTax;
   console.log(totalJuniorDevelopersSalary);
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
