// Ketentuan Teknis: Gunakan let/const
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const allBtn = document.getElementById('allBtn');
const completedBtn = document.getElementById('completedBtn');

let tasks = [];
let filterAktif = "all";

function addTask() {
    const text = taskInput.value.trim();

    if (text === '') {
        return; // Hentikan fungsi jika kosong
    }
    
    const task = {
        text: text,
        completed: false
    };

    tasks.push(task);

    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = text;

    span.addEventListener('click', function () {
        li.classList.toggle('completed');

        task.completed = !task.completed;

        tampilkanTask();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function () {
        const index = tasks.indexOf(task);

        tasks.splice(index, 1);

        li.remove();

        tampilkanTask();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    tampilkanTask();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Menampilkan task sesuai filter
function tampilkanTask() {
    let hasilFilter = tasks;

    if (filterAktif === "completed") {
        hasilFilter = tasks.filter(function(task) {
            return task.completed === true;
        });
    }

    tasks.forEach(function(task, index) {
        const li = taskList.children[index];

        if (hasilFilter.includes(task)) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
}

// Tombol All
allBtn.addEventListener("click", function() {
    filterAktif = "all";
    tampilkanTask();
});

// Tombol Completed
completedBtn.addEventListener("click", function() {
    filterAktif = "completed";
    tampilkanTask();
});