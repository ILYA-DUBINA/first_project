import { CreateForm } from "./donateForm/createForm";
import { ButtonClick } from "./donateForm/clickButton";
// import { CreateObject } from "./donateForm/createObject";

export default class StartProject {
   constructor(){   
      this.createForm = new CreateForm();
      this.buttonClick = new ButtonClick();
      this.resultBNumber = 0;
   }

   render(){
      this.buttonClick.buttonClick();         
   }   

   returnNumber(){      
      this.buttonClick.createLocalStorage();
      let bNumber = document.querySelectorAll('b');     
      for(let i = 0; i < bNumber.length; i++){     
         this.resultBNumber += Number(bNumber[i].textContent);        
      }
      // console.log(this.resultBNumber);
      return this.resultBNumber;   
   }
}