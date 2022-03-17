// import { CreateForm } from "./createForm";

// export class CreateObject extends CreateForm {
//    #objNumber
//    #objFunction

//    constructor(){
//       super();
//       this.#objNumber = 0;
//       this.#objFunction = {}
//    }

//    idText(){
//       for(let i = 0; i < this.bNumber.length; i++){
//          this.#objNumber = this.bNumber[i].textContent;
//       }
//    }

//    createObject(objNumber){     
//       return this.#objFunction = { 
//                date: new Date().toUTCString(),
//                number: this.#objNumber,
//             }
//    }

//    setLocalStorage(){
//       localStorage.setItem('donate', JSON.stringify(this.createObject()));
//    }
//    getLocalStorage(){
//       const donate = localStorage.getItem('donate');
//       const showDonate = JSON.parse(donate);
//       return showDonate;
//    }
// }
