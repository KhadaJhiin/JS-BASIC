// --------------------------------------------------------------- Asynchronous programing

// SINCHRONOUS PROGRAMING

console.log("START");

for(let i = 0 ; i < 1000; i++){};

console.log("FINISH");

// -----------------------------------------------------------------------------EVENT LOOP

// ---------------------------------COMPONENT OF EVENT LOOP
// 1-CALL STACH (pila de ejecucion)
// 2-WEB APIS
// 3-TASK QUEUE AND MICROTASKQUEUE

// --------------------------------EVENT LOOP FLOW

// 1. CALL STACH
// 2. ASYNCHRONIC OPERATIONS =>> WEB APIS OR NODE.JS
// 3. FINISH OPERATION =>> TASK QUEUE OR MICROTASKQUEUE
// 4. IF CALL STACH IS EMPTHY =>> MOVE TASK OF TAKSQUEUE OR MICROTASKQUEUE TO CALL STACH
// 5. THAT PROCESS IS REPEATED

// -----------------------------------------------------------------------------CALL BACK

console.log("START");

setTimeout(()=>{
    console.log("This is executed after two seconds.");    
},2000);

console.log("FINISH");

// ----------------------------------------------------------------------------CALL BACK HELL

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

// ----------------------------------------------------------------------------PROMISES

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const ok = true;
        if(ok){
            resolve("Succesfull operation");
        }else{
            reject("An error has ocurred");
        }
    },4000)
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

// ----------------------------------------PROMISES CONCATENATION

function step1Promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step one with promise completed");
            resolve();
        }, 1000);
    });
};

function step2Promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step two with promise completed");
            resolve();
        }, 1000);
    });
};

function step3Promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step three with promise completed");
            resolve();
        }, 1000);
    });
};

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("All steps with promises completed");
    });

// ----------------------------------------------------------------------------ASYNC / AWAIT

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process(){
    console.log("Start of the process");
    await wait(5000);
    console.log("Process after 5 seconds");
    await wait(1000);
    console.log("Process after 6 seconds");
    await wait(1000);
    console.log("Process after 7 seconds");
    console.log("End of the process");
}

process();