// MARCAR E DESMARCAR A CAIXINHA

function taskChecked (){
    const box = document.getElementById("task-checked-box");
    box.innerHTML = 
    `<img src="img/caixa-de-selecao.png" alt="" onclick="taskNoChecked()">`
}
function taskNoChecked (){
    const box = document.getElementById("task-checked-box");
    box.innerHTML = 
    `<img src="img/square.png" alt="" onclick="taskChecked()">`
}

// // // CRIAR NOVA TAREFA 

  function novaTarefa() {
     const inTask = document.getElementById("in-task").value;
     const taskBox = document.getElementById("here");  
     if( inTask == ""){
        alert("Insira a tarefa")
     }
     else{
     taskBox.innerHTML += `
        <div class="task" id="task-box"> 
                <div id="task-checked-box">
                      <img src="img/square.png" alt="" onclick="taskChecked()">
                </div>
                 <p id="out-task">${inTask} </p>
                 <img src="img/delete.png" alt="" onclick="deleteTask(event)">
         </div>
   `;}

//    taskBox.appendChild(newTask);
   document.getElementById("in-task").value = "";
   }


// DELETAR TAREFA 
function deleteTask(event) {
    const task = event.target.parentElement; // Obtém o elemento pai (a div da tarefa)
    task.remove(); // Remove a tarefa do DOM
}

//event.target estudar event propiedades como "target"
