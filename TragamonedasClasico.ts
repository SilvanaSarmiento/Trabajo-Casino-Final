import { Juego } from "./Juego";

class TragamonedasClasico extends Juego{

  constructor (){
    super("tragamonedas Clasico", 2);
    
  }

  realizarApuesta(valor: number): boolean {
    return valor >= this.apuestaMinima;
  }

  jugar(valor: number): string {
    if (!this.realizarApuesta (valor)) {
      return "Apuesta insuficiente para este juego!";
    }

    const resultado = Math.random() > 0.3 ? "¡Ganaste!" : "Perdiste, inténtalo de nuevo.";
    return `Resultado: ${resultado} (Apuesta: $${valor})`;
  }

  calcularResultado(): string{
    return `Ganas o perdes el juego: La suerte está hechada`;
  }

}