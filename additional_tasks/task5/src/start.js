import { CreateForm } from "./donateForm/createForm";
import { ButtonClick } from "./donateForm/clickButton";
// import { CreateObject } from "./donateForm/createObject";

export default class StartProject {
   constructor(){
      this.createForm = new CreateForm();
      this.buttonClick = new ButtonClick();
      // this.createObject = new CreateObject();
   }

   render(){
      this.buttonClick.buttonClick();
   }
}