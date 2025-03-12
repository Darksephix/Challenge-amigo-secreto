let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);

    const novoAmigoItem = document.createElement('li');
    novoAmigoItem.textContent = nomeAmigo;

    // Botão para remover o amigo
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remover";
    removeButton.classList.add('remove-button');
    removeButton.onclick = function() {
        removerAmigo(nomeAmigo, novoAmigoItem);
    };

    novoAmigoItem.appendChild(removeButton);

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.appendChild(novoAmigoItem);

    inputAmigo.value = "";
    document.getElementById('resultado').innerHTML = '';
}

function removerAmigo(nomeAmigo, elemento) {
    // Remove o nome do array
    amigos = amigos.filter(amigo => amigo !== nomeAmigo);

    // Remove o elemento da lista
    elemento.remove();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    const amigosEmbaralhados = amigos.slice().sort(() => Math.random() - 0.5);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigoAtual = amigosEmbaralhados[i];
        const amigoSeguinte = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];

        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigoAtual} tirou ${amigoSeguinte}`;
        resultado.appendChild(itemResultado);
    }
}

function limparResultado() {
    // Limpa apenas a lista de resultados
    document.getElementById('resultado').innerHTML = "";
}