function chamarServicoViaCEP() {
    cep_digitado = document.getElementById("numero_cep").value;

    const urlViaCEP = "https://viacep.com.br/ws/" + cep_digitado + "/json/";

    fetch(urlViaCEP).then(Response => {

        if (Response.ok) {
            alert("Resposta OK");

            return Response.json();
        }
        if (!Response.ok) {
            alert("Resposta não OK")
        }
    })

        .then(data => {
            // alert(data);
            console.log(data);
        })

        .catch(error => {
            alert("Erro ao requisitar o serviço");

            console.error("Erro ao requisitar o serviço");
        })
}