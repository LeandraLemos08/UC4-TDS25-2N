// teste
let nome: string = "Daniel Souza"
console.log(`Olá ${nome}!`)
// 1
function dobrar(a: number): number {
    return a * 2  
} 
// 2
function saudacao(nome: string): string {
    return `Olá, ${nome}`;
  }
  console.log(saudacao("Maria")); 
// 3
let arrMigo: string[] = ["Anastacia", "Feyre", "Cassandra", "Dhalia", "Ophelia"]
arrMigo.forEach((amigo) => {
    console.log(`Meu amigo é ${amigo}`);
  });
// 4
  const pessoaTupla: [string, number] = ["Lucas", 18];

  console.log(pessoaTupla[0]); 
  console.log(pessoaTupla[1]); 
// 5
  enum NivelAcesso {
    ADMIN,
    USER,
    GUEST
  }

  let usuarioNivel: NivelAcesso = NivelAcesso.ADMIN;
  console.log(usuarioNivel); 

// Personalizada 
enum NivelAcesso {
    ADMIN1 = "ADMIN",
    USER1 = "USER",
    GUEST1 = "GUEST"
  }
// 6
  type Pessoa = {
    nome: string;
    idade: number;
    email: string;
  };

  const pessoa: Pessoa = {
    nome: "Juliana",
    idade: 20,
    email: "juliana@email.com"
  };
7
function erroFatal(mensagem: string): never {
  throw new Error(mensagem);
}

erroFatal("Algo deu errado!");

// O 8 é teste e é redundante?