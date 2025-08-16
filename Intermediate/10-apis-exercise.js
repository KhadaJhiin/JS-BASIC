// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok.
//    Si no lo es, lanza y muestra un error.

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getPosts(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("NetWork response was not ok.");
        };    
        const data = await response.json();        
        console.log(data);
    }catch(error){
        console.log("There was a problem with the fetch operation: ", error);
    };
};

// getPosts();

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. 
//    Envía un objeto con propiedades como title o body

const newPost = {
    userId: 1,
    title: "This is a new tittle of my post",
    body: "This is the body of my post",
};

async function postRequest(request) {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
        });
        if(!response.ok){
            throw new Error("Network response was not okey");
        };  
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log("There was a problem with the fetch operation: ", error);
    };
};

// postRequest(newPost);

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación)
//    en JSONPlaceholder

let modifyPost = {
    id: 1,
    title: "---This is the modified title of my post---",
}

async function putRequest(params) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });
        if(!response.ok){
            throw new Error("Network response was not okey");
        };  
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log("There was a problem with the fetch operation: ", error);
    };  
};

// putRequest(modifyPost);

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function patchRequest(params) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });
        if(!response.ok){
            throw new Error("Network response was not okey");
        };  
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log("There was a problem with the fetch operation: ", error);
    };  
};

// patchRequest(modifyPost);


// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación)
//    y verifica la respuesta

async function deleteRequest(id){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        });
        if(!response.ok){
            throw new Error("Network response was not okey");
        };  
        console.log("Post deleted successfully");
    }catch(error){
        console.log("There was a problem with the fetch operation: ", error);
    };  
};

// deleteRequest(1);


// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function getWeather(city) {
    const apiKey = `406ef657737c98291c3bdabf1bf29a6b`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("There was a problem with the fetch operation: ", error);
    }
}

// getWeather("Bogota");

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles
//    de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemon(pokemon) {
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
        const response = await fetch(urlPokemon);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const urlEvolution = `https://pokeapi.co/api/v2/evolution-chain/${data.id}`;
        
        const responseEvolution = await fetch(urlEvolution);
        if (!responseEvolution.ok) {
            throw new Error("Network response was not ok");
        }
        const dataEvolution = await responseEvolution.json();
        console.log(`Name : ${data.name} this pokemon belong to the species: ${data.species.name}`);
        console.log(`Also it can evolve into: ${dataEvolution.chain.species.name}`);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

getPokemon("growlithe");

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API




