class Cliente{
    nome;
    cpf;
}

class contaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const client1 = new Cliente();
client1.nome = "Vinícius";
client1.cpf = 46502178812;

const contaCorrenteVinicius = new contaCorrente();
contaCorrenteVinicius.agencia = 0152;
contaCorrenteVinicius.saldo = 200;

contaCorrenteVinicius.sacar(100);

console.log(client1,contaCorrenteVinicius);
