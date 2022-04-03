import React from "react";

const renderPhrase = (number) => {
   const lastOne = Number(number.toString().slice(-1));
   if(number > 4 && number < 15) return "Человек тусанет";
   if([2,3,4].indexOf(lastOne) >= 0) return "Человека тусанет";
   if(lastOne === 1 ) return "Человек тусанет";

   return (
      <>
         <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
            {users.length > 0 ? `${users.length} ${renderPhrase(users.length)}  с тобой сегодня` : "никто с тобой не тусанет"}
         </span>
      </>
   );
}

export default renderPhrase;