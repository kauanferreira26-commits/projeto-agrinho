// Captura todas as seções que contêm os parágrafos da redação
const secoes = document.querySelectorAll('.section-redacao');

// Função responsável por adicionar a classe de animação quando visível na tela
const animarScroll = () => {
    secoes.forEach(secao => {
        const topoSecao = secao.getBoundingClientRect().top;
        
        // Define se o elemento entrou na área visível da janela do navegador
        const visivel = topoSecao - window.innerHeight < -100;
        
        if (visivel) {
            secao.classList.add('reveal');
        }
    });
};

// Executa a função ao rolar a página
window.addEventListener('scroll', animarScroll);

// Executa a função assim que o documento carregar (caso os primeiros elementos já estejam visíveis)
window.addEventListener('DOMContentLoaded', animarScroll);
