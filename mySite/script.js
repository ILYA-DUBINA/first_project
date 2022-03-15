// const existedUserLogin = "the_best_user";
// const existedUserPassword = 12345678;

// const userLogin = prompt('Введите логин').trim();
// const userPassword = prompt('Введите пароль').trim();
// const userPassword1 = Number(userPassword);

// if((userLogin === existedUserLogin) && (userPassword1 === existedUserPassword)){
//    alert(`Добро пожаловать, ${userLogin}`);
// } else {
//    alert('Логин и(или) Пароль введены неверно!')
// }


const answerFirstQuestion = 4;
const answerSecondQuestion = 4;
const answerThirdQuestion = 1;
const answerFourthQuestion = 12;
const answerFifthQuestion = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

const firstQuestion = Number(prompt('Сколько будет 2 + 2?').trim());
const secondQuestion = Number(prompt('Сколько будет 2 * 2?').trim());
const thirdQuestion = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim());
const fourthQuestion = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim());
const fifthQuestion = Number(prompt('Сколько будет 2 + 2 * 2?').trim());


if(firstQuestion === answerFirstQuestion){
   correctAnswers++;
} else {
   incorrectAnswers++;   
}

if(answerSecondQuestion === secondQuestion){
   correctAnswers++;
} else {
   incorrectAnswers++;
}
   
if(thirdQuestion === answerThirdQuestion){
   correctAnswers++;   
} else {
   incorrectAnswers++;   
}

if(fourthQuestion === answerFourthQuestion){        
   correctAnswers++;
} else {
   incorrectAnswers++;   
}

if(fifthQuestion === answerFifthQuestion){
   correctAnswers++;   
} else {
   incorrectAnswers++; 
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);