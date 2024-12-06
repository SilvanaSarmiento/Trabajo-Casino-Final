import * as readlineSync from "readline-sync";
import {Juego} from "./Juego"
export class Tragamonedas extends Juego{
  protected figuras : string[] = ["🍋", "🍇", "🍊", "🍓"];
  protected rodillos: string[] = [];
  protected cantidadRodillos: number;
  protected saldo: number;
  constructor (){
    super("Tragamonedas Clasico", 20)
     this.cantidadRodillos = 3;
     this.saldo = 0;
     this.apuestaMinima = 20;
     this.IniciarRodillos();
  }
  realizarApuesta(cantidad: number): boolean {
    if (cantidad < this.apuestaMinima) {
        console.log(`La apuesta mínima es ${this.apuestaMinima}`);
        return false;
    }
    this.saldo = cantidad;
    return true;
}
  //Inicia los rodillos llenando el array con figuras aleatorias
  private IniciarRodillos(): void {
    this.rodillos = Array(this.cantidadRodillos).fill("").map(() => this.getFiguraRandom());
    console.log("Rodillos inicializados:", this.rodillos); // Verifica el contenido de los rodillos
}
  //figura aleatoria
  private getFiguraRandom(): string {
    const indexRandom = Math.floor(Math.random() * this.figuras.length);
    return this.figuras[indexRandom];
  }
  //gira los rodillos de manera independiente
  public girarRodillos(): void {
    this.rodillos = this.rodillos.map(() => this.getFiguraRandom());
  }
  //Muestra resultado por consola
  public MostrarRodillos(): void {
    console.log("el Resultado es: [" + this.rodillos.join(" | ") + "]");
  }
  //verifica si coinciden las figuras en la línea
  public esGanador(): boolean {
    return this.rodillos.every((figura) => figura == this.rodillos[0]);
  }
  public calcularResultado(): string {
    if (this.esGanador()) {
      return `Felicidades, ¡ganaste! :gorro_de_fiesta: Las figuras fueron: [${this.rodillos.join(" | ")}]`;
    } else {
      return `Lo siento, perdiste. Las figuras fueron: [${this.rodillos.join(" | ")}]`;
    }
  }
  //obtiene la apuesta mínima
  public getApuestaMinima(): number {
    return this.apuestaMinima;
  }
  //Inicia el juego y devuelve un primer resultado
  public jugar(apuesta: number): number {
   if (this.realizarApuesta(apuesta)){
    this.girarRodillos();
    this.MostrarRodillos();
    if (this.esGanador()) {
      console.log("Felicidades, ganaste! :gorro_de_fiesta:");
      return apuesta * 2;
    }else {
      console.log("Perdiste la jugada :decepcionado:");
      return -apuesta;
    }
  }
  return 0; //si la apuesta fue inválida, no se realiza la apuesta
}
}

//Control del juego
function iniciarJuegoTragamonedas(): void {
  const tragamonedas = new Tragamonedas();
  console.log("Bienvenido al Juego de Tragamonedas! 🎰");
  //configuración inicial del saldo
   let saldo:number = readlineSync.questionInt("Ingresa tu saldo inicial: ");
  while (isNaN(saldo) || saldo <= 0 ){
    console.log("Por favor ingrese un saldo válido");
    saldo = readlineSync.questionInt("Ingresa tu saldo inicial: ");
}
readlineSync.question('Presiona Enter para continuar...');

let seguirJugando = true;
while (seguirJugando) {
  console.log(`su saldo actual es: $${saldo}`);//ToFixed redondea el saldo a dos decimales
  const apuestaMinima:number = tragamonedas.getApuestaMinima();
  //Solicita apuesta
  let apuesta:number = readlineSync.questionInt(`Ingresa tu apuesta (mínimo $${apuestaMinima}: )`);
  while (isNaN(apuesta) || apuesta < apuestaMinima || apuesta > saldo){
    console.log("Apuesta inválida. ingrese un monto igual o menor al mínimo y que no supere su saldo");
    apuesta = readlineSync.questionInt(`Ingresa tu apuesta (mínimo $${apuestaMinima}: )`);
  }
  //jugar una ronda
  const resultado:number = tragamonedas.jugar(apuesta);
  saldo += resultado;
  if (resultado > 0){
    console.log(`Ganaste $${resultado.toFixed(2)}`);
  }else {
    console.log(`Perdiste $${Math.abs(resultado).toFixed(2)}`);
  }
  //verificar si el usuario aún tiene saldo disponible para seguir jugando
  if (saldo < apuesta) {
    console.log(":x: Te has quedado sin saldo suficiente para seguir jugando.");
    seguirJugando = false;
} else {
    const jugarDeNuevo = readlineSync.question("¿Quieres jugar otra vez? (s/n): ");
    seguirJugando = jugarDeNuevo.toLowerCase() === "s";
}
}
console.log(`😊 ¡Gracias por jugar! Tu saldo final es $${saldo.toFixed(2)}.`);
}
// Ejecuta el juego
iniciarJuegoTragamonedas();