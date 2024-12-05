"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
var readlineSync = require("readline-Sync");
var Juego_1 = require("./Juego");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas() {
        var _this = _super.call(this, "TragamonedasClásico", 10) || this;
        _this.figuras = ["🍋", "🍇", "🍊", "🍓"];
        _this.rodillos = [];
        _this.cantidadRodillos = 3;
        _this.saldo = 0;
        return _this;
    }
    Tragamonedas.prototype.realizarApuesta = function (cantidad) {
        if (cantidad < this.apuestaMinima) {
            console.log("La apuesta m\u00EDnima es ".concat(this.apuestaMinima));
            return false;
        }
        this.saldo = cantidad;
        return true;
    };
    //Inicia los rodillos llenando el array con figuras aleatorias
    Tragamonedas.prototype.IniciarRodillos = function () {
        var _this = this;
        this.rodillos = Array(this.cantidadRodillos).fill("").map(function () { return _this.getFiguraRandom(); });
    };
    //figura aleatoria
    Tragamonedas.prototype.getFiguraRandom = function () {
        var indexRandom = Math.floor(Math.random() * this.figuras.length);
        return this.figuras[indexRandom];
    };
    //gira los rodillos de manera independiente
    Tragamonedas.prototype.girarRodillos = function () {
        var _this = this;
        this.rodillos = this.rodillos.map(function () { return _this.getFiguraRandom(); });
    };
    //Muestra resultado por consola 
    Tragamonedas.prototype.MostrarRodillos = function () {
        console.log("el Resultado es: [" + this.rodillos.join(" | ") + "]");
    };
    //verifica si coinciden las figuras en la línea
    Tragamonedas.prototype.esGanador = function () {
        var _this = this;
        return this.rodillos.every(function (figura) { return figura == _this.rodillos[0]; });
    };
    Tragamonedas.prototype.calcularResultado = function () {
        if (this.esGanador()) {
            return "Felicidades, \u00A1ganaste! \uD83C\uDF89 Las figuras fueron: [".concat(this.rodillos.join(" | "), "]");
        }
        else {
            return "Lo siento, perdiste. Las figuras fueron: [".concat(this.rodillos.join(" | "), "]");
        }
    };
    //obtiene la apuesta mínima
    Tragamonedas.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    //Inicia el juego y devuelve un primer resultado
    Tragamonedas.prototype.jugar = function (apuesta) {
        this.girarRodillos();
        this.MostrarRodillos();
        if (this.esGanador()) {
            console.log("Felicidades, ganaste! 🎉");
            return apuesta * 2;
        }
        else {
            console.log("Perdiste la jugada 😞");
            return -apuesta;
        }
    };
    return Tragamonedas;
}(Juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
//Control del juego 
function iniciarJuegoTragamonedas() {
    var tragamonedas = new Tragamonedas();
    console.log("Bienvenido al Juego de Tragamonedas! 🎰");
    //configuración inicial del saldo
    var saldo = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
    while (isNaN(saldo) || saldo <= 0) {
        console.log("Por favor ingrese un saldo válido");
        saldo = parseFloat(readlineSync.question("Ingresa tu saldo inicial: "));
    }
    console.log("Presione cualquier tecla para comenzar el juego");
    readlineSync.keyInPause(); //espera que el usuario presione una tecla para comenzar
    var seguirJugando = true;
    while (seguirJugando) {
        console.log("su saldo actual es: $".concat(saldo.toFixed(2))); //ToFixed redondea el saldo a dos decimales
        var apuestaMinima = tragamonedas.getApuestaMinima();
        //Solicita apuesta 
        var apuesta = parseFloat(readlineSync.question("Ingresa tu apuesta (m\u00EDnimo $".concat(apuestaMinima, ": )")));
        while (isNaN(apuesta) || apuesta < apuestaMinima || apuesta > saldo) {
            console.log("Apuesta inválida. ingrese un monto igual o menor al mínimo y que no supere su saldo");
            apuesta = parseFloat(readlineSync.question("Ingresa tu apuesta (m\u00EDnimo $".concat(apuestaMinima, ": )")));
        }
        //jugar una ronda 
        var resultado = tragamonedas.jugar(apuesta);
        saldo += resultado;
        if (resultado > 0) {
            console.log("Ganaste $".concat(resultado.toFixed(2)));
        }
        else {
            console.log("Perdiste $".concat(Math.abs(resultado).toFixed(2)));
        }
        //verificar si el usuario aún tiene saldo disponible para seguir jugando
        if (saldo < apuesta) {
            console.log("❌ Te has quedado sin saldo suficiente para seguir jugando.");
            seguirJugando = false;
        }
        else {
            var jugarDeNuevo = readlineSync.question("¿Quieres jugar otra vez? (s/n): ");
            seguirJugando = jugarDeNuevo.toLowerCase() === "s";
        }
    }
    console.log("\uD83D\uDC4B \u00A1Gracias por jugar! Tu saldo final es $".concat(saldo.toFixed(2), "."));
}
// Ejecuta el juego
iniciarJuegoTragamonedas();
