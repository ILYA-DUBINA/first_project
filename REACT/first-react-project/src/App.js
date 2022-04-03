import React, { useState } from "react";
import Users from "./components/users";
import SerchStatus from "./components/searchStatus";
import API from "./api";
import renderPhrase from "./components/searchStatus";
import "bootstrap/dist/css/bootstrap.css";

function App() {
   const [users, setUsers] = useState(api.users.fetchAll());

   const createTableThead = () => {  
      const keysAllObject = Object.keys(users[0]);   
            delete keysAllObject[0];  
            delete keysAllObject[keysAllObject.length-1];  
      return keysAllObject.map((prevState, keys) => (               
               <th scope="col" key={keys}>{prevState}</th>
            )); 
   } 

   const deleteHandler = (id) => {
      setUsers(users.filter((item) => item._id !== id));      
   };

   const createTableTbody = () => {                
      return users.map((prevState) => (         
               <tr key={prevState._id}>
                  <td>{prevState.name}</td> 
                  <td>           
                        {prevState.qualities.map((item) => (<span className={"badge m-1 bg-"+item.color} key={item._id}>{item.name}</span>))}                                                
                  </td>
                  <td>{prevState.profession.name}</td>                     
                  <td>{prevState.completedMeetings}</td>
                  <td>{prevState.rate + '/5'}</td>                                 
                  <td><button className="btn btn-danger m-2" onClick={() => deleteHandler(prevState._id)}>Delete</button></td>
               </tr>                        
            ))     
   }
   
   return (
      <>  
         <h2>
            {renderPhrase()}
         </h2>
         {users.length > 0 &&
            <table className="table table-striped">
               <thead>
                  <tr>
                     {createTableThead()}
                  </tr>
               </thead>
               <tbody>
                  {createTableTbody()}
               </tbody>
            </table>
         }
      </>
   );
}

export default App;