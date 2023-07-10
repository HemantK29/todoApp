const userTask = document.getElementById("userTask");
const addTask = document.getElementById("btn");
const taskList = document.getElementById("task-list");
const remBtn = document.getElementById("btnK");

addTask.addEventListener("click", () => {
    taskList.innerHTML += `<li><p>${userTask.value}<button class="remBtn" id="btnK">X<button></p></li>`;
});

