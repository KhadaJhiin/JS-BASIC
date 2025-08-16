// 1.

const tittle = document.getElementById("title");
const img = document.getElementById("my-image");
const mybutton = document.getElementById("my-buttom");
const myDiv = document.getElementById("box");
const myPharagraf = document.getElementById("paragraph");
const myList = document.getElementById("list");
const addButton = document.getElementById("button-add");
const deleteParagraph = document.getElementById("deleteParagraph");
const deleteButton = document.getElementById("deleteButton");
const changedText = document.getElementById("content");
const greet = document.getElementById("greet");
const input = document.getElementById("input");
const result = document.getElementById("result");
const backgroundBtn = document.getElementById("background");
const body = document.body;

document.addEventListener("DOMContentLoaded", () => {
    if(tittle.textContent === ""){
        tittle.textContent = "Hello my people";
    };    
});

// 2

function changeImage(){
    img.setAttribute("src", "https://i.blogs.es/f7234d/imagen/840_560.webp");
    myPharagraf.setAttribute("style", "color: blue;");
}
mybutton.addEventListener("click", changeImage);

// 3

document.addEventListener("DOMContentLoaded", ()=>{
    myDiv.setAttribute("class","highligted");
});

// 5

function addElement(){
    const newElement = document.createElement("li");
    newElement.textContent = "New element";
    myList.appendChild(newElement);
};

addButton.addEventListener("click",addElement);

// 6

deleteButton.addEventListener("click", ()=>{
    deleteParagraph.remove();
});

// 7

document.addEventListener("DOMContentLoaded", ()=>{
    changedText.textContent = "";
    const newH2 = document.createElement("h2");
    newH2.textContent = "This is the new shit";
    changedText.appendChild(newH2);
});

// 8

greet.addEventListener("click",()=>{
    alert("Hi there my friend !");
});

// 9

input.addEventListener("keypress",()=>{
    result.textContent = input.value;    
});

// 10

backgroundBtn.addEventListener("click", ()=>{
    body.style.backgroundColor = "green";
});





















