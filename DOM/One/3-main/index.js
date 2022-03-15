const submitButton = document.querySelector('.create-task-block__button');
const inputValue = document.querySelector('.create-task-block__input');

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]

const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;

    const taskItemMainContainer = document.createElement('div');
    taskItemMainContainer.className = 'task-item__main-container';

    const taskItemMainContent = document.createElement('div');
    taskItemMainContent.className = 'task-item__main-content';

    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.className = 'checkbox-form__checkbox';
    const inputId = `task-${taskId}`;
    inputCheckbox.id = inputId;

    const labelCheckbox = document.createElement('label');
    labelCheckbox.htmlFor = inputId;

    const taskItemText = document.createElement('span');
    taskItemText.className = 'task-item__text';
    taskItemText.innerText = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.innerText = 'Удалить';

    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);

    return taskItem;
}

const tasksListContainer = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    tasksListContainer.append(taskItem);
});


const errorElement = document.createElement('span');
errorElement.className = 'error';
errorElement.style.color = 'red';
errorElement.style.fontSize = '14px';
errorElement.textContent = 'Задача с таким названием уже существует.'
errorElement.style.display = 'none';
submitButton.insertAdjacentElement('afterend', errorElement); 

const error = ' ';
submitButton.addEventListener('click', (event) => {
   event.preventDefault();
   const { target } = event;  

   if(target && inputValue.value){      
      const tasksNew = {
         id: Date.now().toString(),
         text: inputValue.value
      }      
      tasks.filter((item) => {
         if(item.text === tasksNew.text){            
            return error = errorElement.style.display = 'block';
         }     
         return error;
      });
      errorElement.style.display = 'none';        

      const taskItem = createTaskItem(tasksNew.id, tasksNew.text);
      tasksListContainer.append(taskItem);

      return tasks.push(tasksNew);
   } else {
      errorElement.style.display = 'block';
   }
   return tasks.push(tasksNew);
});

const searchDivIdTasksElement = document.querySelector('#tasks');

const createModelWindowHTML = (text) => {
   const createDivContent = document.createElement('div');
   createDivContent.className = 'modal-overlay modal-overlay_hidden';
   searchDivIdTasksElement.insertAdjacentElement('afterend', createDivContent);
   
   const createDivOutside = document.createElement('div');
   createDivOutside.className = 'delete-modal';
   createDivContent.insertAdjacentElement('afterbegin', createDivOutside);

   const createTitleH3 = document.createElement('h3');
   createTitleH3.className = 'delete-modal__question';
   createTitleH3.textContent = text;
   createDivOutside.insertAdjacentElement('afterbegin', createTitleH3);

   const createDivButtons = document.createElement('div');
   createDivButtons.className = 'delete-modal__buttons';
   createTitleH3.insertAdjacentElement('afterend', createDivButtons);

   const createButtonCansel = document.createElement('button');
   createButtonCansel.className = 'delete-modal__button delete-modal__cancel-button';
   createButtonCansel.textContent = 'Отмена';
   createDivButtons.insertAdjacentElement('afterbegin', createButtonCansel);

   const createButtonDelete = document.createElement('button');
   createButtonDelete.className = 'delete-modal__button delete-modal__confirm-button';
   createButtonDelete.textContent = 'Удалить';
   createDivButtons.insertAdjacentElement('beforeend', createButtonDelete);
}

createModelWindowHTML('Вы действительно хотите удалить эту задачу?');

tasksListContainer.addEventListener('click', (event) => {
   const isButtonDelete = event.target.closest('.task-item__delete-button');
   const isButtonDeleteId = event.target.closest('.task-item');   
   const removeClass = document.querySelector('.modal-overlay');
   if(isButtonDelete){          
      removeClass.classList.remove('modal-overlay_hidden');
   } else {
      removeClass.classList.add('modal-overlay_hidden');
   }

   const buttonCansel = document.querySelector('.delete-modal__cancel-button');
   buttonCansel.addEventListener('click', () => {      
      removeClass.classList.add('modal-overlay_hidden');
   });
   const buttonDelete = document.querySelector('.delete-modal__confirm-button');
   buttonDelete.addEventListener('click', (event) => {
      const { target } = event;
      tasks.some((item)=>{        
         if(item.id === isButtonDeleteId.dataset.taskId){
            isButtonDeleteId.remove();
            removeClass.classList.add('modal-overlay_hidden');
         }
      });
   });

});

document.addEventListener('keydown', (event) => {
   const { key } = event;
   const tasksItemAll = document.querySelectorAll('.task-item');
   const buttonAll = document.querySelectorAll('button');

   if(key === 'Tab'){      
      document.body.style.backgroundColor = '#24292E';
      tasksItemAll.forEach((item) => {
         item.style.color = '#ffffff';
      });
      buttonAll.forEach((item) => {
         item.style.borderWidth = '1px';
         item.style.borderStyle = 'solid';
         item.style.borderColor = '#ffffff';
      });
   } else {
      document.body.style.backgroundColor = 'initial';
      tasksItemAll.forEach((item) => {
         item.style.color = 'initial';
      });
      buttonAll.forEach((item) => {
         item.style.border = 'initial';
      });
   }
});



