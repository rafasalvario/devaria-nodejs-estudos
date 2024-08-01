const readLine = require('readline').createInterface({
    input : process.stdin, 
    output : process.stdout
});

console.log('Precisamos verificar se você é maior de 18 anos e possui habilitação para entrar no kart');
console.log('Além disso, precisamos verificar se você está na lista de presença');

readLine.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2006){
        console.log('Você não tem 18 anos');
    }else{
        readLine.question("Você tem habilitação? (Sim/Nao)", temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no Kart');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem-vindo, Douglas');
                            break;
                        case 'Rafael' :
                            console.log('Bem-vindo, Rafael');
                            break;
                        default :
                            console.log('Seu nome não consta na lista de presença');    
                    }
                });
            }
        })
    }
})