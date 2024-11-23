document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const altaList = document.getElementById('altaList');
  const bajaList = document.getElementById('bajaList');

  // Función para agregar tareas
  const addTask = () => {
    const taskText = taskInput.value.trim();
    const priority = document.querySelector('input[name="priority"]:checked').value;

    if (taskText === '') {
      alert('Por favor, escribe una tarea.');
      return;
    }

    // Crear elemento de tarea
    const taskItem = document.createElement('div');
    taskItem.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Botón para completar
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completar';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
    });

    // Botón para eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
      if (priority === 'alta') {
        altaList.removeChild(taskItem);
      } else {
        bajaList.removeChild(taskItem);
      }
    });

    // Añadir elementos al contenedor de tarea
    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);

    // Añadir tarea a la lista correspondiente
    if (priority === 'alta') {
      altaList.appendChild(taskItem);
    } else {
      bajaList.appendChild(taskItem);
    }

    // Limpiar el campo de texto
    taskInput.value = '';
  };

  // Evento para añadir tarea
  addTaskBtn.addEventListener('click', addTask);
});
