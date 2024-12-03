import { Apuesta } from "./Apuesta";

export abstract class Juego implements Apuesta{
    protected nombreDelJuego: string;
    protected apuestaMinima: number;
    protected saldo: number;
 constructor(nombreDelJuego:string, apuestaMinima: number, saldo:number,) {
        this.nombreDelJuego=nombreDelJuego;
        this.apuestaMinima=apuestaMinima;
        this.saldo=saldo;
    }

    abstract realizarApuesta(valor: number): boolean;
    abstract calcularResultado(): string;
 }