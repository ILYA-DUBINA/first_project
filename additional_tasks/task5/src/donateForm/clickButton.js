import { CreateForm } from "./createForm";

export class ButtonClick extends CreateForm {
   #buttonDonatSubmit  
   #numberDonate  
   #totalNumberSum 
   #objFunction

   constructor(){
      super();
      this.#buttonDonatSubmit = document.querySelector('.donate-form__submit-button');
      this.#numberDonate = 0;      
      this.resultBNumber = 0;      
      this.#totalNumberSum = document.querySelector('#total-amount');
      this.#objFunction = {};        
      this.array = [];        
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
    
         this.setLocalStorage();
         this.inputDonatForm.value = '';
      })   
   }

   createObject(){     
      return this.#objFunction = { 
               date: this.timeToday,
               number: this.#numberDonate,
            }
   }
   setLocalStorage(){
      this.array.push(this.createObject());
      localStorage.setItem('donate', JSON.stringify(this.array));      
   }
   getLocalStorage(){
      const donate = localStorage.getItem('donate');
      const showDonate = JSON.parse(donate);
      return showDonate;
   }
}