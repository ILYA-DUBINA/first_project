// let nextBirthdayDate = new Date(2022, 08, 02);
//   console.log(nextBirthdayDate.getTime());
//   console.log(Date.now());

// function getDaysBeforeBirthday(nextBirthdayDate) {
//    const myDay = Date.now();   
//    nextBirthdayDate = convertMsToDays(nextBirthdayDate.getTime() - myDay);

//    return nextBirthdayDate;
// }

// const convertMsToDays = (ms) => {
//    return ms =  Math.round(ms/(1000*60*60*24));
// }

// const birthday = getDaysBeforeBirthday(nextBirthdayDate);
// console.log(birthday);

const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

const getDaysBeforeBirthday = (birthdayDate) => {
    const currentDateMs = Date.now();
    const birthdayDateMs = birthdayDate.getTime();
    return convertMsToDays(birthdayDateMs - currentDateMs);
}

console.log(getDaysBeforeBirthday(new Date(2022, 08, 02)))