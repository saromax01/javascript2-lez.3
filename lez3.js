document.addEventListener("DOMContentLoaded", function () {
  const inputTask = document.getElementById("newTask");
  const addButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", function () {
    const taskText = inputTask.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      const taskTextElement = document.createElement("span");
      taskTextElement.innerText = taskText;
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.innerText = "Elimina";

      li.appendChild(taskTextElement);
      li.appendChild(deleteButton);
      taskList.appendChild(li);

      inputTask.value = "";

      li.addEventListener("click", function () {
        taskTextElement.classList.toggle("completed");
      });

      deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
      });
    }
  });
});
