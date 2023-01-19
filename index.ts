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
      
*/

class Marcadocarro{
    vidroEletrico: boolean;
    freioabs: boolean;
    traçaoNasQuatroRodas: boolean; 
    combustivel: boolean;
    marcaDoCarro: string;


    constructor(vidroEletrico: boolean, freioabs: boolean, traçaoNasQuatroRodas: boolean, combustivel: boolean, marcaDoCarro: string ){
            this.vidroEletrico = vidroEletrico;
            this.freioabs = freioabs;
            this.traçaoNasQuatroRodas = traçaoNasQuatroRodas;
            this.combustivel = combustivel;
            this.marcaDoCarro = marcaDoCarro;

    }

    informaçoescarro(): void{
        console.log(`A tração está ativada? ${this.traçaoNasQuatroRodas} 
                     O carro é a gas? ${this.combustivel}
                     O freio ABS está ativado? ${this.freioabs}
                     Qual é a marca do carro? ${this.marcaDoCarro}`)
    }


    }

    let exibircarro = new Marcadocarro (true, false, true, true, "Gol")
    exibircarro.informaçoescarro();

    class modelo extends Marcadocarro{

    }


    

    



















