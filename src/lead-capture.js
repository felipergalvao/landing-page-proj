document.addEventListener("DOMContentLoaded", function () {
    const leadForm = document.getElementById("lead-form");

    if (leadForm) { // Verifica se o elemento foi encontrado
        leadForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita o recarregamento da página

            // Captura os dados do formulário
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            // Exibe os dados no console (substitua por código de envio real)
            console.log("Nome: " + name);
            console.log("E-mail: " + email);

            // Redireciona o usuário para uma página de agradecimento após a inscrição
            window.location.href = "pagina-de-agradecimento.html";
        });
    }
});
