document.getElementById("addTaskButton").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const priority = document.querySelector('input[name="priority"]:checked').value;
  
    if (taskText === "") {
      alert("Por favor, escribe una tarea.");
      return;
    }
  
    // Crear un nuevo elemento <li>
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
  
    // Añadir la tarea a la lista correspondiente
    if (priority === "alta") {
      document.getElementById("altaList").appendChild(taskItem);
    } else {
      document.getElementById("bajaList").appendChild(taskItem);
    }
  
    // Limpiar el campo de texto
    taskInput.value = "";
  });
  