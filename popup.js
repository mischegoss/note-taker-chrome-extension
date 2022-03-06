let clearButton = document.getElementById('clearButton');
let copyButton = document.getElementById('copyButton');
let textarea = document.getElementById('textarea');


// Note function
let lastNote = localStorage.getItem('myNote'); 
document.getElementById('textarea').value = lastNote;

function storeNote() {
  let currentNote = textarea.value;
  localStorage.setItem('myNote', currentNote);
};

setInterval(storeNote, 5000);

// Clear Button function
clearButton.addEventListener("click", clearNotes);
function clearNotes() {
  localStorage.clear()
  textarea.value = "";
}

// Copy Button function
copyButton.addEventListener("click", copyNotes);
function copyNotes() {
  textarea.select();
  document.execCommand('copy');
}

