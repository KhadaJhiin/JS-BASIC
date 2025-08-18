// 1. Crea un código con un error lógico y usa VS Code para encontrarlo

function passWord(attempt){
    if(attempt !== "1234"){
        throw new Error("Please enter the correct password!");
    };
    return "Your password is correct ! You're welcome...";
};

console.log(passWord("dog"));

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución