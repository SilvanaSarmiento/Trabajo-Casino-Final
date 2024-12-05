import { Apuesta } from "./Apuesta";

export abstract class Juego implements Apuesta{
    protected nombreDelJuego: string;
    protected apuestaMinima: number;
 

 constructor(nombreDelJuego:string, apuestaMinima: number) {
        
        
    }

    abstract realizarApuesta(valor: number): boolean;
    abstract calcularResultado(): string;
 }