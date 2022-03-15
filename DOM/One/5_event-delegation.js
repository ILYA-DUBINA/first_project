'use strict'

const tasks = document.querySelector('#tasks');
const createInnerElementForm = document.createElement('form');
const createInnerElementLabel = document.createElement('label');
const createInnerElementLabelTwo = document.createElement('label');
const createInnerElementButton = document.createElement('button');
const createInnerElementInput = document.createElement('input');
const createInnerElementInputTwo = document.createElement('input');

createInnerElementForm.className = 'create-user-form';
tasks.insertAdjacentElement('afterbegin', createInnerElementForm);

createInnerElementLabel.textContent = 'Имя';
createInnerElementForm.insertAdjacentElement('afterbegin', createInnerElementLabel);
createInnerElementLabelTwo.textContent = 'Пароль';
createInnerElementLabel.insertAdjacentElement('afterend', createInnerElementLabelTwo);

createInnerElementInput.type = 'text';
createInnerElementInput.name = 'userName';
createInnerElementInput.placeholder = 'Введите ваше имя';
createInnerElementLabel.insertAdjacentElement('beforeend', createInnerElementInput);

createInnerElementInputTwo.type = 'password';
createInnerElementInputTwo.name = 'password';
createInnerElementInputTwo.placeholder = 'Придумайте пароль';
createInnerElementLabelTwo.insertAdjacentElement('beforeend', createInnerElementInputTwo);

createInnerElementButton.type = 'submit';
createInnerElementButton.textContent = 'Подтвердить';
createInnerElementLabelTwo.insertAdjacentElement('afterend', createInnerElementButton);

document.body.innerHTML = '<form class="create-user-form"> <label> Имя <input type="text" name="userName" placeholder="Введите ваше имя"> </label> <label>Пароль<input type="password" name="password" placeholder="Придумайте Пароль"></label><button type="submit">Подтвердить</button></form>';
