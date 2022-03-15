// const outsideContainer = document.querySelector('.container');
// const options = [
//   { value: 1, text: 'JavaScript' },
//   { value: 2, text: 'NodeJS' },
//   { value: 3, text: 'ReactJS' },
//   { value: 4, text: 'HTML' },
//   { value: 5, text: 'CSS' }
// ];
// const mainContainer = document.querySelector('#container'); 

// class CustomSelect {

//    constructor(id, options){
//       this._id = id;
//       this._options = options;         
//    }

//    render (container) {
//       const createDivContent = document.createElement('div');
//       createDivContent.className = `select-dropdown select-dropdown--${this._id}`;
//       outsideContainer.insertAdjacentElement('afterbegin', createDivContent);

//       const createButtonElements = document.createElement('button');
//       createButtonElements.className = `select-dropdown__button select-dropdown__button--${this._id}`;
//       createDivContent.insertAdjacentElement('afterbegin', createButtonElements);

//       const insideButtonSpan = document.createElement('span');
//       insideButtonSpan.className = `select-dropdown select-dropdown--${this._id}`;
//       insideButtonSpan.textContent = 'Выберите элемент';
//       createButtonElements.insertAdjacentElement('afterbegin', insideButtonSpan);

//       const createUlList = document.createElement('ul');
//       createUlList.className = `select-dropdown__list select-dropdown__list--${this._id}`;
//       createDivContent.insertAdjacentElement('beforeend', createUlList);

//       this._options.forEach((item) => {   
//          const createLiElements = document.createElement('li');
//          createLiElements.className = 'select-dropdown__list-item';   
//          createLiElements.textContent = item.text;
//          createLiElements.dataset.value = item.value;
//          createUlList.insertAdjacentElement('afterbegin', createLiElements);
//       });
//    }

// }

// const customSelect = new CustomSelect('123', options);
// customSelect.render(mainContainer);

// const openList = document.querySelector('.select-dropdown__button');
// const openListUl = document.querySelector('.select-dropdown__list');
// openList.addEventListener('click', () => { 
//    if(!openListUl.classList.contains('active')){
//       openListUl.classList.add('active');
//    } else {
//       openListUl.classList.remove('active');
//    }
// });

// let numberLi; 
// let currentSelectedOption;
// const allsearchLi = document.querySelectorAll('.select-dropdown__list-item');
// mainContainer.addEventListener('click', (event) => {
//    const { target } = event;
//    const searchLi = target.closest('.select-dropdown__list-item');
//    console.log(searchLi);
//    if(searchLi){
//       let numberLiSearch = Number(searchLi.dataset.value);
//       options.filter((item) => {
//          if(item.value === numberLiSearch){
//             currentSelectedOption = item;     
//             const searchSpanButton = document.querySelector('span');
//             console.log(searchSpanButton);
//             searchSpanButton.className = `select-dropdown select-dropdown--${currentSelectedOption.value}`;
//             searchSpanButton.textContent = currentSelectedOption.text;    
//             openListUl.classList.remove('active');        
//          }
//       });  
//    }
// });












const mainContainer = document.querySelector('#container'); 
const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' }
];

class CustomSelect {

   constructor(id, options){
      this._id = id;
      this._options = options;         
   }

   render (container) {
      const outsideContainer = document.querySelector('.container');
      const createDivContent = document.createElement('div');
      createDivContent.className = `select-dropdown select-dropdown--${this._id}`;
      outsideContainer.insertAdjacentElement('afterbegin', createDivContent);

      const createButtonElements = document.createElement('button');
      createButtonElements.className = `select-dropdown__button select-dropdown__button--${this._id}`;
      createDivContent.insertAdjacentElement('afterbegin', createButtonElements);

      const insideButtonSpan = document.createElement('span');
      insideButtonSpan.className = `select-dropdown select-dropdown--${this._id}`;
      insideButtonSpan.textContent = 'Выберите элемент';
      createButtonElements.insertAdjacentElement('afterbegin', insideButtonSpan);

      const createUlList = document.createElement('ul');
      createUlList.className = `select-dropdown__list select-dropdown__list--${this._id}`;
      createDivContent.insertAdjacentElement('beforeend', createUlList);

      this.createLi();
   }

   createLi(){
      this._options.forEach((item) => {   
         const createUlList = document.querySelector('ul');
         const createLiElements = document.createElement('li');
         createLiElements.className = 'select-dropdown__list-item';   
         createLiElements.textContent = item.text;
         createLiElements.dataset.value = item.value;
         createUlList.insertAdjacentElement('afterbegin', createLiElements);
      });
   }

   addActive(){
      const openList = document.querySelector('.select-dropdown__button');
      const openListUl = document.querySelector('.select-dropdown__list');
      openList.addEventListener('click', () => { 
         if(!openListUl.classList.contains('active')){
            openListUl.classList.add('active');
         } else {
            openListUl.classList.remove('active');
         }
      });
   }

   searchIdLIElement(){
      const openListUl = document.querySelector('.select-dropdown__list');
      mainContainer.addEventListener('click', (event) => {
         const { target } = event;
         const searchLi = target.closest('.select-dropdown__list-item');
         if(searchLi){
            let numberLiSearch = Number(searchLi.dataset.value);
            options.filter((item) => {
               if(item.value === numberLiSearch){         
                  const searchSpanButton = document.querySelector('span');   
                  searchSpanButton.className = `select-dropdown select-dropdown--${item.value}`;
                  searchSpanButton.textContent = item.text;    
                  openListUl.classList.remove('active');        
               }
            });  
         }
      });
   }
}

const customSelect = new CustomSelect('123', options);
customSelect.render(mainContainer);
customSelect.addActive();
customSelect.searchIdLIElement();


