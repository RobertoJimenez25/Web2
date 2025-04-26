function enviar(){
    let input0 = document.getElementById("input0").value.trim();
    let input1 = document.getElementById("input1").value.trim();
    let txtconcatenado = input0 + "," + input1;
    console.log(txtconcatenado);
    if(txtconcatenado === ","){
        alert("Por favor, completa al menos un campo.");
    }else{
        let enviarmensaje='https://api.whatsapp.com/send?phone=' + encodeURIComponent(input0) + '&text=' + encodeURIComponent(input1);
        location.href = enviarmensaje;
    }
}