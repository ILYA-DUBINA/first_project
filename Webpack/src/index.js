import '../index.css';
import imgJS from '../images/j.jpg';

const jsCreateHtml = document.createElement('img');
jsCreateHtml.className = 'js-image';
jsCreateHtml.src = imgJS;

document.body.append(jsCreateHtml);

