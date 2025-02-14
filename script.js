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
Filtro de Rappers – Permitir filtrar artistas por década, estilo, etc.
Confirmação de Ação – Alertas personalizados para ações como sair da conta ou excluir um favorito.
Fazer o Menu aparecer ao fazer scroll pra cima
*/

// Começo do Modal Entre

let modalEntre = document.querySelector('.modal-Entre')

function aparecer_modalEntre() {
    modalEntre.style.display = "flex";
}

function closeModalEntre() {
    modalEntre.style.display = "none";
}

window.addEventListener("click", closeModalEntre2) 

function closeModalEntre2() {
    if (event.target === modalEntre) {
        modalEntre.style.display = "none"
    }
}

// Fim do Modal Entre


// Começo do Modal Cadastro

let modalCadastro = document.querySelector('.modal-Cadastro')

function aparecer_modalCadastro() {
    document.querySelector('.modal-Cadastro').style.display = 'flex';
}

function closeModalCadastro() {
    modalCadastro.style.display = "none";
}

window.addEventListener("click", closeModalCadastro2) 

function closeModalCadastro2() {
    if (event.target === modalCadastro) {
        modalCadastro.style.display = "none"
    }
}

function aparecerEntreCadastro() {
    let entreCadastro = document.getElementById('entre-cadastro')
    if (entreCadastro.style.display === "none") {
        entreCadastro.style.display = "flex"
    } else {
        entreCadastro.style.display = "none"
    }
}

// Fim do Modal Cadastro

/* // Função genérica para abrir e fechar modais
function controleModal(modalSelector) {
    let modal = document.querySelector(modalSelector);

    // Abrir o modal
    function aparecerModal() {
        modal.style.display = "flex";
    }

    // Fechar o modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Fechar o modal quando clicar fora dele
    function closeModalClickOutside(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    // Eventos para o modal
    window.addEventListener("click", closeModalClickOutside);

    // Retorna as funções para manipular o modal
    return {
        aparecerModal,
        closeModal
    };
}

// Inicia o controle para o modal "Entre"
const modalEntre = controleModal('.modal-Entre');

// Inicia o controle para o modal "Cadastro"
const modalCadastro = controleModal('.modal-Cadastro');

// Exemplo de como abrir os modais, você pode chamar essas funções quando necessário
// Exemplo de abrir modais
modalEntre.aparecerModal();   // Para abrir o modal "Entre"
modalCadastro.aparecerModal(); // Para abrir o modal "Cadastro"

// Exemplo de como fechar os modais, você pode chamar essas funções quando necessário
// Exemplo de fechar modais
modalEntre.closeModal();      // Para fechar o modal "Entre"
modalCadastro.closeModal();   // Para fechar o modal "Cadastro"
*/
