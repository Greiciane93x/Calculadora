

function insere(num){
    document.form.textoVisor.value = document.form.textoVisor.value + num;
}
function igual(){
    num = document.form.textoVisor.value;
    if(num){
       document.form.textoVisor.value = eval(num);
}
}
function limpaTela(){
    document.form.textoVisor.value = "";
}
function volta(){
    var num = document.form.textoVisor.value;
    document.form.textoVisor.value = num.substring(0, num.length-1);
}