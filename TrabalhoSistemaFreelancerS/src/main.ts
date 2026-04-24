import { Art } from "./Art";
import { priority } from "./Priority";
import { UrgencyFee } from "./Urgency";
import { BonusPremium } from "./Bonus";

function main() {
console.log("\n╔══════════════════════════════════════╗");
  console.log("║   WorkMatch — Sistema de Freelancers ║");
  console.log("╚══════════════════════════════════════╝\n");
 const nomeCliente: string = rl.question("Qual é o seu nome?")
 const servicos: string = rl.question("Selecione seu pedido: ")

    console.log(`
        --------------------

        Bem-vindo,
        Escolha o seu item:

        1 - Arte
    `);

    const opcao: number = rl.questionInt("Digite sua opção: ")

    let arte: Art;

     switch(opcao) {
        case 1:
            artBase= new Art()
            break
        default:
            console.log('Opção inválida!')
            return
    }

        let add: boolean = true

    while(add) {
        console.log(`
            Qual é o tipo do seu pedido?
            1 - Prioridade
            2 - Urgente
            3 - Bônus
            0 - Voltar ao inicio
        `)

        const Add: number = rl.questionInt("Selecione: ")

        switch(Add) {
            case 1:
                arte = new priority(arte)
                break
            case 2:
                arte = new UrgencyFee(arte)
                break
            case 3:
                arte = new BonusPremium(arte)
                break
            case 0:
                add = false
                break
            default:
                console.log('Opção inválida!')
                break
        }
    }

   console.log(`
        ---------- PEDIDO ----------

        Cliente: ${nomeCliente}
        Serviço: ${arte.getDescription()}
        Preço: R$ ${arte.getPrice().toFixed(2)}

        Obrigado pela preferência, volte sempre! ☺️
    `)
}

main()
