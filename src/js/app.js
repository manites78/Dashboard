const output = document.querySelector('.console-output');
const input = document.querySelector('.console--input');

let historial = [];
let historialIndex = -1;

function logToConsole(mensaje, tipo ="info") {
    const linea = document.createElement('DIV');
    linea.classList.add('console-line', `console-${tipo}`)


    const hora = new Date().toLocaleDateString();
    linea.textContent = `[${hora} ${mensaje}]`;


    output.appendChild(linea);

    output.scrollTop = output.scrollHeight;
};

function clear() {
    output.innerHTML = "";
};

function escribirInsertar(cmd) {
    const parte = cmd.trim().split(" ");
    const comandos = parte[0].toLowerCase();
    const args = parte.slice(1);


    switch(comandos) {
        case "":
            break;
        case "help":
            logToConsole("Comandos disponibles:", "info");
            logToConsole("  help          - muestra esta ayuda", "info");
            logToConsole("  clear         - limpia la consola", "info");
            logToConsole("  status        - muestra estado del sistema", "info");
            logToConsole("  echo [texto]  - repite el texto que escribas", "info");
            break;

        case "clear":
            clear();
            break;

        case "status":
            logToConsole("Sistema operando con normalidad", "exito");
            break;

        case "echo":
            logToConsole(args.join(" ") || "(nada que repetir)", "info");
            break;

        case "hola":
            logToConsole("pipe es cacorro");
            break;

        default:
            logToConsole(`Comando no reconocido: "${comandos}". Escribe "help" para ver opciones.`, "error");
    }
}


input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const comando = input.value;

        if (comando.trim() !== "") {
            logToConsole(comando, "cmd");
            historial.push(comando);
            historialIndex = historial.length;
            escribirInsertar(comando);
        };

        input.value = "";
    }

    if (e.key === "ArrowUp") {
        e.preventDefault();
        if (historialIndex > 0) {
            historial--;
            input.value = historial[historialIndex];
        }
    }

    if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historialIndex < historial.length - 1) {
            historial++;
            input.value = historial[historialIndex];
        } else {
            historialIndex = historial.length;
            input.value = "";
        }
    }
});

// Mensaje de bienvenida al cargar la página
logToConsole("Consola iniciada. Escribe \"help\" para ver los comandos disponibles.", "info");