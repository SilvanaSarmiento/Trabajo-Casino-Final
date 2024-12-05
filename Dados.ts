import * as readlineSync from 'readline-sync';
import {Juego} from "./Juego"
export class Dados extends Juego {
    cantidadDados: number;
    numero: number;
    saldo: number;

    constructor(nombreDelJuego: string, apuestaMinima: number, cantidadDados: number, numero: number, saldo: number, /*resultadoDados: number*/){
        super(nombreDelJuego, apuestaMinima)
        this.cantidadDados= cantidadDados;
        this.numero=numero;
        this.saldo= saldo;

    }



    //metodos de dados
    public ingresarSaldo(): number {
        let saldoIngresado: string;
        let saldo: number = 0;
    
        do {
            saldoIngresado = readlineSync.question(`Ingrese el saldo con el que desea jugar: `);
            saldo = parseInt(saldoIngresado);
    
            if (isNaN(saldo)) {
                console.log(`El saldo ingresado no es un número, por favor ingrese un número válido.`);
            } else if (saldo < this.apuestaMinima) {
                console.log(`El saldo mínimo es ${this.apuestaMinima}`);
            } else {
                break;
            }
        } while (true);
    
        return saldo;
    }

  
// metodo para tirar los dados
    public tirarDados(_cantidadDados: number): number [] {
        let resultadoDados : number []=[];
        for (let i = 0; i < this.cantidadDados; i++) {
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
        this.saldo -= cantidad;
        return true;
    }

    calcularResultado(): string {
        let resultadoDados = this.tirarDados(this.cantidadDados)
        let sumaDados = this.sumarResultadoDados(resultadoDados);
        if (sumaDados % 2 != 0){
            return "¡Perdiste, no has sumado puntos!"
        }
        else {
            return "¡Ganaste, has sumado un punto!"
        }

        
    }
    iniciarDados(){
        console.log ("Bienvenido al juego de Dados")
        this.ingresarSaldo ();
        if(this.saldo < this.apuestaMinima){
            console.log(`El saldo mínimo es ${this.apuestaMinima}`);
            return "El saldo mínimo es " + this.apuestaMinima;
        }
        let resultadoDados = this.tirarDados(this.cantidadDados)
        let sumaDados = this.sumarResultadoDados(resultadoDados);
        if (sumaDados % 2 != 0){
            console.log("¡Perdiste, no has sumado puntos!")
            return "¡Perdiste, no has sumado puntos!"
        }
        else {
            console.log("¡Ganaste, has sumado un punto!")
            return "¡Ganaste, has sumado un punto!"
        }
    
   
}
 


      
     




// Lanzar un solo dado
// const resultadoUnDado = tirarDados(1);
// console.log("Resultado de un dado:", resultadoUnDado);
}
