export const getRandomColor = (max = 5) => {
   let numberRandom = Math.floor(Math.random() * max);
   if(numberRandom === 0){
      return numberRandom = 'red';
   } else if(numberRandom === 1){
      return numberRandom = 'black';
   }else if(numberRandom === 2){
      return numberRandom = 'blue';
   } else if(numberRandom === 3){
      return numberRandom = 'pink';
   } else if(numberRandom === 4){
      return numberRandom = 'grey';
   } else if(numberRandom === 5){
      return numberRandom = 'green';
   } else {
      return numberRandom = 'white';
   }
}
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// export const result = getRandomColor();
