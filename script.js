const botao_nao = document.getElementById('botão-não');
const botao_sim = document.getElementById('botão-sim');
const container = document.querySelector('.container');

botao_nao.addEventListener('mouseover', () => {
    const containerReacao = container.getBoundingClientRect();
    const botaoReacao = botao_nao.getBoundingClientRect();

    const maxL = containerReacao.width - botaoReacao.width;
    const maxT = containerReacao.height - botaoReacao.height;


    const newL = Math.random() * maxL;
    const newT = Math.random() * maxT;

    botao_nao.style.left = `${newL}px`;
    botao_nao.style.top = `${newT}px`;

    botao_nao.style.transform = 'none';
});

botao_sim.addEventListener('click', () => {
    alert('Aumento concedido! 🎉'); // (Corrigi "concendido" para "concedido")

    // O resto do seu código (para resetar o botão "NÃO") está perfeito!
    botao_nao.style.left = '48%';
    botao_nao.style.top = '120px';
    botao_nao.style.transform = 'translateX(-50%)';
});