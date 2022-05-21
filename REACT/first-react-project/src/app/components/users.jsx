import React, { useState } from "react";

const Users = ({users}) => {     
   const keysAllObject = Object.keys(users[0]);   
            delete keysAllObject[0];  
            delete keysAllObject[keysAllObject.length-1];  
      
   return keysAllObject.map((prevState, keys) => (               
      <th scope="col" key={keys}>{prevState}</th>
   ));     
}
export default Users; 