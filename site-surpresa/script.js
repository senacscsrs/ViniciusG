function atualizarContador() {
    let dataNamoro = new Date(2025, 5, 14); // Junho = mês 5 (começa no 0)
    let agora = new Date();

    let diff = agora - dataNamoro;
    let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    let anos = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = (dias % 365) % 30;

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    document.getElementById("contador").textContent =
        `${anos} anos, ${meses} meses, ${diasRestantes} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 2 + 3 + "s";
    coracao.innerHTML = "💖";
    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

// iniciar assim que a página carregar
window.onload = () => {
    atualizarContador();
    setInterval(atualizarContador, 1000);
    setInterval(criarCoracao, 300);
};