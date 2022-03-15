const users = [
   {
       username: 'David',
       status: 'online',
       lastActivity: 10
   }, 
   {
       username: 'Lucy',
       status: 'offline',
       lastActivity: 22
   }, 
   {
       username: 'Bob',
       status: 'online',
       lastActivity: 104
   }
]

const usersOnlineNames = [];

let userOnline = users.filter(item => item.status === 'online');

userOnline.forEach((item) => {
   usersOnlineNames.push(item.username);
});

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

const id = [];
const patients = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
]
const orders = [ 2, 4, 3, 1];   

const result = function giveTalonsInOrder(patients, orders){
   orders.forEach((item) => {
      const queue = patients.find((item2) => item2.id === item);   

      if(queue){
         id.push(queue);
      }

   });    
   return id;  
}

console.log(result(patients, orders));