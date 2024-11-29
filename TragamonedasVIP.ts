import { Juego } from "./Juego";

class TragamonedasVIP extends Juego{

    constructor (){
      super(5, "tragamonedas VIP");
      
    }
  
    
    realizarApuesta(valor: number): boolean {
      return valor >= this.apuestaMinima;
    }
  
    jugar(valor: number): string {
      if (!this.realizarApuesta (valor)) {
        return "Apuesta insuficiente para este juego!";
      }
  
      const resultado = Math.random() > 0.5 ? "¡Ganaste!" : "Perdiste, inténtalo de nuevo.";
      return `Resultado: ${resultado} (Apuesta: $${valor})`;
    }
  
    calcularResultado(): string{
      return `Ganas o perdes el juego: La suerte está hechada`;
    }
}  