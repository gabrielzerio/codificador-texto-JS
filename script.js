const input = document.querySelector(".inputTexto");
const output = document.querySelector(".output");
const btnCriptografa = document.querySelector(".btn-criptografa");
const btnDescriptografa = document.querySelector(".btn-descriptografa");
const mostraStatusCodigo = document.querySelector(".mostraStatusCodigo");
const outputBtncopiar = document.querySelector(".output-btncopiar");
const btnCopiar = document.querySelector(".copiar");

btnCriptografa.addEventListener("click", encrypt);
btnDescriptografa.addEventListener("click", decrypt);
btnCopiar.addEventListener("click", (e) =>{
    e.preventDefault();
    navigator.clipboard.writeText(output.value);
});

/* As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também 
retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, 
e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.
Extras:
- Um botão que copie o texto criptografado/descriptografado para a área de 
transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" 
do menu dos aplicativos.
*/



function encrypt() { /* passar valor pro output dentro dessa func */
    if (input.value != "") {
        let encriptacao = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
        let codigo = input.value.toLowerCase();

        for(let i=0; i<encriptacao.length; i++){
            if(codigo.includes(encriptacao[i][0])){
                codigo = codigo.replaceAll(encriptacao[i][0],encriptacao[i][1]);
            }
        }
        
        output.value = codigo;
        mostraStatus(true);
    }
    else {
        mostraStatus(false)
    }
}
function decrypt() { /* passar valor pro output dentro dessa func */
    if (input.value != "") {
        let encriptacao = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
        let codigo = input.value.toLowerCase();

        for(let i=0; i<encriptacao.length; i++){
            if(codigo.includes(encriptacao[i][1])){
                codigo = codigo.replaceAll(encriptacao[i][1],encriptacao[i][0]);
            }
        }
        
        output.value = codigo;
        mostraStatus(true);
    }
    else {
        mostraStatus(false)
    }
}



function mostraStatus(estado) {
    if (estado) {
        
        mostraStatusCodigo.style.display = "none";
        output.style.fontSize = '32px';
        outputBtncopiar.style.height = "100%";
        output.style.height = "90%";
        btnCopiar.style.visibility = "visible"
    } else {
        outputBtncopiar.style.height = "0";
        mostraStatusCodigo.style.display = "";
        output.style.fontSize = '16px';
        output.style.height = "";
        btnCopiar.style.visibility = "hidden"
        output.value = 'Digite um texto que você deseja criptografar ou descriptografar'
    }
}