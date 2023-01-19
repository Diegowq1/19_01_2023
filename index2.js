/*
    EXERCICIO 02 - CRIAR UMA ESTRUTURA COM:

    * UMA CLASSE DE SHOPPINGS DO RJ (DE SUA ESCOLHA)
    * UMA SUBCLASSE DE TIPOS DE LOJAS DE SUA ESCOLHA( por exemlo: alimentaçao, vestuario...)
    * UMA SUBCLASSE DE LOJAS DE SUA ESCOLHA
    

    * A SUBCLASSE DE LOJAS TERÁ OS SEGUINTES ATRIBUTOS:
        * Tamanho da loja, produto mais vendido, 24hs
         
        *Método: exibir os atributos da loja
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
var Shoppingcarioca = /** @class */ (function () {
    function Shoppingcarioca() {
    }
    return Shoppingcarioca;
}());
var Vestuario = /** @class */ (function (_super) {
    __extends(Vestuario, _super);
    function Vestuario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vestuario;
}(Shoppingcarioca));
var Centauro = /** @class */ (function (_super) {
    __extends(Centauro, _super);
    function Centauro(tamanhoDaLoja, produtoMaisVendido, aberto24hs) {
        var _this = _super.call(this) || this;
        _this.tamanhoDaLoja = tamanhoDaLoja;
        _this.produtoMaisVendido = produtoMaisVendido;
        _this.aberto24hs = aberto24hs;
        return _this;
    }
    Centauro.prototype.informaçoesloja = function () {
        console.log("A loja tem ".concat(this.tamanhoDaLoja, "\n            O produto mais vendido foi ").concat(this.produtoMaisVendido, "\n            A loja fica aberta 24 horas? ").concat(this.aberto24hs, " "));
    };
    return Centauro;
}(Vestuario));
var exibirloja = new Centauro(51, "Camisa do Vasco", false);
exibirloja.informaçoesloja();
