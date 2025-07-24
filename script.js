let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('taskInput');
  const button = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  button.addEventListener('click', () => {
    const text = input.value.trim();
    if (text === '') return;

    const task = { id: Date.now(), text, completed: false };
    tasks.push(task);
    input.value = '';
    renderTasks();
  });

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = task.text;
      if (task.completed) span.classList.add('completed');

      const controls = document.createElement('div');

      const completeBtn = document.createElement('button');
      completeBtn.textContent = '✔';
      completeBtn.onclick = () => {
        task.completed = !task.completed;
        renderTasks();
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '✖';
      deleteBtn.onclick = () => {
        tasks = tasks.filter(t => t.id !== task.id);
        renderTasks();
      };

      controls.appendChild(completeBtn);
      controls.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(controls);
      taskList.appendChild(li);
    });
  }
});
