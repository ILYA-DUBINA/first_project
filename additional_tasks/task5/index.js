import './index.css';

class CreateForm {   

   constructor(){
      this.inputDonatForm = document.querySelector('.donate-form__donate-input');
      this.inputDonatContainer = document.querySelector('.donates-container__donates');
      this.bNumber = document.querySelectorAll('b');  
         
   }

   createDivListDonate(number){
      const createDivContainer = document.createElement('div');
      createDivContainer.classList = 'donate-item';
      createDivContainer.textContent = new Date().toUTCString();
      this.inputDonatContainer.append(createDivContainer);

      const createBSum = document.createElement('b');
      createBSum.textContent = `- ${number}$`;
      createDivContainer.append(createBSum);

      return createDivContainer;
   }
}

// const inputDonatForm = document.querySelector('.donate-form__donate-input');
// const inputDonatContainer = document.querySelector('.donates-container__donates');
// const buttonDonatSubmit = document.querySelector('.donate-form__submit-button');    
// const totalNumberSum = document.querySelector('#total-amount');
// const bNumber = document.querySelectorAll('b');

// let numberDonate = 0;
// let resultBNumber = 0; 

// for(let i = 0; i < bNumber.length; i++){
//    resultBNumber += Number(bNumber[i].textContent);
// } 

// const createDivListDonate = (number) => {
//    const createDivContainer = document.createElement('div');
//    createDivContainer.classList = 'donate-item';
//    createDivContainer.textContent = new Date().toUTCString();
//    inputDonatContainer.append(createDivContainer);

//    const createBSum = document.createElement('b');
//    createBSum.textContent = `- ${number}$`;
//    createDivContainer.append(createBSum);

//    return createDivContainer;
// }

class ButtonClick extends CreateForm {
   #buttonDonatSubmit  
   #numberDonate  
   #totalNumberSum 

   constructor(){
      super();
      this.#buttonDonatSubmit = document.querySelector('.donate-form__submit-button');
      this.#numberDonate = 0;      
      this.resultBNumber = 0; 
      this.#totalNumberSum = document.querySelector('#total-amount');  
   }

   returnNumber(){
      for(let i = 0; i < this.bNumber.length; i++){
         this.resultBNumber += Number(this.bNumber[i].textContent);        
      } 
      return this.resultBNumber;      
   }

   buttonClick(){
      this.resultBNumber = this.returnNumber();

      this.#buttonDonatSubmit.addEventListener('click', (event) => {
         event.preventDefault();
         this.#numberDonate = Number(this.inputDonatForm.value);
         this.inputDonatContainer.append(this.createDivListDonate(this.#numberDonate));           
         
         this.resultBNumber += this.#numberDonate;    
         this.#totalNumberSum.textContent = `${this.resultBNumber}$`;

         this.inputDonatForm.value = '';
      })   
   }
}

class CreateObject extends CreateForm {
   #objNumber
   #objFunction

   constructor(){
      super();
      this.#objNumber = 0;
      this.#objFunction = {}
   }

   idText(){
      for(let i = 0; i < this.bNumber.length; i++){
         this.#objNumber = this.bNumber[i].textContent;
      }
   }

   createObject(objNumber){     
      return this.#objFunction = { 
               date: new Date().toUTCString(),
               number: this.#objNumber,
            }
   }
}

  

// let objNumber = 0;
// let objFunction = {}

// function obj (objNumber) {
//    return objFunction = { 
//                   date: new Date().toUTCString(),
//                   number: objNumber,
//                }
// }

// const result = obj(objNumber);
// console.log(result);

//localStorage.setItem('donate', JSON.stringify(obj(objNumber)));//????????????


const createForm = new CreateForm();

const buttonClick = new ButtonClick();
buttonClick.buttonClick();

const createObjectClass = new CreateObject();
createObjectClass.idText();
createObjectClass.createObject();