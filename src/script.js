// script.js

// Função para rastrear o clique no botão CTA
function trackCTAClick() {
    // Aqui, você pode adicionar o código para rastrear o clique no botão CTA.
    // Isso pode incluir o envio de dados para uma ferramenta de análise ou
    // redirecionar o usuário para a página de agendamento.
    console.log('O botão CTA foi clicado.');
    // Exemplo de redirecionamento:
    // window.location.href = 'link_para_agendamento.html';
}

// Event listener para o botão CTA
const ctaButton = document.querySelector('.btn-cta');
if (ctaButton) {
    ctaButton.addEventListener('click', trackCTAClick);
}
