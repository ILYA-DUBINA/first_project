import './index.css';
import initApp from './src/app';
import { getRandomColor } from './src/utils';


initApp().addEventListener('click', (event) => {   
   document.body.style.backgroundColor = getRandomColor();
})