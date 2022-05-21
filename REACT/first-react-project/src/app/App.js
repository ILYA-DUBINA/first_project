import React, { useState } from "react";
import api from "./api";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";
import "bootstrap/dist/css/bootstrap.css";

function App() {
   const [users, setUsers] = useState(api.users.fetchAll());

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
         <SearchStatus length={users.length} />      
          
         {users.length > 0 &&
            <table className="table table-striped">
               <thead>
                  <tr>
                     <Users users={users}/>                 
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