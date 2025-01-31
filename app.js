document.addEventListener("DOMContentLoaded", () => {
    // Passo 1: Criar um array para armazenar os nomes
    let nomes = [];
  
    const nomeInput = document.getElementById("amigo");
    const listaNomes = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
  
    // Passo 2: Implementar uma função para agregar amigos
    function adicionarAmigo() {
      const nome = nomeInput.value.trim();
      if (!nome) {
        alert("Por favor, insira um nome válido.");
        return;
      }
      nomes.push(nome);
      nomeInput.value = "";
      atualizarLista();
    }
  
    // Passo 3: Implementar uma função para sortear amigos
    function sortearAmigo() {
      if (nomes.length === 0) {
        alert("Adicione ao menos um nome antes de sortear.");
        return;
      }
      const indiceSorteado = Math.floor(Math.random() * nomes.length);
      resultado.innerHTML = `<li>Sorteado: ${nomes[indiceSorteado]}</li>`;
    }
  
    function atualizarLista() {
      listaNomes.innerHTML = "";
      nomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
      });
    }
  
    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
  });
  