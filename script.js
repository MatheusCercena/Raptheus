"use strict";
/*
1 - Auto-sugestão na Pesquisa – Exibir sugestões enquanto o usuário digita.
2 - Carrossel de Imagens – Exibir imagens dos rappers em um slider dinâmico
3 - Modo Escuro/Claro – Adicionar um botão para alternar entre os modos. 
4 - Sistema de Favoritos – Permitir que os usuários salvem rappers favoritos no localStorage.
5 - Carregamento Progressivo – Carregar imagens à medida que o usuário rola a página.
6 - Integração com API de Música – Exibir trechos ou links para músicas de cada artista.
7 - Filtro de Rappers – Permitir filtrar artistas por década, estilo, etc.
8 - Confirmação de Ação – Alertas personalizados para ações como sair da conta ou excluir um favorito.
9 - Fazer o Menu aparecer ao fazer scroll pra cima (e remover menu fixado)
Feito:
Login/Cadastro – Abrir uma janela modal ao clicar em "Entre" ou "Cadastro".
Menu Responsivo – Criar um menu de hambúrguer para telas menores.
Scroll Suave – Melhorar a navegação entre seções com um efeito de rolagem suave.

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

// Começo do Menu hamburguer

function aparecerMenu() {
    let menu = document.querySelector('.media-query-600-nav')
    if (menu.style.display === "none") {
        Object.assign(menu.style, {
            display: "flex",
        })
    } else {
        Object.assign(menu.style, {
            display: "none"
        })
    }
}

// Fim do Menu hamburguer

// Começo do 

function aparecerPesquisa() {
    let pesquisa = document.getElementById('pesquisa_media_query')

    if (pesquisa.style.display === "none") {
        pesquisa.style.display = "block"
        pesquisa.focus()
        /*
        window.addEventListener("click", fechar_pesquisa())

        function fechar_pesquisa() {
            if (pesquisa.style.display === "block" && event.target !== pesquisa) {
                pesquisa.style.display = "none"
            }
        }
        */
    
    } else {
        pesquisa.style.display = "none"
    }

}

// Fim do 