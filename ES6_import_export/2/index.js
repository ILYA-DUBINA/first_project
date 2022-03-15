import './index.css';

const person = {
   name: 'Ilya',
   age: 33
}
const cookieConsent = document.querySelector('.cookie-consent');

const cookieButton = document.querySelector('.cookie-consent__button');
cookieButton.addEventListener('click', (event) => {
   const { target } = event; 
   if(target){
      localStorage.setItem('person', JSON.stringify(person));      
      cookieConsent.style.display = 'none';      
   } else {
      cookieConsent.style.display = 'block';
   }
})

if(localStorage.getItem('person') == JSON.stringify(person)) {
   cookieConsent.style.display = 'none';       
} else {
   cookieConsent.style.display = 'block';
}