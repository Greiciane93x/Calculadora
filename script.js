

function insere(num){
    document.form.textoVisor.value = document.form.textoVisor.value + num;
}
function igual(){
    num = document.form.textoVisor.value;
    if(num){
        // é uma função que avalia uma string e retorna um resultado; 
       document.form.textoVisor.value = eval(num);
    }
}
function limpaTela(){
    document.form.textoVisor.value = "";
}
function volta(){
    var num = document.form.textoVisor.value;
    // substring retorna parte de uma string
    // entre os índices inicial e final
    // mas nesse caso retorna a string menos a última posição
    document.form.textoVisor.value = num.substring(0, num.length-1);
}