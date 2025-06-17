// Initial setup
document.addEventListener('DOMContentLoaded', loadTasks);


const btnAddTask = document.getElementById('addTaskBtn');
const overlay = document.querySelector('.overlay');
const inputNameTask = document.getElementById('taskInput');
const submitTaskBtn = document.getElementById('submit');
const tasksContainer = document.querySelector('.tasks');
const NumberOfTasksSpan = document.getElementById('tasksNumber');
const cancelTaskBtn = document.getElementById('cancel')
let numberOfTasks = 0;


btnAddTask.addEventListener('click', addNewTaskGetOverlay);
function addNewTaskGetOverlay() {
    overlay.style.display = 'flex';
}


submitTaskBtn.addEventListener('click', addTask);
function addTask() {
    const inputNameTaskValue = inputNameTask.value.trim();

    if (inputNameTaskValue === '') {
        alert('Please, enter the task name!!');
    } else if (inputNameTaskValue.length > 20) {
        alert('Task name is too long!!');
    } else {
        numberOfTasks++;
        const taskObj = { name: inputNameTaskValue, completed: false };
        saveTask(taskObj);

        overlay.style.display = 'none';
        inputNameTask.value = '';
    }
}

// Save a task to localStorage
function saveTask(taskObj) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTask(taskObj);
    updateTaskCount();
}

// Load tasks from localStorage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    numberOfTasks = tasks.length;
    tasks.forEach(task => renderTask(task));
    updateTaskCount();
}

function renderTask(taskObj) {
    let task = document.createElement('div');
    task.classList.add('task');

    let PNameTask = document.createElement('p');
    PNameTask.classList.add('nameTask');
    PNameTask.innerText = taskObj.name;
    if (taskObj.completed) {
        PNameTask.style.textDecoration = 'line-through';
        task.style.backgroundColor = '#919191';
    }

    let buttonsTask = document.createElement('div');
    buttonsTask.classList.add('butonsTask');

    let checkedTaskBtn = document.createElement('button');
    checkedTaskBtn.classList.add('checkedTask');
    checkedTaskBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkedTaskBtn.addEventListener('click', () => taskCompleted(taskObj, task, PNameTask));

    let removeTaskBtn = document.createElement('button');
    removeTaskBtn.classList.add('removeTask');
    removeTaskBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeTaskBtn.addEventListener('click', () => removeTask(taskObj, task));

    buttonsTask.appendChild(checkedTaskBtn);
    buttonsTask.appendChild(removeTaskBtn);
    task.appendChild(PNameTask);
    task.appendChild(buttonsTask);
    tasksContainer.appendChild(task);
}


function taskCompleted(taskObj, taskElement, PNameTask) {
    PNameTask.style.textDecoration = 'line-through';
    taskElement.style.backgroundColor = '#919191';
    updateTaskCompletion(taskObj.name, true);
}


function removeTask(taskObj, taskElement) {
    taskElement.remove();
    numberOfTasks--;
    removeTaskFromStorage(taskObj.name);
    updateTaskCount();
}


function updateTaskCompletion(taskName, completed) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
        if (task.name === taskName) {
            return { ...task, completed };
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove a task from localStorage
function removeTaskFromStorage(taskName) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.name !== taskName);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update task count
function updateTaskCount() {
    NumberOfTasksSpan.innerHTML = `<p>Tasks: ${numberOfTasks}</p>`;
}




cancelTaskBtn.addEventListener('click' , cancelTask)
function cancelTask(){
    overlay.style.display = 'none'
} 