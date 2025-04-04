function moverBotao(botao) {
    let maxX = window.innerWidth - botao.offsetWidth - 10;
    let maxY = window.innerHeight - botao.offsetHeight - 10;
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
    x = Math.max(10, Math.min(x, maxX - 10));
    y = Math.max(10, Math.min(y, maxY - 10));
    botao.style.position = "absolute";
    botao.style.left = `${x}px`;
    botao.style.top = `${y}px`;
}

function aumentarSim() {
    let botaoSim = document.getElementById("yesButton");
    let botaoNao = document.getElementById("noButton");
    let currentSize = window.getComputedStyle(botaoSim).getPropertyValue("font-size");
    let newSize = parseFloat(currentSize) * 1.2;
    
    botaoSim.style.fontSize = `${newSize}px`;
    botaoSim.style.padding = `${newSize / 2.5}px ${newSize}px`;
    
    if (newSize > window.innerHeight / 2) {
        botaoSim.style.width = "100vw";
        botaoSim.style.height = "100vh";
        botaoSim.style.fontSize = "80px";
        botaoSim.innerText = "ÓBVIO QUE SIM! ❤️";
        document.body.style.backgroundColor = "#ff4081";
        botaoNao.style.display = "none";
    }
}
