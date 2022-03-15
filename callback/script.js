// setTimeout(() => {
//  console.log('setTimeout');
// }, 0);
 
// const promise = new Promise((resolve) => {
//  console.log('Promise');
//  resolve();
// });
 
// promise.then(() => {
//  console.log('Promise resolve');
// });
 
// console.log('End');

// function runCode() {
//  console.log('before promise')
//  return new Promise((resolve) => {
//    setTimeout(() => {
//      console.log('Zero Promise')
 
//      resolve()
//    }, 0)
//  })
// }
 
// setTimeout(() => {
//  console.log('Zero')
// }, 0)
 
// runCode().then(() => console.log('Zero Promise Invoked'))
 
// console.log('One')

// const getData = (callback) => {
//  fetch('https://jsonplaceholder.typicode.com/users/1')
//    .then((response) => response.json())
//    .then((user) => {
//      console.log('Success');
//      callback(user);
//    })
//    .catch((error) => {
//      console.log(error);
//    });
// }
 
// getData(() => {
//  console.log('user received');
 
//  const promise = new Promise((resolve) => {
//    setTimeout(() => {
//      resolve('promise resolved');
//    }, 500);
 
//    console.log('in promise');
//    setTimeout(() => {
//      console.log('last set timeout');
//    }, 400);
 
//  });
 
//  promise.then((result) => {
//    console.log(result);
//  })
// });
 
// console.log('End')


//?===========================================================

const idPost_URL = 'https://jsonplaceholder.typicode.com/posts';
const idConcretePost_URL = 'https://jsonplaceholder.typicode.com/comments?postId=';

const getCreatePostHtml = (title, textPost, commentTitle) => {
   const createDivPostContent = document.createElement('div');
   createDivPostContent.className = 'post';
   createDivPostContent.id = 'post';

   const createH1Post = document.createElement('h1');
   createH1Post.className = 'post__title';
   createH1Post.textContent = title;
   createDivPostContent.insertAdjacentElement('afterbegin', createH1Post);

   const createPPost = document.createElement('p');
   createPPost.className = 'post__text';
   createPPost.textContent = textPost;
   createH1Post.insertAdjacentElement('afterend', createPPost);

   const createBPost = document.createElement('b');
   createBPost.className = 'post__comments-text';
   createBPost.style.borderBottom = '2px solid black';
   createBPost.style.display = 'block';
   createBPost.textContent = commentTitle;
   createPPost.insertAdjacentElement('afterend', createBPost);
  
   const createDivComments = document.createElement('div');
   createDivComments.className = 'post__comments';
   createBPost.insertAdjacentElement('afterend', createDivComments);

   return createDivPostContent;
}

const createCommentsAll = (email, comments) => {
   const createDivCommentPost = document.createElement('div');
   createDivCommentPost.className = 'post-comment';

   const createSpanAuthor = document.createElement('span');
   createSpanAuthor.className = 'post-comment__author';
   createSpanAuthor.textContent = email;
   createDivCommentPost.insertAdjacentElement('afterbegin', createSpanAuthor);

   const createSpanTextComment = document.createElement('p');
   createSpanTextComment.className = 'post-comment__text';
   createSpanTextComment.textContent = comments;
   createSpanAuthor.insertAdjacentElement('afterend', createSpanTextComment);

   return createDivCommentPost;
}

// const renderPost = (postId) => {
//    const request = fetch(`${idPost_URL}/${postId}`);
//    request
//       .then((Response) => {
//          return Response.json();
//       })
//       .then((result) => {
//          const createCommentsFinally = getCreatePostHtml(result.title, result.body, 'Комментарии');
//          document.body.append(createCommentsFinally);
//          const requestTwo = fetch(`${idConcretePost_URL}${result.id}`);        
//          requestTwo            
//             .then((response) => response.json())
//             .then((resultTwo) => {          
//                resultTwo.forEach((item) => {                          
//                   const searchDivElement = document.querySelector('.post__comments');
//                   const createCommentsFinallyTwo = createCommentsAll(item.email, item.body);
//                   searchDivElement.append(createCommentsFinallyTwo);
//                })                 
//             })
//             .catch((error) => {
//                console.log(error);
//             })
//       })
//       .catch((error) => {
//          console.log(error);
//       })
// }
const renderPost = async (postId) => {
   try{
   const request = await fetch(`${idPost_URL}/${postId}`);
   const response = await request.json();
   const result = getCreatePostHtml(response.title, response.body, 'Комментарии');
      document.body.append(result);
   const requestTwo = await fetch(`${idConcretePost_URL}${response.id}`);        
   const responseTwo = await requestTwo.json();  
      responseTwo.forEach((item) => {                          
         const searchDivElement = document.querySelector('.post__comments');
         const createCommentsFinallyTwo = createCommentsAll(item.email, item.body);
         searchDivElement.append(createCommentsFinallyTwo);
      })    
   } catch (error){
      console.log(error);
   }
}

renderPost(1);