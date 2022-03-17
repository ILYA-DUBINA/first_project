export class CreateForm {   

   constructor(){
      this.inputDonatForm = document.querySelector('.donate-form__donate-input');
      this.inputDonatContainer = document.querySelector('.donates-container__donates');
      this.bNumber = document.querySelectorAll('b');
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
}
