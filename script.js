document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade do Menu Hambúrguer (Mobile)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' no menu de navegação
        navMenu.classList.toggle('active');
    });

    // 2. Funcionalidade de Tabs para a Seção de Aulas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // mostrar o conteúdo da tab clicada
    function showTabContent(classId) {
        // Esconde todos os conteúdos
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Remove o estado 'active' de todos os botões
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        // mostra o conteúdo correspondente
        const activeContent = document.querySelector(`.tab-content[data-content="${classId}"]`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
        
        // Ativa o botão clicado
        document.querySelector(`.tab-button[data-class="${classId}"]`).classList.add('active');
    }

    // listener de clique a cada botão
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const classId = button.getAttribute('data-class');
            showTabContent(classId);
        });
    });

    // primeiro tab esteja ativo ao carregar a página
    if (tabButtons.length > 0) {
        showTabContent(tabButtons[0].getAttribute('data-class'));
    }
});