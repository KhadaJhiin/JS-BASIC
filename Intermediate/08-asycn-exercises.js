// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function greet(name, callBack){
    setTimeout(()=>{
        callBack(name);
    },2000);
};

function greetCB(name){
    console.log(`Hi there you ${name}`);
}
console.log("Start");
greet("Jose", greetCB);

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function callBack1(callBack){
    setTimeout(()=>{
        console.log("Step one");
        callBack();
    },1000);
};

function callBack2(callBack){
    setTimeout(()=>{
        console.log("Step two");
        callBack();
    },1000);
};

function callBack3(callBack){
    setTimeout(()=>{
        console.log("Step three");
        callBack();
    });
};

callBack1(()=>{
    callBack2(()=>{
        callBack3(()=>{
            console.log("All steps has been completed");
        });
    });
});

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function isNumberEven(num){
    return new Promise((resolve, reject)=>{
        if(num % 2 == 0){
            resolve("Is an even number.");
        }else{
            reject("Is an odd number.");
        };
    });
};

isNumberEven(4).then(result =>{
    console.log(result);
}).catch(error => {
    console.log(error);
});

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("First task completed");
            resolve();
        },1000);
    });
};
function secondTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Second task completed");
            resolve();
        },2000);
    });
};
function thirdTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Third task completed");
            resolve();
        },1500);
    });
};

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(()=>{
        console.log("All task have been completed");
    });

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

function waitTime(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function executeTasks(){
    await waitTime(1000);
    console.log("First wait one step.");
    await waitTime(2000);
    console.log("Second wait two step.");
    await waitTime(1500);
    console.log("Third wait three step.");
}

executeTasks();

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(id<5){
                resolve({id, nombre : `User ${id}`});
            }else{
                reject("User not found");
            };
        },2000);
    });
};

async function processData(id){
    console.log("Getting data from the API");
    let data = await getUser(id);
    console.log(data);
};

processData(4)
    .then(result =>{
        result;
    }).catch(error =>{
        console.log(error);
    });

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:

// console.log("Inicio")
// setTimeout(() => console.log("setTimeout ejecutado"), 0)
// Promise.resolve().then(() => console.log("Promesa resuelta"))
// console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes