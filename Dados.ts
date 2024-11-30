import {Juego} from "./Juego"
export class Dados extends Juego {
    cantidadDados: number;
    numero: number;
    saldo: number;
    resultadoDados:number;

    constructor(nombreDelJuego: string, apuestaMinima: number, cantidadDados: number, numero: number, saldo: number, resultadoDados: number){
        super(nombreDelJuego, apuestaMinima)
        this.cantidadDados= cantidadDados;
        this.numero=numero;
        this.saldo=saldo;
        this.resultadoDados=resultadoDados;

    }

    tirarDados(cantidadDados:number): number [] {
        let resultadoDados : number []=[];
        for (let i = 0; i < cantidadDados; i++) {
            resultadoDados.push(Math.floor(Math.random() * 6) + 1);
          }
          return resultadoDados;
        }
    //sumarResultadoDados(){

    //}



    realizarApuesta(cantidad: number): boolean {
        if (cantidad < this.apuestaMinima) {
            console.log(`La apuesta mínima es ${this.apuestaMinima}`);
            return false;
        }
        this.saldo = cantidad;
        return true;
    }

    calcularResultado(): string {
        let resultadoDados = this.tirarDados(this.cantidadDados)
        if (this.resultadoDados % 2 != 0){
            return "¡Perdiste, no has sumado puntos!"
        }
        else {
            return "¡Ganaste, has sumado un punto!"
        }

        
    }
   
}

// Lanzar un solo dado
// const resultadoUnDado = tirarDados(1);
// console.log("Resultado de un dado:", resultadoUnDado);
