document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('section', { delay: 200, distance: '50px', origin: 'bottom' });

    let tamanhoFonte = 16;

    document.getElementById("aumentar-fonte").addEventListener("click", function () {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    });

    document.getElementById("diminuir-fonte").addEventListener("click", function () {
        if (tamanhoFonte > 12) {
            tamanhoFonte -= 2;
            document.body.style.fontSize = tamanhoFonte + "px";
        }
    });

    document.getElementById("alternar-contraste").addEventListener("click", function () {
        document.body.classList.toggle("alto-contraste");
    });
});
