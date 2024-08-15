function Media(formulario){
    var n1 = parseFloat(formulario.num1.value)
    var n2 = parseFloat(formulario.num2.value)
    var n3 = parseFloat(formulario.num3.value)
    var n4 = parseFloat(formulario.num4.value)
    var res

    var media = (n1+n2+n3+n4)/4;

    if(media>=6){
        document.getElementById("res").innerHTML="A sua média é " + media + ". Você foi aprovado!";
    }else if(media>=4 && media <6){
        document.getElementById("res").innerHTML="A sua média é " + media + ". Você está de IFA!";
    }else{
        document.getElementById("res").innerHTML="A sua média é " + media + ". Você foi Reprovado!";

    }
}