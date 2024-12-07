import readlineSync from 'readline-sync';

import { Juego } from './Juego'; // Clase base
import { Casino } from './Casino'; // Clase Casino
import { Tragamonedas } from './TragamonedasClasico';
import { TragamonedasVIP } from './TragamonedasVIP';
import { Ruleta } from './Ruleta';
import { Dados } from './Dados';

function mostrarMenu() {
    console.log(`
  ♣♣♣ Menu Principal ♣♣♣
  1. Jugar Tragamonedas
  2. Jugar Tragamonedas VIP
  3. Jugar Dados
  4. Jugar Ruleta
  5. Salir ❌
  `);
}


function iniciar() {
    let seguirJugando = true;
    while (seguirJugando) {
        mostrarMenu();
        const opcion = readlineSync.question("🍀Seleccione una opcion: ");

        switch (opcion) {
            case "1":
                const tragamonedas = new Tragamonedas();
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

                const jugarTragamonedas = readlineSync.keyInYNStrict("¿Quieres jugar ahora?: "
                );
                if (jugarTragamonedas) {
                    tragamonedas.iniciarJuegoTragamonedas(); // Función a implementar
                }
                break;

            case "2":
                const tragamonedasVIP = new TragamonedasVIP("Tragamonedas VIP", 50);
                const quiereInstruccionesVIP = readlineSync.keyInYNStrict(
                    "¿Quieres ver las instrucciones del juego de Tragamonedas VIP? : "
                );
                if (quiereInstruccionesVIP) {
                    console.log(`
          Instrucciones del Juego de Tragamonedas VIP 🎰:
          💎 Elige una cantidad para apostar (debe ser mayor que la apuesta mínima).
          💎 Gira los rodillos y espera el resultado.
          💎 Si los rodillos muestran las mismas figuras, ¡ganas el doble de tu apuesta!
          💎 Si no, pierdes la apuesta.
          💎 Tragamonedas VIP ofrece premios especiales.
          `);
                }
                const jugarTragamonedasVIP = readlineSync.keyInYNStrict(
                    "¿Quieres jugar ahora?: "
                );
                if (jugarTragamonedasVIP) {
                    tragamonedasVIP.iniciarJuegoTragamonedasVIP(); //  TragamonedasVIP.iniciarJuegoTragamonedasVIP(); // Función a implementar
                }
                break;

            case "3":
                let juegoDados = new Dados("Dados", 100, 2, 1); // Clase Dados a implementar
                const quiereInstruccionesDados = readlineSync.keyInYNStrict(
                    "¿Quieres ver las instrucciones del juego de Dados? : "
                );
                if (quiereInstruccionesDados) {
                    console.log(`
          Instrucciones del Juego de Dados 🎲:
          💎 Elige una cantidad para apostar.
          💎 Se lanzan uno o dos dados.
          💎 Si la suma de los dados es un número par, ¡ganas el doble de lo apostado!
          💎 Si la suma de los dados es impar, pierdes la apuesta.
          `);
                }
                const jugarDados = readlineSync.keyInYNStrict("¿Quieres jugar ahora?: ");
                if (jugarDados) {
                    juegoDados.iniciarDados(); // Método de la clase Dados
                    juegoDados.jugar(100); // Método de la clase Dados
                }
                break;

            case "4":
                const ruleta = new Ruleta("Ruleta", 10, 0); // Clase Ruleta a implementar
                const quiereInstruccionesRuleta = readlineSync.keyInYNStrict(
                    "¿Quieres ver las instrucciones del juego de Ruleta? : "
                );
                if (quiereInstruccionesRuleta) {
                    console.log(`
          Instrucciones del Juego de Ruleta 🎡:
          💎 Elige un número entre 0 y 36 para apostar.
          💎 La ruleta gira y un número es seleccionado aleatoriamente.
          💎 Si tu número coincide con el resultado, ¡ganas 35 veces lo apostado!
          💎 Si no, pierdes tu apuesta.
          `);
                }
                const jugarRuleta = readlineSync.keyInYNStrict("¿Quieres jugar ahora?: ");
                if (jugarRuleta) {
                    ruleta.jugarRuleta(); // Método de la clase Ruleta
                }
                break;

            case "5":
                console.log("¡Gracias por jugar🎉! ¡Hasta la próxima👋!");
                seguirJugando = false;
                break;

            default:
                console.log("Opción no válida. Por favor, selecciona una opción válida.");

        }
        //}
    }
}
// Llama a la función iniciar para mostrar el menú al inicio
iniciar();

