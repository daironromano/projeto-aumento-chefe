
// Seleciona os elementos da página

const botao_nao = document.getElementById('botão-não');
const botao_sim = document.getElementById('botão-sim');
const container = document.querySelector('.container');

// Adiciona um "ouvinte" para o evento 'mouseover' 
botao_nao.addEventListener('mouseover', () => {

    // Pega as dimensões do container
    const containerReacao = container.getBoundingClientRect();

    // Pega as dimensões do botão
    const botaoReacao = botao_nao.getBoundingClientRect();

    // Calcula a posição máxima para onde o botão pode ir
    const maxL = containerReacao.width - botaoReacao.width;
    const maxT = containerReacao.height - botaoReacao.height;

    // Gera uma nova posição aleatória
    const newL = Math.random() * maxL;
    const newT = Math.random() * maxT;

    // Aplica nova posição ao botão
    botao_nao.style.left = `${newL}px`;
    botao_nao.style.top = `${newT}px`;

    // Remove a transformação de centralizar, já que agora a posição é aleatória
    botao_nao.style.transform = 'none';
});

// Adiciona uma função de clique ao botão "SIM"
botao_sim.addEventListener('click', () => {
    alert('Aumento concedido! 🎉');
    
    // Reseta a posição do botão "NÃO"
    botao_nao.style.left = '48%';
    botao_nao.style.top = '120px';
    botao_nao.style.transform = 'translateX(-50%)';
});