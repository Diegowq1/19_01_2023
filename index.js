/*
EXERCICIO 01 - CRIAR UMA ESTRUTURA COM:

        * UMA CLASSE DE MARCA DE CARROS (DE SUA ESCOLHA)
      * UMA SUBCLASSE COM MODELOS DE SUA ESCOLHA
      * ATRIBUTOS DE VIDROS ELÉTRICOS, FREIOS ABS,
      * E TRAÇÃO NAS QUATRO RODAS
      *
      * MÉTODOS DE ATIVAÇÃO NA TRAÇÃO
      * MUDANÇA DE COMBUSTÍVEL (GÁS/GASOLINA -  true or false)
      * MÉTODO ATIVAÇÃO DO FREIO ABS

EXERCICIO 02

EXERCICIO 03
*/
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
var Marcadocarro = /** @class */ (function () {
    function Marcadocarro(vidroEletrico, freioabs, traçaoNasQuatroRodas, combustivel, marcaDoCarro) {
        this.vidroEletrico = vidroEletrico;
        this.freioabs = freioabs;
        this.traçaoNasQuatroRodas = traçaoNasQuatroRodas;
        this.combustivel = combustivel;
        this.marcaDoCarro = marcaDoCarro;
    }
    Marcadocarro.prototype.informaçoescarro = function () {
        console.log("A tra\u00E7\u00E3o est\u00E1 ativada? ".concat(this.traçaoNasQuatroRodas, " \n                     O carro \u00E9 a gas? ").concat(this.combustivel, "\n                     O freio ABS est\u00E1 ativado? ").concat(this.freioabs, "\n                     Qual \u00E9 a marca do carro? ").concat(this.marcaDoCarro));
    };
    return Marcadocarro;
}());
var exibircarro = new Marcadocarro(true, false, true, true, "Gol");
exibircarro.informaçoescarro();
var modelo = /** @class */ (function (_super) {
    __extends(modelo, _super);
    function modelo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return modelo;
}(Marcadocarro));
