const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('add-btn');
const taskCount = document.getElementById('task-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const clearBtn = document.getElementById('clear-btn');

let tasks = [];
let filter = 'all'; // all, active, completed

// Load tasks from localStorage on startup
window.onload = () => {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    tasks = JSON.parse(saved);
  }
  renderTasks();
};

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks based on current filter
function renderTasks() {
  taskList.innerHTML = '';

  // Filter tasks
  let filteredTasks = tasks;
  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }

  // Create DOM elements for each task
  filteredTasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    if (task.completed) {
      taskItem.classList.add('completed');
    }
    taskItem.style.opacity = 0;

    const taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('task-text');
    taskTextSpan.textContent = task.text;

    // Toggle complete on click
    taskTextSpan.addEventListener('click', () => {
      toggleComplete(task.id);
    });

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = '×';
    deleteButton.title = 'Delete task';
    deleteButton.addEventListener('click', () => {
      deleteTask(task.id);
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Animate fade-in
    setTimeout(() => {
      taskItem.style.opacity = 1;
    }, 10);
  });

  updateTaskCount();
  updateFilterButtons();
}

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  tasks.push({
    id: Date.now(),
    text: taskText,
    completed: false,
  });

  taskInput.value = '';
  saveTasks();
  renderTasks();
  taskInput.focus();
}

// Toggle completion status
function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

// Delete a task by id
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// Clear all tasks
function clearAllTasks() {
  tasks = [];
  saveTasks();
  renderTasks();
}

// Update task count display
function updateTaskCount() {
  const activeCount = tasks.filter(task => !task.completed).length;
  taskCount.textContent = `${activeCount} task${activeCount !== 1 ? 's' : ''} left`;
}

// Update which filter button is active visually
function updateFilterButtons() {
  filterButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

// Event listeners

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filter = btn.dataset.filter;
    renderTasks();
  });
});

clearBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all tasks?')) {
    clearAllTasks();
  }
});