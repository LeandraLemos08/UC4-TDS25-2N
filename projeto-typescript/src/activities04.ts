// Exemplo 1 - Anel

 class GuardiaoDoAnel {
  private portador: string;

  constructor(nome: string) {
    this.portador = nome;
  }

  public mostrarPortador(): void {
    console.log(`O atual portador do anel é: ${this.portador}`);
  }

  public passarAnel(novoPortador: string): void {
    console.log(`O anel foi passado para ${novoPortador}`);
    this.portador = novoPortador;
  }
}

const portador1 = new GuardiaoDoAnel("Bilbo");
 
portador1.mostrarPortador();
console.log("------------------")
portador1.passarAnel("Frodo");


// 2 - Mago

class Mago {
  private name: string
    private energia: number;
  
    constructor(name: string) {
      this.name = name;
      this.energia = 100;
    }
  
  

    public conjurarMagia() {
      if (this.energia >= 30) {
        this.energia -= 30;
        console.log( `${this.name} conjurou uma poderosa magia.`);
      } else {
        console.log(`${this.name} não tem energia suficiente para conjurar uma magia.`);
      }
    }
  
    public descansar() {
      this.energia = 100;
      console.log(`${this.name} descansou e recuperou suas energias.`);
    }
  
    public exibirEnergia() {
      console.log(`${this.name} atualmente esta com ${this.energia}% de energia`);
    }
  }
  
  const gandalf = new Mago("Gandalf: The Grey");
  const saruman = new Mago("Saruman: The White");
  

  gandalf.exibirEnergia();
  saruman.exibirEnergia();
  saruman.conjurarMagia();
  saruman.conjurarMagia();
  saruman.conjurarMagia();
  saruman.exibirEnergia();
  gandalf.conjurarMagia();
  gandalf.conjurarMagia();
  gandalf.descansar();
  gandalf.exibirEnergia();
  saruman.conjurarMagia();
  saruman.exibirEnergia();
  
/*
  Exercícios
  Pesquisa
  O que pode acontecer em um sistema se todos os atributos de uma classe forem public?
  Erros, fraude, roubos. 
  Qual a diferença entre private e protected no TypeScript?
  Um existe apenas dentro da classe, o outro até mesmo nas classes filhas.
  Cite exemplos do mundo real que precisam de encapsulamento.
  Exemplos possíveis:
  
  cofres
  contas bancárias
  sistemas de segurança
  controles de acesso */

  // Prática

  class hobbit {
    private idade: number
     constructor(idade: number){
      this.idade = 51;
     }
  
     public fazerAniversario() { 
     }

     public mostrarIdade(){
     }
  }

// Espada élfica

