function fetchTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
}

// Display the todos and add event listeners to checkboxes
function displayTodos(todos) {
    const todoList = document.getElementById('todo-list');
    let completedCount = 0;

    todos.forEach(todo => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed; 

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                completedCount++;
            } else {
                completedCount--;
            }
            checkFiveTasks(completedCount)
                .then(message => alert(message))
                .catch(() => {});
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(todo.title));
        todoList.appendChild(li);
    });
}

function checkFiveTasks(completedCount) {
    return new Promise((resolve, reject) => {
        if (completedCount === 5) {
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        } else {
            reject();
        }
    });
}
fetchTodos().then(todos => {
    displayTodos(todos);
});