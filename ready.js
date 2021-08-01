function inserir(valorInserido) {
    
    var valor1 = document.getElementById('campo1');
    var valor2 = document.getElementById('campo2');

    if (valor1.value == '') {
        valor1.value = valorInserido;

        //  alert(valor1.value);

    }else if (valor2.value == '') {
        valor2.value = valorInserido;

        // alert(valor2.value)
    }

}

function corrigir(){

    var valor1 = document.getElementById('campo1');
    var valor2 = document.getElementById('campo2');

    valor1.value = '';
    valor2.value = '';
}
//================= Resultado ===========================
    var res = document.querySelector('#res'); 
//===============Votos Nulos =============================
    var voton = document.getElementById('nulo');
    var vn = 0;
    voton.addEventListener('click',contar =>{
        
        var valor1 = document.getElementById('campo1');
        var valor2 = document.getElementById('campo2');
        
        if (valor1.value === '' && valor2.value === '') {

            vn++
            
        }  
        //  alert(' Obrigado por votar ' + vn);
        res.innerHTML = `Votos nulos ${vn} <br><br>`
    })

   
var candidatoList = [];

function votar() {

    var valor1 = document.getElementById('campo1');
    var valor2 = document.getElementById('campo2');
    
    var Campo1 = Number(valor1.value);
    var Campo2 = Number(valor2.value);

    var candidato = (Campo1 * 10) + Campo2;
    if (sessionStorage.getItem(candidato) !== null) {// Verifica se o número do candidado a concorrer Já existe

        //console.log(sessionStorage.getItem(candidato));

       var voto = parseInt(sessionStorage.getItem(candidato)) + 1;
       var votos = Number(voto);
        sessionStorage.setItem(candidato, votos);

    }else{// Caso o Candidado a concorrer não exista, é criado e salvo
        sessionStorage.setItem(candidato, 1);
        candidatoList.push(candidato)
    }
    //alert(candidato);

    alert(`Voto confirmado no Candidato: ${candidato}`);
    valor1.value = '';
    valor2.value = '';
}
var resultados = document.getElementById('gerar-result');

resultados.addEventListener('click', e =>{

    var res = document.getElementById('res');
    res.innerHTML = '';

    for(var i = 0; i < candidatoList.length; i++){

        let candidato = candidatoList[i];

        if (sessionStorage.getItem(candidato) !== null) {
            
            res.innerHTML += `Candidato ${candidato} Possui ${sessionStorage.getItem(candidato)} votos </br>`;
        }
    }
})

//===============================JQuery=====================================
$(()=>{
    $('#gerar-result').click( e=>{

        $('body').toggleClass('open-result')
    });
});
