// Riferimenti agli oggetti html
// 1. Alla pressione del bottone btnAdd inserire un nuovo <li>
// con data,ora e il testo della nota
// 2. Alla pressione del bottone <btnClear> cancellare la
// chiedendo conferma all'utente mediante la funzione 'confirm'
// 3. In apertura della finestra cancellare la lista predefinita
let edtNota = document.getElementById("edtNota");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const taskList = document.querySelectorAll("listaTask");
let addDate = document.getElementById("addDate");
const ulTag = document.querySelector("ul");
//funzioni
function ClearList(){
    let liTags = document.querySelectorAll("ul>li");
    console.log(liTags);
    for(let i = 0; i < liTags.length; i++){
        ulTag.removeChild(liTags[i]);
    }
}

function AddToList(text, append = true){
    let elementToAdd = document.createElement("li");
    elementToAdd.innerHTML = text;
    if(append){
        ulTag.appendChild(elementToAdd);
    }else{
        ulTag.prepend(elementToAdd);
    }
}
//eventi
btnAdd.onclick = event=>{
    let testo = edtNota.value;
    let text = addDate.value;
    AddToList(text +" "+ testo);
    edtNota.value = "" //pulisco testo
    edtNota.focus() //riposiziono cursore 
    localStorage.setItem("Lista", ulTag.innerHTML)
}

btnClear.onclick = event=>{
    if (confirm("ATTENZIONE: Cancellazione lista.")== true){
        ClearList();
    }
}
//codice main all'avvio
ClearList();
ultag.innerHTML = localStorage.getItem("Lista")