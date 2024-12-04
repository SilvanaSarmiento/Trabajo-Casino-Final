export interface Apuesta{
    realizarApuesta(valor: number): boolean;
    calcularResultado(): string;
}