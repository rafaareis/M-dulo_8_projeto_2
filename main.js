const form = document.getElementById('form-atividade');
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji celebrando" />`
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji triste" />`
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`
const notaMinima = parseFloat(prompt("Digite a nota nímima:"))
let linhas = '';
let spans = '';



form.addEventListener('submit', function(e) {
    e.preventDefault();

    spanNotaMinima();
    //atualizaSpan();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function spanNotaMinima() {
    const h2NotaMinima = document.getElementById('nota-minima');
    h2NotaMinima.innerHTML = `<h2 id="nota-minima">Nota mínima para aprovação: <span>${notaMinima}</span></h2>`;
}

/*
function spanNotaMinima() {
    const h2NotaMinima = document.getElementById('nota-minima');
    let span = `<h2 id="nota-minima">Nota mínima para aprovação: <span>${notaMinima}</span></h2>`;
    console.log(notaMinima);
    spans += span;
    console.log(spans);
}

function atualizaSpan() {
    const divs = document.querySelector('#nota-minima');
    console.log(divs);
    divs.innerHTML = spans;
}
*/



function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ?  imgAprovado : imgReprovado}</td>`
        linha += '</tr>';
    
        linhas += linha; 

    }

    console.log(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`)

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    console.log(mediaFinal);
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}