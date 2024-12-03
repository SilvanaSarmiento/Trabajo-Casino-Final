import {Juego} from "./Juego"
export class Casino {
    protected saldo: number;
    protected juegos: Juego[];
    constructor( juegos:Juego []){
        
        this.juegos=[];
    }
    //metodos
    agregarJuego(juegos:Juego):void{
        this.juegos.push(juegos);
    }
}