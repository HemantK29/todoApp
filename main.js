const form = document.querySelector(".userTask");
let userInput = document.querySelector("#userTask");
let taskLists = document.querySelector(".task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userInput.value === "") {
    alert("Please write some tasks!");
  } else {
    let newTask = document.createElement("li");
    newTask.innerHTML = `<p>${userInput.value}</p>
        <span
          ><button class="done btn">Done</button
          ><button class="remove btn">Remove</button></span
        >`;
    taskLists.append(newTask);
    userInput.value = "";
  }
});

taskLists.addEventListener("click", (e)=>{
  console.log(e.target.textContent);
    if(e.target.textContent === "Done"){
        let listElement = e.target.parentNode.parentNode;
        listElement.style.textDecoration = "line-through";
    }if(e.target.textContent === "Remove"){
      let listElement = e.target.parentNode.parentNode;
      listElement.remove();
    }
})
