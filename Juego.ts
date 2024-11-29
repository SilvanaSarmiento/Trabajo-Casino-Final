import { Apuesta } from "./Apuesta";

export abstract class Juego implements Apuesta{
    protected nombreDelJuego: string;
    protected apuestaMinima: number;
 constructor(nombreDelJuego:string, apuestaMinima: number) {
        this.nombreDelJuego=nombreDelJuego;
        this.apuestaMinima=apuestaMinima;
    }

    abstract realizarApuesta(valor: number): boolean;
    abstract calcularResultado(): string;
 }