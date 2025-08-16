// -------------------------------------------------------Aplication programing interface

// ----------------------------APIS REST (HTTP + URLs + JSON[Javascript object notation])

// ----------------------------HTTP METHODS

// GET: Obtain data from the server
// POST: Send data to the server
// PUT: Update data on the server
// DELETE: Delete data from the server.

// ----------------------------HTTP RESPONSE CODES

// 200: OK
// 201: Created
// 204: No Content
// 400: Bad Request
// 404: Not Found
// 500: Internal Server Error

// ----------------------------CONSUME AN API (FETCH)

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });
    

// ----------------------------ASYNC AWAIT WITH APIS

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    };
};

getPosts();

// ----------------------------POST METHOD

async function createPost() {
    try {
        const newPost = {
            userId: 1,
            title: "This is a new tittle of my post",
            body: "This is the body of my post",
        };
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

createPost();

// -----------------------------------------------------------PETITIONS TOOLS
// ----------------------------POSTMAN
// ----------------------------VISUAL STUDIO EXTENSION THUNDER CLIENT 

// -----------------------------------------------------------ERROR HANDLING

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/joselo");
        if (!response.ok) {             //In that case, ok mean all 200 it means without errors
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    };
};

// -----------------------------------------------------------ADDITIONAL HTTP METHODS
// PATCH: Partially update data on the server
// OPTIONS: Describe the communication options for the target resource
// HEAD: Same as GET, but without the response body

async function partialPostUpdate(){
    try {
        const updatedFields = {
            title: "Updated title"
        };
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedFields)
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

partialPostUpdate();

// -----------------------------------------------------------AUTHENTICATION THROUGH API KEYS


async function getWeather(city) {
    const apiKey = `406ef657737c98291c3bdabf1bf29a6b`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(`Weather in ${city}:`, data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

getWeather("Pasto");

// -----------------------------------------------------------OTHER AUTENTICATION METHODS

// Bearer tokens
// JWT (JSON Web Tokens)

// -----------------------------------------------------------OTHER APIS

// POKEAPI
// https://pokeapi.co/

async function getPokemon(pokemon) {

    // https://pokeapi.co
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        })
    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("pikachu")
