//Seleccionando elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

/**
 * Función para agregar nueva tarea
 */
function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') {
        alert("Por favor, escribe una tarea")
        return;
    }
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => taskItem.remove());

    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed')
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        addTask();
    }
})