// Ketentuan Teknis: Gunakan let/const
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const text = taskInput.value.trim();

    if (text === '') {
        return; // Hentikan fungsi jika kosong
    }

    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = text;

    span.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});