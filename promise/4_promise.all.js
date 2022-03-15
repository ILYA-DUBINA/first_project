// const TODOS_URL = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.querySelector('#data-container');

const toggleLoader = () => {
   const loaderHTML = document.querySelector('#loader');
   const isHidden = loaderHTML.hasAttribute('hidden');
   if(isHidden){
      loaderHTML.removeAttribute('hidden');
   } else {
      loaderHTML.setAttribute('hidden', '');
   }
}

// const createTodoElement = (text) => {
//    const todoElement = document.createElement('li');
//    const todoElementLinks = document.createElement('a');
//    todoElementLinks.href = '#';
//    todoElementLinks.textContent = text;
//    todoElement.append(todoElementLinks);

//    return todoElement;
// }

// const getAllTodos = () =>{
//    toggleLoader();
//    const result = fetch(TODOS_URL, {
//       method: 'GET',
//    });

//    result
//       .then((respons) => {
//          if(!respons.ok){
//             throw new Error('Ошибка запроса');
//          }
//          return respons.json();
//       })
//       .then((todos) => {      
//          todos.forEach((todo) => {
//             const todoHTML = createTodoElement(todo.name);
//             dataContainer.append(todoHTML);
//          });
//       })
//       .catch((error) => {
//          console.error();
//       })
//       .finally(() => {
//          toggleLoader();
//       });
// }

// getAllTodos();

// const getUsersByIds = (ids) => {
//    toggleLoader();
//    const request = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//    console.log(request);
//    Promise.all(request)
//       .then((responses) => {
//           console.log(responses);
//          const dataResult = responses.map((response) => response.json());
//           console.log(dataResult);
//          return Promise.all(dataResult);
//       })
//       .then((todos) => {      
//           console.log(todos);
//          todos.forEach((todo) => {
//             const todoHTML = createTodoElement(todo.name);
//              console.log(todoHTML);
//             dataContainer.append(todoHTML);
//          });
//       })
//       .catch((error) => {
//          console.error();
//       })
//       .finally(() => {
//          toggleLoader();
//       });
// }

// getUsersByIds([5, 6, 2, 1]);


const TODOS_URL = 'https://jsonplaceholder.typicode.com/photos';

const createTodoElement = (url, text) => {
   const todoElement = document.createElement('li');
   todoElement.className = 'photo-item';  
   dataContainer.insertAdjacentElement('afterbegin', todoElement);

   const todoElementImg = document.createElement('img');
   todoElementImg.className = 'photo-item__image';
   todoElementImg.src = url;
   todoElement.insertAdjacentElement('afterbegin', todoElementImg);
 
   const todoElementH3 = document.createElement('h3');
   todoElementH3.className = 'photo-item__title';
   todoElementH3.innerText = text;   
   todoElement.insertAdjacentElement('beforeend', todoElementH3); 

   return todoElement;
}

const getFastestLoadedPhoto = (ids) => {
   toggleLoader();
   const request = ids.map((id) => fetch(`${TODOS_URL}/${id}`));   
   Promise.race(request)
      .then((responses) => responses.json())
      .then((todos) => {    
         const todoHTML = createTodoElement(todos.url, todos.title);      
         dataContainer.append(todoHTML);
      }) 
      .catch((error) => {
         console.error();
      })
      .finally(() => {
         toggleLoader();
      });
}

getFastestLoadedPhoto([60, 12, 55]);



