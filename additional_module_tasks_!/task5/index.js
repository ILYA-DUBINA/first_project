import './index.css';

const inputDonatForm = document.querySelector('.donate-form__donate-input');
const inputDonatContainer = document.querySelector('.donates-container__donates');
const buttonDonatSubmit = document.querySelector('.donate-form__submit-button');    
const totalNumberSum = document.querySelector('#total-amount');
const bNumber = document.querySelectorAll('b');

let numberDonate = 0;
let resultBNumber = 0; 

for(let i = 0; i < bNumber.length; i++){
   resultBNumber += Number(bNumber[i].textContent);
} 

const createDivListDonate = (number) => {
   const createDivContainer = document.createElement('div');
   createDivContainer.classList = 'donate-item';
   createDivContainer.textContent = new Date().toUTCString();
   inputDonatContainer.append(createDivContainer);

   const createBSum = document.createElement('b');
   createBSum.textContent = `- ${number}$`;
   createDivContainer.append(createBSum);

   return createDivContainer;
}


buttonDonatSubmit.addEventListener('click', (event) => {
   event.preventDefault();
   numberDonate = Number(inputDonatForm.value);
   inputDonatContainer.append(createDivListDonate(numberDonate));     
    
   resultBNumber += numberDonate;    
   totalNumberSum.textContent = `${resultBNumber}$`;

   inputDonatForm.value = '';
})   

  














let objNumber = 0;
let objFunction = {}

for(let i = 0; i < bNumber.length; i++){
   objNumber = bNumber[i].textContent;
}

function obj (objNumber) {
   return objFunction = { 
                  date: new Date().toUTCString(),
                  number: objNumber,
                }
}

const result = obj(objNumber);
console.log(result);

localStorage.setItem('donate', JSON.stringify(obj(objNumber)));