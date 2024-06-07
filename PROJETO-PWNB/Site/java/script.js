document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a submissão padrão do formulário

        // Obter os valores dos campos do formulário
        const nome = form.querySelector('input[name="nome"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const telefone = form.querySelector('input[name="telefone"]').value.trim();
        const comentarios = form.querySelector('textarea[name="comentarios"]').value.trim();

        // Validar campos obrigatórios
        if (!nome || !email || !comentarios) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Validar o formato do e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Todas as validações foram aprovadas
        alert('Formulário enviado com sucesso!');

        // Aqui você pode adicionar código para enviar os dados do formulário para o servidor, se necessário
        // Por exemplo, usando fetch ou XMLHttpRequest

        // Redefinir o formulário
        form.reset();
    });
});