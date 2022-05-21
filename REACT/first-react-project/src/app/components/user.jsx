import React from "react";
import Users from "./users";

const User = ({
   
}) => {
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

export default User;