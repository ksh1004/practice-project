let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let taskList = []
addButton.addEventListener('click', addTask);

function addTask() {
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task);
    render()
}

function render() {
    let resultHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class='task'>
        <div>${taskList[i].taskContent}</div>
        <div>
            <button onClick='toggleComplete()'>CHECK</button>
            <button>DELETE</button>
        </div>
    </div>`;
    }

    document.getElementById('task-board').innerHTML = resultHTML;
}

function toggleComplete() {

}

function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}