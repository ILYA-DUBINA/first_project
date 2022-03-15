// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;
// const createNewPost = async () => {
//    try {
//       isLoading = true;
//       const getPostData = await fetch(POSTS_URL, {method: 'POST',})
//       const users = await getPostData.json();
//       const result = users;
//       console.log(result);
//    } catch(error){
//       console.error();
//    } finally {
//       console.log('finally');
//    }
// };

// createNewPost();

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;
// const createNewPost = () => {
// isLoading = true;
// fetch(POSTS_URL, {
//   method: 'POST',
// })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log('result', result)
//   })
//   .catch((error) => {
//     console.log('error', error)
//   })
//   .finally(() => {
//     isLoading = false;
//   });
// };
// createNewPost();

//? +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodosByIds = async (ids) => {
//    try {
//    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//    const promiseAll = await Promise.all(requests);   
//    const dataResults = await Promise.all(promiseAll.map((data) => data.json()));   
//    console.log(dataResults);
//    } catch(error){
//       console.log('error', error);
//    } finally {
//       console.log('finally');
//    }
// }
// getTodosByIds([43, 21, 55, 100, 10]);

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   Promise.all(requests)
//       .then((responses) => {
//           const dataResults = responses.map((data) => data.json());
//           return Promise.all(dataResults)
//       })
//       .then((allTasks) => {
//           console.log(allTasks);
//       })
//       .catch((error) => {
//           console.log(error);
//       })
// }
// getTodosByIds([43, 21, 55, 100, 10]);

//?==================================================================================

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const dataContainer = document.querySelector('#data-container');

const getLiElement = (text) => {
   const createLiElement = document.createElement('li');
   createLiElement.textContent = text;
   // dataContainer.insertAdjacentElement('afterbegin', createLiElement);

   return createLiElement;
}
const getLoadingHidden = () => {
   const searchLoader = document.querySelector('#loader');
   const searchHidden = searchLoader.getAttribute('hidden') !== null;
   if(searchHidden){
      searchLoader.removeAttribute('hidden');
   } else {
      searchLoader.setAttribute('hidden', '');
   }
}

const renderAlbums =  async() => {
   getLoadingHidden();
   try {
      const getUrl = await fetch(ALBUMS_URL);
      const urlJson = await getUrl.json();
      urlJson.forEach((item) => {
         const albumHTML = getLiElement(item.title);
         dataContainer.append(albumHTML);
      })
   } catch {
      dataContainer.innerText = 'Произошла ошибка в получении данных об альбомах...';
   } finally {
      getLoadingHidden();
   }
}

renderAlbums();