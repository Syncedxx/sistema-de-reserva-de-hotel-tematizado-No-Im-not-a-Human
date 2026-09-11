function calcularReserva() {
    let nomeH, tipoQuarto, qtdDiaria, valorDiaria, numHospedes, dataEntrada, dataSaida, valorTotal;

    nomeH = document.getElementById("txtnomeH").value;
    tipoQuarto = document.getElementById("txttipoQ").value;
    qtdDiaria = parseInt(document.getElementById("txtquantidadeD").value);
    valorDiaria = parseFloat(document.getElementById("txtvalorD").value);
    numHospedes = parseInt(document.getElementById("txtnumeroH").value);
    dataEntrada = document.getElementById("txtdataEntrada").value;
    dataSaida = document.getElementById("txtdataSaida").value;

    if (nomeH === "" || tipoQuarto === "" || isNaN(qtdDiaria) || isNaN(valorDiaria)
        || isNaN(numHospedes) || dataEntrada === "" || dataSaida === "") {
        alert("Todos os campos devem estar preenchidos com valores válidos para calcular o valor total da hospedagem!");
        return;
        //lembre-se, sem o return ele continuaria validando outras linhas
        //pra baixo, o return faz com que se a condicao for verdadeira, exiba o
        //alert e pare no momento que chegar em return
    }

    valorTotal = qtdDiaria * valorDiaria;

    if (qtdDiaria > 5) {
        valorTotal = valorTotal * 0.90;
    }

    document.getElementById("resumoTotal").innerHTML = "Dados da Reserva do Hóspede " + nomeH + ": <br>"
        + "Tipo de quarto: " + tipoQuarto + "<br>"
        + "Quantidade de diárias: " + qtdDiaria + "<br>"
        + "Valor da diária: " + valorDiaria + "<br>"
        + "Número de hóspedes: " + numHospedes + "<br>"
        + "Data de entrada: " + dataEntrada + "<br>"
        + "Data de Saída: " + dataSaida + "<br>"
            + "Valor total a pagar: R$" + valorTotal;
}