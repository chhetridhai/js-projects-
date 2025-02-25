//select elements
const inputbox = document.getElementById("todo-input")
const task_btn = document.getElementById("add-task-btn")
const todolist =  document.getElementById("todo-list")


const tasks =[]
task_btn.addEventListener("click",()=>{
  const tasktext = inputbox.value.trim()
  tasks.push(tasktext)
})

console.log(tasks);
