import {Juego} from "./Juego"
export class Casino {
    protected saldo: number;
    protected juegos: Juego[];
    constructor(saldo:number, juegos:Juego []){
        this.saldo=saldo;
        this.juegos=[];
    }
    //metodos
    agregarJuego(juegos:Juego):void{
        this.juegos.push(juegos);
    }
}