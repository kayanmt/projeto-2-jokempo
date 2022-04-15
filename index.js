var prompt = require('prompt-sync')();
 
let t ="S";
while (t==="S"){
let c=0;
let p=0;
let e =0;
let j = +prompt("Quantas rodadas voce quer jogar");
for(let i=1;i<=j;i++){

    let u = +prompt ("Digite 1 para pedra, 2 para papel ou 3 para tesoura");
    while (u!=1&&u!=2&&u!=3){
    u = +prompt ("Digite 1 para pedra, 2 para papel ou 3 para tesoura");
}

let r = Math.random()*2;
let a= Math.round(r+1);
if (u===a)
{
    console.log ("Deu empate, ninguem pontua");
    e++;
}
else if (u===1&&a===3){
    console.log("O computador escolheu tesoura, e voce escolheu pedra, logo voce venceu.");
    p++;
}
else if (u===2&&a===1){
    console.log("O computador escolheu pedra, e voce escolheu papel, logo o voce venceu");
    p++;
}
else if (u===3&&a===2){
    console.log("O computador escolheu papel, e voce escolheu tesoura, logo voce venceu");
    p++;
}
else if(u===3&&a===1){
    console.log("O computador escolheu pedra, e voce escolheu tesoura, logo o computador venceu");
    c++;
}
else if(u===1&&a===2){
    console.log("O computador escolheu papel, e voce escolheu pedra, logo o computador venceu");
    c++;
}
else {
    console.log("O computador escolheu tesoura, e voce escolheu papel, logo o computador venceu");
    c++;
}
}
if(c>p){
    console.log("Com ",c," vitorias o computador e o grande vencedor, placar final: ",c,"x",p," sendo que houveram ", e," empates");
}
else if(c<p){
    console.log("Com ",p," vitorias voce foi o grande vencedor, placar final: ",p,"x",c," sendo que houveram ", e," empates");
}
else if (c===p){
    console.log("Deu empate, com o placar ",c,"x",p," e ",e," rodadas empatadas.");
}
// O '\n' usado no prompt logo a baixo causava a execucao do while, antes que se declarasse a opcao desejada 
//por isso removi os '\n' dessa parte.

t = prompt("Deseja jogar novamente? Digite 's' para jogar novamente e 'n' para sair do jogo ").toUpperCase();
while (t!="S"&&t!="N"){
    t= prompt("Digite 's' para jogar novamente e 'n' para sair do jogo").toUpperCase();
}
}
console.log("Voce encerrou o programa");
