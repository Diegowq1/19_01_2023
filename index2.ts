/*
    EXERCICIO 02 - CRIAR UMA ESTRUTURA COM:

    * UMA CLASSE DE SHOPPINGS DO RJ (DE SUA ESCOLHA)
    * UMA SUBCLASSE DE TIPOS DE LOJAS DE SUA ESCOLHA( por exemlo: alimentaçao, vestuario...)
    * UMA SUBCLASSE DE LOJAS DE SUA ESCOLHA
    

    * A SUBCLASSE DE LOJAS TERÁ OS SEGUINTES ATRIBUTOS:
        * Tamanho da loja, produto mais vendido, 24hs
         
        *Método: exibir os atributos da loja 
*/

class Shoppingcarioca {

}




class Vestuario extends Shoppingcarioca{

}













class Centauro extends Vestuario{
    tamanhoDaLoja: number;
    produtoMaisVendido: string;
    aberto24hs: boolean


    constructor(tamanhoDaLoja: number, produtoMaisVendido: string, aberto24hs: boolean){
        super()
        this.tamanhoDaLoja = tamanhoDaLoja;
        this.produtoMaisVendido = produtoMaisVendido;
        this.aberto24hs = aberto24hs;
    }

        informaçoesloja(): void{
            console.log(`A loja tem ${this.tamanhoDaLoja}
            O produto mais vendido foi ${this.produtoMaisVendido}
            A loja fica aberta 24 horas? ${this.aberto24hs} `)

        }

        
}

let exibirloja = new Centauro (51, "Camisa do Vasco", false)
exibirloja.informaçoesloja();

