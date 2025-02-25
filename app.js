let amigosLista = []; 

function adicionarAmigo() {
    let campoTexto = document.getElementById("amigo");
    let nome = campoTexto.value.trim(); 
    
    
    if (!nome || !/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(nome)) {
        alert("Por favor, insira um nome.!");
        return;
    }//Verifica se esta vazia e se é mesmo um nome

    
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase(); // Formata para title

    
    amigosLista.push(nome);
    atualizarLista();
    campoTexto.value = ""; 
}

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; 
    
    amigosLista.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        item.style.color = gerarCor(); 
        ul.appendChild(item);
    }); // vare a lista e coloca um li
}

function gerarCor() {
    let hex = "#";
    let caracteres = "0123456789ABCDEF";
    
    for (let i = 0; i < 6; i++) {
        hex += caracteres[Math.floor(Math.random() * 16)];
    }
    
    return hex;
} // rega uma for aleatoria a cada carrgamento da pagina

function sortearAmigo() {
    if (amigosLista.length === 0) {
        document.getElementById("resultado").innerHTML = "<li>Adiciona amigos antes de sortear!</li>";
        return;
    } // verifica se esta vazia e mesmo a frase Adiciona amigos antes de sortear

    let indice = Math.floor(Math.random() * amigosLista.length);
    let sorteado = amigosLista.splice(indice, 1)[0]; 
    document.getElementById("resultado").innerHTML = `<li>${sorteado}</li>`;
    atualizarLista();
}