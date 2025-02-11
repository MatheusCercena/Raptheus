"use strict";
/*
Menu Responsivo – Criar um menu de hambúrguer para telas menores.
Auto-sugestão na Pesquisa – Exibir sugestões enquanto o usuário digita.
Carrossel de Imagens – Exibir imagens dos rappers em um slider dinâmico - fazer isso com a loja, mas criar a loja primeiro.
Efeito de Hover Animado – Aplicar animações nos botões e imagens ao passar o mouse. ja tem.
Modo Escuro/Claro – Adicionar um botão para alternar entre os modos. vou fazer, mas nao precisa pois o site é modo escuro padrao.
Scroll Suave – Melhorar a navegação entre seções com um efeito de rolagem suave.
Popup de Login/Cadastro – Abrir uma janela modal ao clicar em "Entre" ou "Cadastro".
Sistema de Favoritos – Permitir que os usuários salvem rappers favoritos no localStorage.
Carregamento Progressivo – Carregar imagens à medida que o usuário rola a página.
Notificação de Novidades – Exibir uma mensagem destacando novas adições ao site.
Integração com API de Música – Exibir trechos ou links para músicas de cada artista.
Animação de Digitação – Criar um efeito de digitação automática em títulos ou descrições.
Filtro de Rappers – Permitir filtrar artistas por década, estilo, etc.
Confirmação de Ação – Alertas personalizados para ações como sair da conta ou excluir um favorito.
Efeito de Parallax – Criar um fundo dinâmico que se move ao rolar a página.
*/

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("loginModal");
    const loginLinks = document.querySelectorAll('a[href="paginas secundarias/login.html"]'); 
    const closeBtn = document.querySelector(".close");

    // Abre o modal ao clicar no link "Entre" ou "Cadastro"
    loginLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita o redirecionamento
            modal.style.display = "flex";
        });
    });

    // Fecha o modal ao clicar no "X"
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fecha o modal se o usuário clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
