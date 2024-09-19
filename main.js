//pega o botão de adicionar, o input do texto e a lista de tarefas criada
const buttonAdd = document.getElementById("add");
const buttonRemove = document.getElementById("remove");
const buttonFinish = document.getElementById("finish");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  //atribui o valor do input do texto a uma variável
  const taskText = taskInput.value;
  //se o texto nao for vazio,
  if (taskText !== "") {
    //cria um elemento li e adiciona a ele o texto que veio do input
    const li = document.createElement("li");
    li.textContent = taskText;

    //adiciona na lista e limpa o input
    taskList.appendChild(li);
    taskInput.value = "";
    console.log(taskList);
  } else {
    alert("o nome da tarefa não pode ser vazio");
  }
}

function removeTask() {
  //remove o último elemento da lista
  const lastTask = taskList.lastElementChild;
  taskList.removeChild(lastTask);
}

function finishTask() {
  //adicionar classe finished ao último elemento da lista
  const lastTask = taskList.lastElementChild;
  lastTask.classList.add("finished");
}
//adiciona o evento de click no botao vinculado ao método addTask
buttonAdd.addEventListener("click", addTask);
buttonRemove.addEventListener("click", removeTask);
buttonFinish.addEventListener("click", finishTask);