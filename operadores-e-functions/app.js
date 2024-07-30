const readLine = require('readLine').createInterface({
    input  : process.stdin,
    output : process.stdout
});

const ValidarNumeroInformado = (numero) =>{
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('numero informado não é válido');
    }
    return resultado
}

const validarOperador = (operador) => {
    switch(operador){
        case '+' :
        case '-' :
        case '/' :
        case '*' :
        case '%' :
            return operador;
        default:
            console.log('Operador informado é inválido');
            return null;
    }
}

readLine.question('Favor informar um número:', (numero1) => {
    const numeroValidado1 = ValidarNumeroInformado(numero1);

    if(numeroValidado1){
        readLine.question('Favor informar outro número:', (numero2) => {
            const numeroValidado2 = ValidarNumeroInformado(numero2);

            if(numeroValidado2){
                readLine.question('Favor informar o operador:', (operador) =>{
                    const operadorValidado = validarOperador(operador);

                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+' : console.log(`operador selecionado adição resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-' : console.log(`operador selecionado subtração resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '/' : console.log(`operador selecionado divisão resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '*' : console.log(`operador selecionado multiplicação resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '%' : console.log(`operador selecionado módulo resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            
                            default: break;
                        }
                    }
                });
            }
        });

    }
})