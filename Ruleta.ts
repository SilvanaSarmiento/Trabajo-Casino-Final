import { Juego } from "./Juego";

export class Ruleta extends Juego{
private numeros: number[];
private colores: boolean;
private resultado: number;
private numeroElegido: number;
private saldo: number;

constructor(nombreDelJuego: string, apuestaMinima:number, numeros: number, colores: boolean, resultado: number, numeroElegido: number, saldo:number){
super ( "Ruleta", 10);
this.numeros=Array.from({ length: 37 }, (_, i) => i); 
this.colores= colores;
this.resultado=resultado;
this.numeroElegido= numeroElegido;
}

realizarApuesta(cantidad: number): boolean {
    if (cantidad < this.apuestaMinima) {
        console.log(`La apuesta mínima es ${this.apuestaMinima}`);
        return false;
    }
    this.saldo = cantidad;
    return true;
}

calcularResultado(): string {
    if (this.resultado === this.numeroElegido) {
        return "Ganaste el Juego";
      } else {
       
     return "Perdiste, segui participando";
      }

}}

export function seleccionarNumero(numero: number): void {
    if (numero < 0 || numero > 36) {
      console.log("Elige un número válido entre 0 y 36.");
    } else {
      this.numeroElegido = numero;
      console.log(`Has seleccionado el número ${numero}.`);
    }
}

export  function girarRuleta(): number {
    // Seleccionar un número al azar entre 0 y 36
    const numeroAleatorio = Math.floor(Math.random() * 37);
    this.resultado = numeroAleatorio; // Almacena el resultado en la propiedad 'resultado'
    return numeroAleatorio;
}

 

       
      
