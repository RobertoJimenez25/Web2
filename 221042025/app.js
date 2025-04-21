function generar(){
    let input1 = document.getElementById("input1").value.trim();
    let input2 = document.getElementById("input2").value.trim();
    let input3 = document.getElementById("input3").value.trim();
    let input4 = document.getElementById("input4").value.trim();
    let textoconcatenado = input1 + "," + input2 + "," + input3 + "," + input4;
    console.log(textoconcatenado);
    if(textoconcatenado === ",,"){
        alert("Por favor, completa al menos un campo.");
    }else{
        let generarqrurl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoconcatenado);
        let qrimg = document.createElement('img');
        // agregar atributos
        qrimg.src = generarqrurl;
        qrimg.alt = 'Codigo QR';

        qrimg.classList.add('qr-code');

        document.getElementById('qr-code').appendChild(qrimg);
    }
}