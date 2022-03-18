export class CreateForm {   

   constructor(){
      this.inputDonatForm = document.querySelector('.donate-form__donate-input');
      this.inputDonatContainer = document.querySelector('.donates-container__donates');
      this.timeToday = new Date().toUTCString();          
   }

   createDivListDonate(number){          
      const createDivContainer = document.createElement('div');
      createDivContainer.classList = 'donate-item';
      createDivContainer.textContent = this.timeToday;
      this.inputDonatContainer.append(createDivContainer);

      const createBSum = document.createElement('b');
      createBSum.textContent = `- ${number}$`;
      createDivContainer.append(createBSum);   

      return createDivContainer;      
   }

   createLocalStorage(){  
      let donateLocalStorage = this.getLocalStorage();
      donateLocalStorage.forEach((item) => {   
         const createDivContainer = document.createElement('div');
         createDivContainer.classList = 'donate-item';         
         createDivContainer.textContent = `${item.date} - `;       
         this.inputDonatContainer.append(createDivContainer);

         const createBSum = document.createElement('b');   
         createBSum.innerHTML = item.number;               
         createDivContainer.append(createBSum);

         return createDivContainer;   
      })   
   }
}
