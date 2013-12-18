$(function () {

    $("input").textinput({ mini: true });
    //$(".result").hide();
    $(".ui-br").css("border", "none");

    $(".ui-body-a, .ui-overlay-a").css("border", "none");

    $("#refresh").click(function () {

        $("#weight").val("");
        $("#height").val("");
        $("#age").val("");

        $('input[name=sexo]').each(function () {

            $("input[name=sexo]:first").prop('checked', true).checkboxradio('refresh');
            $("input[name=sexo]:last").prop('checked', false).checkboxradio('refresh');
        });

    });

    $("#calcImc").click(function () {

        var weight = $("#weight").val();
        var height = $("#height").val();
        var age = $("#age").val();
        var sexo = $('input[name=sexo]').filter(':checked').val();

        var imc = weight / Math.pow(height, 2) * 10000;

        if (imc <= 18.4) {
            // $("#result tr:eq(1)").css("color", "green");
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            //$("#result tr:eq(2)").css("color", "green");
        }
        else if (imc >= 25.0 && imc <= 29.9) {
            //$("#result tr:eq(3)").css("color", "green");
        }
        else if (imc >= 30 && imc <= 40) {
            //$("#result tr:eq(4)").css("color", "green");
        }
        else if (imc > 40.0) {
            //$("#result tr:eq(5)").css("color", "green");
        }

        console.log(imc);
        console.log(String(imc).substring(0, 4));

        //peso ideal
        PesoIdeal(height, sexo);




        var vpeso = 0;
        var valtura = 0;
        var vidade = 0;
        var vresultado = 0;
        var vnenhuma = 0;
        var vmoderada = 0;
        var vintensa = 0;

        modo = sexo;

        console.log("Model selected" + modo);

        if (weight != "") {
            vpeso = parseFloat(weight);
        }

        if (height != "") {
            valtura = parseFloat(height);
        }

        if (age != "") {
            vidade = parseFloat(age);
        }


        if (modo == '0') {
            vresultado = parseFloat(66 + (13.7 * vpeso) + (5 * valtura) - (6.8 * vidade));


            console.log("Seu TMB é: " + vresultado.toFixed(2));

            $("#tmbResult").text(vresultado.toFixed(2));

            var total = vresultado + (vresultado * 0.25);
            vnenhuma = parseFloat(total);


            console.log("sedentario: " + vnenhuma.toFixed(2));

            $("#ndcNResult").text(vnenhuma.toFixed(2));

            total = vresultado + (vresultado * 0.35);
            vmoderada = parseFloat(total);

            console.log("moderada: " + vmoderada.toFixed(2));

            $("#ndcMResult").text(vmoderada.toFixed(2));

            total = vresultado + (vresultado * 0.45);
            vintensa = parseFloat(total);

            console.log("moderada: " + vintensa.toFixed(2));

            $("#ndcIResult").text(vintensa.toFixed(2));

        } else if (modo = "1") {
            vresultado = parseFloat(655 + (9.6 * vpeso) + (1.7 * valtura) - (4.7 * vidade));

            $("#tmbResult").text(vresultado.toFixed(2));

            var total = vresultado + (vresultado * 0.20);

            vnenhuma = parseFloat(total);

            $("#ndcNResult").text(vnenhuma.toFixed(2));

            total = vresultado + (vresultado * 0.30);
            vmoderada = parseFloat(total);

            $("#ndcMResult").text(vmoderada.toFixed(2));

            total = vresultado + (vresultado * 0.40);
            vintensa = parseFloat(total);

            $("#ndcIResult").text(vmoderada.toFixed(2));
        }

    });
});

function PesoIdeal(height, sexo) {
    var calc1 = height - 100;
    var calc2 = height - 150;
    var calc3 = calc2 / (sexo == 0 ? 4 : 2);
    var ideal = calc1 - calc3;

    console.log("Seu peso ideal é:" + ideal)
}