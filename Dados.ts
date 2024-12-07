// import * as readlineSync from 'readline-sync';
// import { Juego } from "./Juego"
// export class Dados extends Juego {
//     cantidadDados: number;
//     numero: number;
//     saldo: number;

//     constructor(nombreDelJuego: string, apuestaMinima: number, cantidadDados: number, numero: number) {
//         super(nombreDelJuego, apuestaMinima)
//         this.cantidadDados = cantidadDados;
//         this.numero = numero;
//         this.saldo = 0;

//     }



//     //metodos de dados
//     public ingresarSaldo(): number {
//         let saldoIngresado: string;

//         do {
//             saldoIngresado = readlineSync.question(`Ingrese el saldo con el que desea jugar: `);
//             this.saldo = parseInt(saldoIngresado);

//             if (isNaN(this.saldo)) {
//                 console.log(`El saldo ingresado no es un número, por favor ingrese un número válido.`);
//             } else if (this.saldo < this.apuestaMinima) {
//                 console.log(`El saldo mínimo es ${this.apuestaMinima}`);
//             } else {
//                 break;
//             }
//         } while (true);
//         console.log(`El saldo ingresado es: ${this.saldo}`);
//         return this.saldo;

//     }
//     // metodo para tirar los dados
//     public tirarDados(): { resultados: number[], suma: number } {
//         let cantidadDados = parseInt(readlineSync.question(`Ingrese la cantidad de dados que desea tirar: `));
//         let resultadosDados: number[] = [];
//         let suma = 0;

//         for (let i = 0; i < cantidadDados; i++) {
//             const resultado = Math.floor(Math.random() * 6) + 1;
//             resultadosDados.push(resultado);
//             suma += resultado;
//         }

//         console.log("El resultado de los dados es:", resultadosDados);
//         console.log("La suma total es:", suma);

//         return { resultados: resultadosDados, suma: suma };
//     }
//     //Sumar los resultados que se obtuvieron en la tira de dados
//     sumarResultadoDados(resultados: { resultados: number[], suma: number }): number {
//         return resultados.suma;
//     }


//     // metodos abstractos
//     realizarApuesta(): boolean {
//         let apuesta: number;

//         do {
//             const apuestaDados = readlineSync.question(`Ingrese la cantidad de dinero que desea apostar: `);
//             apuesta = parseInt(apuestaDados);

//             if (isNaN(apuesta)) {
//                 console.log(`La apuesta debe ser un número.`);
//             } else if (apuesta < this.apuestaMinima) {
//                 console.log(`¡Error! la apuesta mínima es ${this.apuestaMinima}`);
//             } else if (apuesta > this.saldo) {
//                 console.log(`La apuesta no puede exceder el saldo actual`);
//             } else {
//                 this.saldo -= apuesta;
//                 return true; // Apuesta válida y realizada
//             }
//         } while (true);

//         return false; // Si el bucle termina sin realizar una apuesta válida, retorna false
//     }

//     public calcularResultado(): boolean {
//         const sumaDados = this.sumarResultadoDados(this.tirarDados());
//         return sumaDados % 2 === 0; // True si la suma es par, false si es impar
//     }

//     iniciarDados() {
//         console.log("Bienvenido al juego de Dados 🎲");
//         this.ingresarSaldo();
//         if (this.saldo < this.apuestaMinima) {
//             console.log(`¡Error! el saldo mínimo es ${this.apuestaMinima}`);
//             return "¡Error! el saldo mínimo es " + this.apuestaMinima;
//         }
//     }

//     public jugar(apuesta: number): number {
//         if (this.realizarApuesta()) {
//             const haGanado = this.calcularResultado();
//             if (haGanado) {
//                 console.log("¡Ganaste! El número es par.");
//                 console.log(`Tu saldo final es: ${this.saldo *2}`);
//             } else {
//                 console.log("¡Perdiste! El número es impar.");
//                 console.log(`Tu saldo final es: ${this.saldo}`);
//             }

//             this.saldo += haGanado ? apuesta : -apuesta;
//             return haGanado ? apuesta : -apuesta;
//         }
//         return this.saldo;
//     }
// }

import * as readlineSync from 'readline-sync';
import {Juego} from "./Juego"
export class Dados extends Juego {
    private cantidadDados: number;
    private saldo: number;
    constructor(nombreDelJuego: string, apuestaMinima: number, cantidadDados: number) {
        super(nombreDelJuego, apuestaMinima)
        this.cantidadDados = cantidadDados;
        this.saldo = 0;
    }
    //metodos de dado
     public ingresarSaldo(): number {
        let saldoIngresado: string;
        do {
            saldoIngresado = readlineSync.question(`Ingrese el saldo con el que desea jugar: `);
            this.saldo = parseInt(saldoIngresado);
            if (isNaN(this.saldo)) {
                console.log(`El saldo ingresado no es un número, por favor ingrese un número válido.`);
            } else if (this.saldo < this.apuestaMinima) {
                console.log(`El saldo mínimo es ${this.apuestaMinima}`);
            } else {
                break;
            }
        } while (true);
        console.log(`El saldo ingresado es: ${this.saldo}`);
        return this.saldo;
    }
    // metodo para tirar los dados
    public tirarDados(): { resultados: number[], suma: number } {
        let cantidadDados = parseInt(readlineSync.question(`Ingrese la cantidad de dados que desea tirar: `));
        let resultadosDados: number[] = [];
        let suma = 0;
        for (let i = 0; i < cantidadDados; i++) {
            const resultado = Math.floor(Math.random() * 6) + 1;
            resultadosDados.push(resultado);
            suma += resultado;
        }
        console.log("El resultado de los dados es:", resultadosDados);
        console.log("La suma total es:", suma);
        return { resultados: resultadosDados, suma: suma };
    }
    //Sumar los resultados que se obtuvieron en la tira de dados
    public sumarResultadoDados(resultados: { resultados: number[], suma: number }): number {
        return resultados.suma;
    }
    // metodos abstractos
    realizarApuesta(): boolean {
        let apuesta: number;
        do {
            const apuestaDados = readlineSync.question(`Ingrese la cantidad de dinero que desea apostar: `);
            apuesta = parseInt(apuestaDados);
            if (isNaN(apuesta)) {
                console.log(`La apuesta debe ser un número.`);
            } else if (apuesta < this.apuestaMinima) {
                console.log(`¡Error! la apuesta mínima es ${this.apuestaMinima}`);
            } else if (apuesta > this.saldo) {
                console.log(`La apuesta no puede exceder el saldo actual`);
            } else {
                this.saldo -= apuesta;
                return true; // Apuesta válida y realizada
            }
        } while (true);
        return false; // Si el bucle termina sin realizar una apuesta válida, retorna false
    }
    public calcularResultado(): boolean {
        const sumaDados = this.sumarResultadoDados(this.tirarDados());
        return sumaDados % 2 === 0; // True si la suma es par, false si es impar
    }
    public iniciarDados() {
        console.log("Bienvenido al juego de Dados 🎲");
        this.ingresarSaldo();
        if (this.saldo < this.apuestaMinima) {
            console.log(`¡Error! el saldo mínimo es ${this.apuestaMinima}`);
            return "¡Error! el saldo mínimo es " + this.apuestaMinima;
        }
    }
    public jugar(apuesta: number): number {
        let seguirJugando = true; // Variable para controlar si el jugador quiere seguir jugando
        while (seguirJugando) {
            console.log(`su saldo actual es: $${this.saldo}`);
           
            // Realiza la apuesta y valida si es posible continuar
            if (this.realizarApuesta()) {
                const haGanado = this.calcularResultado();
                // Actualizar el saldo según el resultado
                if (haGanado) {
                    const ganancia = apuesta * 2; // Recupera apuesta + ganancia igual
                    this.saldo += ganancia;
                    console.log(" 🎉¡Ganaste! El número es par.");
                    console.log(`Has ganado: ${ganancia}`);
                } else {
                    console.log("☹ ¡Perdiste! El número es impar.");
                    console.log(`Has perdido: ${apuesta}`);
                }
                console.log(`Tu saldo actual es: ${this.saldo} 💰`);
                // Verifica si el saldo es suficiente para seguir jugando
                if (this.saldo < this.apuestaMinima) {
                    console.log("❌ No tienes suficiente saldo para seguir jugando ❌");
                    seguirJugando = false;
                } else {
                    const jugarDeNuevo = readlineSync.question("¿Quieres jugar otra vez? (s/n): ");
                    seguirJugando = jugarDeNuevo.toLowerCase() === "s";
                }
                if (!seguirJugando) {
                    console.log("👋🏽 ¡Gracias por jugar! Tu saldo final es: " + this.saldo);
                }
            } else {
                seguirJugando = false; // Terminar si no se realiza una apuesta válida
            }
        }
        return this.saldo;
    }
}
