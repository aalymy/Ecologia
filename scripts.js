// Função para aumentar o tamanho da fonte
function aumentarFonte() {
    // Selecionar todos os elementos que têm texto
    const elementosTexto = document.querySelectorAll('body, h1, h2, h3, p, li, label, button');
    
    // Definir o aumento da fonte
    elementosTexto.forEach(elemento => {
        let fontSize = window.getComputedStyle(elemento).fontSize;
        fontSize = parseFloat(fontSize); // Converter para número

        // Aumentar o tamanho da fonte em 2px
        elemento.style.fontSize = (fontSize + 2) + 'px';
    });
}
