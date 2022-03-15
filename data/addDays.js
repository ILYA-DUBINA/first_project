// let date = new Date(2021, 01, 02);

// console.log('before', date)

// const addDays = (date, days = 1) => {     
//   days = days*24*60*60*1000;
//    // console.log(date.getDate());
//    // console.log(date.event.timeStamp);
// //   date.setDate(date.getDate() + days);
//    date = new Date(date.getTime() + days)
//    // date = ('0' + date.getDate().slice(-2));
  

//    return date;
// }

// console.log('after', addDays(date, 3));

//? =================================================================

const peopleWithVisa = [
   {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2023',
   },
   {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2021',
   },
   {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: true,
      passportExpiration: '31.07.2022',
   },
   {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2022',
   },
];

let okPeople = [];

const allowVisa = (arrayPeople) => {
   arrayPeople.filter((item) => {    
      let date = new Date().toLocaleDateString();
      console.log(date);  
      if(item.criminalRecord === false && date < item.passportExpiration){
         return okPeople.push(item);               
      }   
      return okPeople;
   })
   return okPeople;
}
 
const result = allowVisa(peopleWithVisa);
console.log('result', result);