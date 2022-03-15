// const tasksListElement = document.querySelector('.tasks-list');

// const tasks = [
//     {
//         id: '1138465078061',
//         completed: false,
//         text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//         id: '1138465078062',
//         completed: false,
//         text: 'Выполнить тест после урока',
//     },
//     {
//         id: '1138465078063',
//         completed: false,
//         text: 'Выполнить ДЗ после урока',
//     },
// ]

// const createTaskItem = (taskId, taskText) => {
//    return tasksListContainer.innerHTML = 
//       `<div class="task-item" data-task-id="${taskId}">
//          <div class="task-item__main-container">
//             <div class="task-item__main-content">
//                <form class="checkbox-form">
//                   <input class="checkbox-form__checkbox" type="checkbox" id="${taskId}">
//                   <label for="${taskId}"></label>
//                </form>
//                <span class="task-item__text">${taskText}</span>
//             </div>
//             <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">Удалить</button>
//          </div>
//       </div>`;  
// }
// const tasksItemElement = document.querySelector('.task-item');
// const tasksInputElement = document.querySelector('.checkbox-form__checkbox');
// const tasksLabelElement = document.querySelector('label');
// const tasksSpanElement = document.querySelector('.task-item__text');


// let result = tasks.map((item, index) => {
//    let id = Object.values(item)[0]; 
//    tasksItemElement.dataset.taskId = id[index];   
// });
// console.log(result);




// const createTaskItem = (taskId, taskText) => {
//     const taskItem = document.createElement('div');
//     taskItem.className = 'task-item';
//     taskItem.dataset.taskId = taskId;

//     const taskItemMainContainer = document.createElement('div');
//     taskItemMainContainer.className = 'task-item__main-container';

//     const taskItemMainContent = document.createElement('div');
//     taskItemMainContent.className = 'task-item__main-content';

//     taskItem.append(taskItemMainContainer);
//     taskItemMainContainer.append(taskItemMainContent);

//     const checkboxForm = document.createElement('form');
//     checkboxForm.className = 'checkbox-form';

//     const inputCheckbox = document.createElement('input');
//     inputCheckbox.type = 'checkbox';
//     inputCheckbox.className = 'checkbox-form__checkbox';
//     const inputId = `task-${taskId}`;
//     inputCheckbox.id = inputId;

//     const labelCheckbox = document.createElement('label');
//     labelCheckbox.htmlFor = inputId;

//     const taskItemText = document.createElement('span');
//     taskItemText.className = 'task-item__text';
//     taskItemText.innerText = taskText;

//     const deleteButton = document.createElement('button');
//     deleteButton.className = 'task-item__delete-button default-button delete-button';
//     deleteButton.innerText = 'Удалить';

//     taskItemMainContent.append(checkboxForm, taskItemText);
//     checkboxForm.append(inputCheckbox, labelCheckbox);
//     taskItemMainContainer.append(deleteButton);

//     return taskItem;
// }

// const tasksListContainer = document.querySelector('.tasks-list');
// tasks.forEach((task) => {
//     const taskItem = createTaskItem(task.id, task.text);
//     tasksListContainer.append(taskItem);
// });

//? =========================================================

