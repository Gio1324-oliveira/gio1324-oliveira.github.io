document.addEventListener('DOMContentLoaded', () => {
    const clickSound = new Audio('click.mp3'); // Certifique-se de que o caminho está correto

    // Função para tocar o som
    function playClickSound() {
        clickSound.currentTime = 0;
        clickSound.play()
            .then(() => console.log("Som reproduzido com sucesso"))
            .catch(error => console.error("Erro ao reproduzir o som:", error));
    }

    // Função para tratar cliques no menu e atrasar a navegação
    function handleMenuClick(event) {
        const link = event.target.getAttribute('href');
        if (link) {
            event.preventDefault(); // Impede a navegação imediata
            clickSound.currentTime = 0;
            clickSound.play()
                .then(() => setTimeout(() => window.location.href = link, 200))
                .catch(error => console.error("Erro ao reproduzir som:", error));
        }
    }

    // Adiciona evento de clique a todos os elementos clicáveis
    const clickableElements = document.querySelectorAll('a, button, li');
    clickableElements.forEach(element => {
        element.addEventListener('click', playClickSound);
    });

    // Adiciona evento específico para links do menu
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', handleMenuClick);
    });
});
