const text = document.getElementById("taskInput");
const button = document.getElementById("addTaskButton");
const list = document.getElementById("taskList");

function addTask(){

    if(text.value === "")return;

    const newElement = document.createElement("li");
    newElement.textContent = text.value;
    newElement.addEventListener("click",()=>{
        newElement.remove();
    });
    list.appendChild(newElement);

    text.value = " ";
};

button.addEventListener("click", addTask)

text.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        addTask();
    };
});