import readlineSync from 'readline-sync';

import { Juego } from './Juego'; // Clase base
import { Casino } from './Casino'; // Clase Casino


function mostrarMenu() {
    console.log(`
    ♣♣♣ Menu Principal ♣♣♣
    1. Jugar a Tragamonedas🎰
    2. Jugar a TragamonedasVIP🎰
    3. Jugar a Ruleta🎡
    4. Jugar a Dados🎲
    5. Salir❌
    `);
}

function iniciar() {
    let seguirJugando = true;
    while (seguirJugando) {
        mostrarMenu();
        const opcion = readlineSync.question("Seleccione una opción: ");

        switch (opcion) {
            case "1":
                let saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
                while (isNaN(saldoInicial) || saldoInicial <= 0) {
                    console.log("Por favor ingresa un saldo válido.");
                    saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
                }

                // Instrucciones para Tragamonedas
                const quiereInstruccionesTragamonedas = readlineSync.keyInYNStrict("¿Quieres ver las instrucciones del juego de Tragamonedas? : ");
                if (quiereInstruccionesTragamonedas) {
                    console.log(`
                    Instrucciones del Juego de Tragamonedas🎰:
                    💎. Elige una cantidad para apostar (debe ser mayor que la apuesta mínima).
                    💎 . Gira los rodillos y espera el resultado.
                    💎 . Si los rodillos muestran las mismas figuras, ¡ganas el doble de tu apuesta!
                    💎 . Si no, pierdes la apuesta.
                    `);
                }

                // Preguntar si desea jugar o volver al menú
                const jugarTragamonedas = readlineSync.keyInYNStrict("¿Quieres jugar ahora o volver al menú? (s/n): ");
                if (jugarTragamonedas) {
                    iniciarJuegoTragamonedas(saldoInicial);
                }
                break;

            case "2":
                saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
                while (isNaN(saldoInicial) || saldoInicial <= 0) {
                    console.log("Por favor ingresa un saldo válido.");
                    saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
                }

                // Instrucciones para Tragamonedas VIP
                const quiereInstruccionesVIP = readlineSync.keyInYNStrict("¿Quieres ver las instrucciones del juego de Tragamonedas VIP? : ");
                if (quiereInstruccionesVIP) {
                    console.log(`
                    Instrucciones del Juego de Tragamonedas VIP🎰:
                    💎. Elige una cantidad para apostar (debe ser mayor que la apuesta mínima).
                    💎. Gira los rodillos y espera el resultado.
                    💎. Si los rodillos muestran las mismas figuras, ¡ganas el doble de tu apuesta!
                    💎. Si no, pierdes la apuesta.
                    💎. Tragamonedas VIP ofrece una mayor variedad de figuras y premios especiales.
                    `);
                }

                // Preguntar si desea jugar o volver al menú
                const jugarTragamonedasVIP = readlineSync.keyInYNStrict("¿Quieres jugar ahora o volver al menú? (s/n): ");
                if (jugarTragamonedasVIP) {
                    iniciarJuegoTragamonedasVIP(saldoInicial);
                }
                break;

            case "3":
                saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
                while (isNaN(saldoInicial) || saldoInicial <= 0) {
                    console.log("Por favor ingresa un saldo válido.");
                    saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
                }

                // Instrucciones para Ruleta
                const quiereInstruccionesRuleta = readlineSync.keyInYNStrict("¿Quieres ver las instrucciones del juego de Ruleta? : ");
                if (quiereInstruccionesRuleta) {
                    console.log(`
                    Instrucciones del Juego de Ruleta🎡:
                    💎. Elige un número entre 0 y 36 para apostar.
                    💎. La ruleta gira y un número es seleccionado aleatoriamente.
                    💎. Si tu número coincide con el resultado, ¡ganas 35 veces lo apostado!
                    💎. Si no, pierdes tu apuesta.
                    `);
                }

                // Preguntar si desea jugar o volver al menú
                const jugarRuleta = readlineSync.keyInYNStrict("¿Quieres jugar ahora o volver al menú? (s/n): ");
                if (jugarRuleta) {
                    iniciarJuegoRuleta(saldoInicial);
                }
                break;

            case "4":
                saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
                while (isNaN(saldoInicial) || saldoInicial <= 0) {
                    console.log("Por favor ingresa un saldo válido.");
                    saldoInicial = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
                }

                // Instrucciones para Dados
                const quiereInstruccionesDados = readlineSync.keyInYNStrict("¿Quieres ver las instrucciones del juego de Dados? : ");
                if (quiereInstruccionesDados) {
                    console.log(`
                    Instrucciones del Juego de Dados🎲:
                    💎. Elige una cantidad para apostar.
                    💎. Se lanzan una o más tiradas de dados.
                    💎. Si la suma de los dados es un número par, ¡ganas el doble de lo apostado!
                    💎. Si la suma de los dados es impar, pierdes la apuesta.
                    `);
                }

                // Preguntar si desea jugar o volver al menú
                const jugarDados = readlineSync.keyInYNStrict("¿Quieres jugar ahora o volver al menú? (s/n): ");
                if (jugarDados) {
                    iniciarJuegoDados(saldoInicial);
                }
                break;

            case "5":
                console.log("¡Gracias por jugar🎉! ¡Hasta la próxima👋!");
                seguirJugando = false;
                break;

            default:
                console.log("Opción no válida. Por favor, selecciona una opción válida.");
        }
    }
}

iniciar();
