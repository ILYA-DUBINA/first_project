// const myName = 'Ilya';
// const programmingLanguage = 'JavaScript';
// const courseCreatorName = 'Vladilen';
// const reasonText = 'home';
// const numberOfMonth = 24;

// let myInfoText = `Всем привет! Меня зовут, ${myName}.Сейчас я изучаю язык программирования ${programmingLanguage.toUpperCase()} на курсе по ${programmingLanguage.toUpperCase()} у ${courseCreatorName}.

// Я хочу стать веб-разработчиком, потому что ${reasonText}.До этого я изучал ${programmingLanguage.toUpperCase()} ${numberOfMonth} месяца.Я уверен, что пройду данный курс до конца!`
// console.log(myInfoText);
// console.log(myInfoText.length);
// console.log(myInfoText[0]);
// console.log(myInfoText[myInfoText.length-1]);


// const userName = prompt('Как вас зовут?');
// const user = userName.toLowerCase().trim();
// const userAge = String(prompt('Сколько вам лет?')).trim();
// const userA = Number(userAge);
// alert(`Вас зовут ${user} и вам ${userA} лет`);

// const userString = prompt('Введите текст для обрезки').trim();
// const startSlice = String(prompt('Введите индекс, с которого нужно начать обрезку строки')).trim();
// const startSliceIndex = Number(startSlice);
// const endSlice = String(prompt('Введите индекс, которым нужно закончить обрезку строки')).trim();
// const endSliceIndex = Number(endSlice);
// const string = userString.slice(startSliceIndex, endSliceIndex);
// alert('Результат: ' + string);

const userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введите слово из текста').trim();
const result1 = userText.indexOf(wordFromText);
const result4 = wordFromText.length;
console.log(result4);
const result2 = Number(result1);
const result5 = Number(result4);
const result3 = userText.slice(result2);
const result6 = result3.slice(0, result4);

// const result4 = wordFromText.indexOf(wordFromText.length-1);
// const result5 = Number(result4);
// const result6 = result3.slice(result5, userText.length-1);
alert(`Результат: ${result6}`);