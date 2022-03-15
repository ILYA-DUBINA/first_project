
let date = new Date()

function getDataFormat(date, separator = '.'){
  
   if(separator === '-'){
      date = ("0" + date.getDate()).slice(-2) + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getFullYear()).slice(-2);
      return date;
   } else {
      date = ("0" + date.getDate()).slice(-2) + '.' + ("0" + (date.getMonth() + 1)).slice(-2) + '.' + ("0" + date.getFullYear()).slice(-2);
      return date;
   }
}

const dateNow = getDataFormat(date);
console.log(dateNow);