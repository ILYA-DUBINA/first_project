import React, { useState } from "react";
import api from "../api";

const Users = () => {
   const [users, setUsers] = useState(api.users.fetchAll());

   const createTableThead = () => {  
      const keysAllObject = Object.keys(users[0]);   
            delete keysAllObject[0];  
      return keysAllObject.map((prevState, keys) => (               
               <th scope="col" key={keys}>{prevState}</th>
            )); 
   }
   const createTableTbody = () => {       
      return users.map((prevState) => (         
               <tr key={prevState._id}>
                  <td>{prevState.name}</td> 
                  <td>{prevState.qualities.map((item) => {                      
                        if(prevState._id) {
                           let element = item.name;
                           console.log(element);
                           element.style.backgroundColor = item.color;
                           return  element;
                        }                     
                     })}
                  </td>
                  <td>{prevState.profession.name}</td>                     
                  <td>{prevState.completedMeetings}</td>
                  <td>{prevState.rate + '/5'}</td>
                  <td>{prevState.bookmark.toString()}</td>
               </tr>                        
            ))     
   }

   return (
      <>
         <table className="table">
            <thead>
               <tr>
                  {createTableThead()}
               </tr>
            </thead>
            <tbody>
               {createTableTbody()}
            </tbody>
         </table>
      </>
   );
};

export default Users; 

// const Users = () => {
//   const initialState = [
//     { id: 1, title: "Title1", text: "Text1", likes: 0 },
//     { id: 2, title: "Title2", text: "Text2", likes: 1 },
//     { id: 3, title: "Title3", text: "Text3", likes: 2 },
//   ];

//   const [posts, setPosts] = useState(initialState);

//   const likeHandler = (id) => {
//     setPosts(
//       posts.map((item) =>
//         item.id === id ? { ...item, likes: item.likes + 1 } : item
//       )
//     );
//   };

//   const deleteHandler = (id) => {
//     setPosts(posts.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       {/* Posts: */}
//       {posts.map((item) => (
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//           <h3>{item.text}</h3>
//           {/* <button onClick={() => likeHandler(id)}>Likes: {likes}</button>
//           <button onClick={() => deleteHandler(id)}>Delete</button> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;