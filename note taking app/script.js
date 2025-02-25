//write your javascript code here
const noteInput = document.querySelector("#noteInput")  //select the text area input
const saveBtn = document.querySelector(".save-btn") 
const noteContainer = document.querySelector("#notesContainer")

let noteText = noteInput.value.trim()
const notes = []
// Retrieve the array from local storage
const storedtasks = JSON.parse(localStorage.getItem("note"))
if(!null){
    storedtasks.forEach(element => {
        notes.push(element)
    });
}

console.log(notes);


//save button functionality
const save = ()=>{
    let noteText = noteInput.value.trim()
    const newNote = document.createElement("p")
    newNote.innerHTML = ` ${noteText} `
    newNote.setAttribute("class","note")
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class","delete-btn")
    deleteBtn.textContent=`X`
    newNote.appendChild(deleteBtn)
    noteContainer.appendChild(newNote)
    notes.push(noteText)
    savetask()
   
}

saveBtn.addEventListener("click",()=>{
    save()
     noteInput.value=""
})
noteInput.addEventListener("keypress",(e)=>{
    if (e.code == "Enter"){
        save()
         noteInput.value=""
    }
})
function savetask(){
   localStorage.setItem("note",JSON.stringify(notes))

}
