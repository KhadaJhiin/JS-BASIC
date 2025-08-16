// ----------------------------------------------DOCUMENT OBJECT MODEL MANAGEMENT (DOM)

// BASIC METHODS

// SELECTING ELEMENTS
document.getElementById("myElement");
document.getElementsByClassName("myClass");
document.getElementsByTagName("div");
document.querySelector(".myClass");
document.querySelectorAll("div.myClass");

// MODIFYING ELEMENTS
const myElement = document.getElementById("myElement");
myElement.textContent = "New Text Content";
myElement.innerHTML = "<p>New HTML Content</p>";
myElement.style.color = "red";

// MODIFYING ATTRIBUTES

const link = document.querySelector("a");
const url = link.getAttribute("href");
link.setAttribute("target", "https://example.com");
myElement.setAttribute("data-custom", "value");
myElement.removeAttribute("data-old");

// ATTRIBUTE CHECKING

const hasTarget = link.hasAttribute("target");

// CREATING ELEMENTS
const newDiv = document.createElement("div");
const newText = document.createTextNode("Hello World");
newDiv.textContent = "This is a new paragraph.";
newText.style.padding = "10px";
newDiv.appendChild(newText);
document.body.appendChild(newDiv);


// REMOVING ELEMENTS
const elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);

// ----------------------------------------------INTERACTION WITH CLASSES

const box = document.querySelector(".box");
box.classList.add("new-class");
box.classList.remove("new-class");
box.classList.toggle("active");

const button = document.querySelector("button");
button.style.backgroundColor = "blue";
button.style.padding = "10px 20px";


// INSERTION IN A SPECIFIC POSITION

const itemList = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "New Item";

const secondItem = itemList.children[1];
itemList.insertBefore(newItem, secondItem);

// ADD ELEMENTS AT THE END OF THE LIST

itemList.append(newItem);
itemList.prepend(newItem);
secondItem.before(newItem);
secondItem.after(newItem);

// DELETE

newItem.remove();

// TRADITIONAL DELETING

const parent = newParagraph.parentElement ;
parent.removeChild(newParagraph);

// DOM ELEMENTS

function showMsg() {
    alert("Clic!")
}

const sendButton = document.querySelector("#send")
sendButton.addEventListener("click", showMsg)

sendButton.addEventListener("click", () => {
    alert("Clic con una arrow function!")
})

// Eventos comunes

document.addEventListener("DOMContentLoader", () => {
    console.log("El DOM está completamente cargado")
})

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"
})

sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    // Código
})
