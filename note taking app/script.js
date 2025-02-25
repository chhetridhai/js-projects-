// //write your javascript code here
// const noteInput = document.querySelector("#noteInput")  //select the text area input
// const saveBtn = document.querySelector(".save-btn") 
// const noteContainer = document.querySelector("#notesContainer")

// let noteText = noteInput.value.trim()
// const notes = []
// // Retrieve the array from local storage


// console.log(notes);


// //save button functionality
// const save = ()=>{
//     let noteText = noteInput.value.trim()
//     const newNote = document.createElement("p")
//     newNote.innerHTML = ` ${noteText} `
//     newNote.setAttribute("class","note")
//     const deleteBtn = document.createElement("button")
//     deleteBtn.setAttribute("class","delete-btn")
//     deleteBtn.textContent=`X`
//     newNote.appendChild(deleteBtn)
//     noteContainer.appendChild(newNote)
//     notes.push(noteText)
//     savetask()
   
// }

// saveBtn.addEventListener("click",()=>{
//     save()
//      noteInput.value=""
// })
// noteInput.addEventListener("keypress",(e)=>{
//     if (e.code == "Enter"){
//         save()
//          noteInput.value=""
//     }
// })
// function savetask(){
//    localStorage.setItem("note",JSON.stringify(notes))

// }

// Select elements from the DOM
const noteInput = document.querySelector("#noteInput"); // Select the text area input
const saveBtn = document.querySelector(".save-btn"); // Select the save button
const noteContainer = document.querySelector("#notesContainer"); // Select the container where notes will be displayed

// NEW: Retrieve saved notes from local storage (or initialize as empty array)
let notes = JSON.parse(localStorage.getItem("note")) || []; 

// Function to display saved notes on page load
function loadNotes() { // NEW: This function loads notes from local storage on page load
    notes.forEach(noteText => {
        createNoteElement(noteText);
    });
}

// Function to create and display a note
function createNoteElement(noteText) { // NEW: This function is used to avoid code repetition
    const newNote = document.createElement("p");
    newNote.innerHTML = ` ${noteText} `;
    newNote.setAttribute("class", "note");
    
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.textContent = `X`;
    deleteBtn.addEventListener("click", () => 
        deleteNote(noteText, newNote)); // NEW: Attach delete functionality

    newNote.appendChild(deleteBtn);
    noteContainer.appendChild(newNote);
}

// Save button functionality
const save = () => {
    let noteText = noteInput.value.trim();
    if (noteText === "") return; // Prevent saving empty notes
    
    notes.push(noteText); // Add note to the array
    createNoteElement(noteText); // Create and display the note
    saveToLocalStorage(); // NEW: Save the updated notes array to local storage
};

saveBtn.addEventListener("click", () => {
    save();
    noteInput.value = "";
});

noteInput.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        save();
        noteInput.value = "";
    }
});

// Function to save notes array to local storage
function saveToLocalStorage() { // NEW: This function stores the notes in local storage
    localStorage.setItem("note", JSON.stringify(notes));
}

// Function to delete a note from UI and local storage
function deleteNote(noteText, noteElement) { // NEW: Function to remove a note
    notes = notes.filter(note => note !== noteText); // Remove note from array
    noteContainer.removeChild(noteElement); // Remove from DOM
    saveToLocalStorage(); // Update local storage
}

loadNotes(); // NEW: Load saved notes when the page is opened