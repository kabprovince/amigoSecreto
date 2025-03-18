// Armazenar nomes dos amigos
let amigos = [];

// Verificar se o nome do amigo não está vazio
function verificarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo.trim() === "") {
        alert('Você não pode enviar um nome vazio!');
        return false;
    }
    return true;
}

// Adicionar um amigo à lista
function adicionarAmigo() {
    if (verificarAmigo()) {
        let amigo = document.getElementById('amigo').value;

        // Verificar se o nome já está na lista
        if (amigos.includes(amigo)) {
            alert('Esse amigo já foi adicionado!');
            document.getElementById('amigo').value = "";
            return;
        }

        amigos.push(amigo);
        document.getElementById('amigo').value = "";
    }
    atualizarAmigos();
}

// Atualizar a lista de amigos na interface
function atualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sortear um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('amigoSorteado').innerHTML = "Amigo Sorteado: <strong>" + amigoSorteado + "</strong>";
    document.getElementById('amigoSorteado').style.display = 'block';
}

