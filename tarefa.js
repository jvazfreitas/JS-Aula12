let contadorCarrinho = 0;
let carrinho = [];

function adicionarAoCarrinho(nomeProduto) {
    carrinho = [...carrinho, nomeProduto]; // Adiciona o novo produto ao carrinho
    contadorCarrinho++;
    document.getElementById('contador-carrinho').innerText = contadorCarrinho;

    // Notificação
    const notificacao = document.getElementById('notificacao');
    notificacao.innerText = `${nomeProduto} foi adicionado ao carrinho!`;
    notificacao.style.display = "block";

    setTimeout(() => {
        notificacao.style.display = "none";
    }, 3000);
}

// Validação do formulário com operador ternário
document.querySelector('form').addEventListener('submit', function(event) {
    const { value: nome } = document.getElementById('nome');
    const { value: email } = document.getElementById('email');

    // Se os campos estiverem vazios, impede o envio e mostra a mensagem
    const mensagem = (!nome || !email) ? "Por favor, preencha todos os campos." : "Mensagem enviada com sucesso!";
    alert(mensagem);
    if (!nome || !email) event.preventDefault();
});

function filtrarProdutos() {
    const filtro = document.getElementById('filtro').value;
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const mostrar = filtro === 'todos' || produto.classList.contains(filtro);
        produto.style.display = mostrar ? 'block' : 'none';
    });
}
