// Extraindo conteúdo de cinco tags diferentes
const titulo = document.getElementById('titulo').textContent;
const paragrafo = document.getElementById('paragrafo').textContent;
const listaItens = document.querySelectorAll('#lista li');
const conteudoHtml = document.getElementById('conteudo-html').innerHTML;
const formulario = document.getElementById('meu-formulario');

console.log('Conteúdo da tag título:', titulo);
console.log('Conteúdo da tag paragrafo:', paragrafo);
console.log('Itens da lista:');
listaItens.forEach(item => {
    console.log(item.textContent);
});
console.log('Conteúdo da tag conteudo-html:', conteudoHtml);

// Aplicando conteúdo em três tags com INNER HTML
document.getElementById('conteudo-html').innerHTML = '<p>Conteúdo inserido com JavaScript.</p>';

// Criando um validador de formulários
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Formulário enviado com sucesso!');
    }
});

// Criando dois botões com eventos
document.getElementById('botao1').addEventListener('click', function () {
    alert('Botão 1 clicado!');
});

document.getElementById('botao2').addEventListener('click', function () {
    alert('Botão 2 clicado!');
});
