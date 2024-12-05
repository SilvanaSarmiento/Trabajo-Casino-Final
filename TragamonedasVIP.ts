import * as readlineSync from "readline-Sync"
import { Tragamonedas } from "./Tragamonedas";


class TragamonedasVIP extends Tragamonedas {
  
  private apuestaMinimaEspecial: number;


  constructor() {
    super(); 
    this.apuestaMinimaEspecial = 50; 
  }

  // Método para activar el modo especial
  public activarModoVIP(): void {
    console.log("Las probabilidades de ganar son más altas, pero la apuesta mínima es más alta.");
  }


  public realizarApuesta(cantidad: number): boolean {
    if (cantidad < this.apuestaMinima) {
      console.log(`La apuesta mínima normal es ${this.apuestaMinima}`);
      return false;
    }

    if (cantidad >= this.apuestaMinimaEspecial) {
      console.log(`Apostando en modo VIP, apuesta mínima: $${this.apuestaMinimaEspecial}`);
      this.activarModoVIP(); 
    }
    this.saldo = cantidad; 
    return true;
  }


  public calcularResultado(): string {
    if (this.esGanador()) {
      
      return `¡Felicidades, ganaste en modo VIP! 🎉 Las figuras fueron: [${this.rodillos.join(" | ")}]`;
    } else {
      return `Lo siento, perdiste en modo VIP. Las figuras fueron: [${this.rodillos.join(" | ")}]`;
    }
  }

  
  public getApuestaMinimaEspecial(): number {
    return this.apuestaMinimaEspecial;
  }
}

// Control del juego para el modo VIP
function iniciarJuegoTragamonedasVIP(): void {
  const tragamonedasEspecial = new TragamonedasVIP();
  console.log("Bienvenido al Juego de Tragamonedas VIP! 🎰");

  // Configuración inicial del saldo
  let saldo = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
  while (isNaN(saldo) || saldo <= 0) {
    console.log("Por favor ingrese un saldo válido");
    saldo = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
  }

  console.log(`Presione cualquier tecla para comenzar el juego`);
  readlineSync.keyInPause();

  let seguirJugando = true;

  while (seguirJugando) {
    console.log(`Tu saldo actual es: $${saldo.toFixed(2)}`);

    // Solicita apuesta
    let apuesta = parseFloat(readlineSync.question(`Ingresa tu apuesta: `));
    while (isNaN(apuesta) || apuesta < tragamonedasEspecial.getApuestaMinima() || apuesta > saldo) {
      console.log("Apuesta inválida. Ingresa un monto que sea igual o mayor al mínimo y que no supere tu saldo.");
      apuesta = parseFloat(readlineSync.question(`Ingresa tu apuesta: `));
    }

    // Jugar una ronda
    const resultado = tragamonedasEspecial.jugar(apuesta);
    saldo += resultado;

    if (resultado > 0) {
      console.log(`Ganaste $${resultado.toFixed(2)}`);
    } else {
      console.log(`Perdiste $${Math.abs(resultado).toFixed(2)}`);
    }

    // Verificar si el usuario tiene saldo suficiente para continuar jugando
    if (saldo < apuesta) {
      console.log("❌ Te has quedado sin saldo suficiente para seguir jugando.");
      seguirJugando = false;
    } else {
      const jugarDeNuevo = readlineSync.question("¿Quieres jugar otra vez? (s/n): ");
      seguirJugando = jugarDeNuevo.toLowerCase() === "s";
    }
  }

  console.log(`👋 ¡Gracias por jugar! Tu saldo final es $${saldo.toFixed(2)}.`);
}

// Ejecutar el juego especial
iniciarJuegoTragamonedasVIP();
