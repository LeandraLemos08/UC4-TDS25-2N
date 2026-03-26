
// class animal {
//     protected name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     public eat() {
//     console.log(`${this.name} está comendo.`)
// }
//     public sleep() {
//     console.log(`${this.name} está dormindo.`)
//     }

//     public soundEmit() {
//     console.log(`Emitindo som...`)
//     }
// }

// class dog extends animal {
//     public bark() {
//     console.log(`${this.name} está latindo.\nAu! Au!`)
// }
//     public soundEmit(): void {
//     console.log(`${this.name} disse - Au! Au!`)
// }}

// class cat extends animal {
//     public meow() {
//     console.log(`${this.name} está miando.\n Meow! Meow!`)
//     }

//     public soundEmit(): void {
//     console.log(`${this.name} disse - Miau.`)
// }
// }

// const snoop = new dog("Snoop");
// const sss = new cat("Salazar Shushu Sonserina")

// snoop.eat
// snoop.bark
// snoop.sleep
// sss.eat
// sss.meow
// sss.sleep

// se criasse novos arquivos e tiver que importar
// adicionar export onde queremos que seja exportado, por exemplo, na classe animal, imaginando que a importariamos para arquivos cachorro e gato separados
// Noutro arquivo, import { animal } from "./activities05.ts", imaginando se o nome fosse "./animal.ts", sendo o nome da pasta/documento em questão
// Em outro arquivo, importamos o cachorro e o gato
// import { dog } from "./dog" imagiando que este fosse o nome
// e de mesma forma para cat
// então fizemos const, como acima, que faz o codigo funcionar
// acho mais organizado no arquivo só, mas é bom concerteza aprender isso
// se fosse varios animais, ai sim, varios arquivos são claramente mais práticos e organizados


// Exercicios

//1. Três exemplos de herança: (Plantas > flores), (tecnologia> telefones), (seriados> temporadas).
//2. Classe pai é como uma entidade, ela generaliza o conceito que vem a se dividir em especializações, sendo estas as classes filhas
//3. De acordo com a pesquisa: Java, Python, C++ entre outras suportam herança em poo.

// Prática

//1

class people {
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    public introduce(){
        console.log(`${this.name} está se apresentando.`)
    }
}

class teacher extends people {
 public teach(){
    console.log(`${this.name} está ensinando.`)
 }
}

class student extends people {
    public study() {
        console.log(`${this.name} está estudando.`)
    }
}

const maraya = new teacher ("Maraya")
const tomb = new student ("Tomb")

tomb.introduce()
maraya.introduce()
tomb.study()
maraya.teach()

class funcionario {
    protected nome: string;
    protected salario: number;
    constructor(nome: string, salario: number) {
        this.nome=nome
        this.salario=salario
    }

    public mostrarSalario(){
        console.log(`${this.nome} recebe ${this.salario} de salário.`)
    }
}

class gerente extends funcionario {
    public aumentarSalario(){
        this.salario++ 
    }
}

class estagiario extends funcionario {
    public receberAjudaDeCusto() {
        this.salario--
    }
}

const antoine = new gerente ("Antoine", 3000);
const emelie = new estagiario ("Emelie", 1000)

antoine.mostrarSalario()
antoine.aumentarSalario()
antoine.mostrarSalario()
emelie.mostrarSalario()
emelie.receberAjudaDeCusto()
emelie.mostrarSalario()