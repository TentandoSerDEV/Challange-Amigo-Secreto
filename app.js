let nomes = []; // Listinha para os nomes

document.addEventListener('DOMContentLoaded', (event) => {
    const nomeInput = document.getElementById('amigo');
    nomeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
});

function adicionarAmigo() { // Função para adicionar os nomes
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim();

    if (nome === '') {
        alert('Insira um nome válido');
        return;
    }

    nomes.push(nome);
    nomeInput.value = '';
    exibirNomes();
}

function exibirNomes() { // Função para exibir os nomes
    const listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

function sortearAmigo() { // Função para sortear os nomes
    if (nomes.length === 0) {
        alert('A lista está vazia, insira no mínimo um nome para continuar');
        return;
    }

    // embaralahr a lista
    for (let i = nomes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
    }

    // Selecionar o primeiro nome depois de embralhar
    const nomeSorteado = nomes[0];
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `<li>${nomeSorteado}</li>`;
}
