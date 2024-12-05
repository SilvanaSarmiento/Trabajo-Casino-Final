import * as readlineSync from 'readline-sync';
import {Juego} from "./Juego"
export class Dados extends Juego {
    cantidadDados: number;
    numero: number;
    saldo: number;
    resultadoDados:number [];

    constructor(nombreDelJuego: string, apuestaMinima: number, cantidadDados: number, numero: number, saldo: number, resultadoDados: number){
        super(nombreDelJuego, apuestaMinima, saldo)
        this.cantidadDados= cantidadDados;
        this.numero=numero;
        this.saldo=saldo;
        this.resultadoDados = [];

    }



    //metodos de dados

    ingresarSaldo (saldo:number): string{
        let saldoIngresado= readlineSync.questionInt("Ingrese la cantidad de saldo con la que desea jugar")
        return `El saldo ingresado es: ${this.saldo}`
    }

  

    tirarDados(cantidadDados:number): number [] {
        let resultadoDados : number []=[];
        for (let i = 0; i < cantidadDados; i++) {
            resultadoDados.push(Math.floor(Math.random() * 6) + 1);
        }
        return resultadoDados;
        }
    
    sumarResultadoDados(resultadoDados: number[]): number {
        let sumaDados: number = 0;
        for (let i = 0; i < resultadoDados.length; i++) {
            sumaDados += resultadoDados[i];

        } return sumaDados;
    }


    // metodos abstractos
    realizarApuesta(cantidad: number): boolean {
        if (cantidad < this.apuestaMinima || cantidad> this.saldo) {
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
