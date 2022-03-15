export default function initApp() {
   const createButton = document.createElement('button');
   createButton.className = 'button';
   createButton.textContent = 'Изменить цвет стрвницы';   
   document.body.append(createButton);

   return createButton;
}