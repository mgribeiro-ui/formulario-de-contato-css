
document.addEventListener("DOMContentLoaded", function () {
    
    
    const formulario = document.querySelector("form");

    
    formulario.addEventListener("submit", function (event) {
        
        
        event.preventDefault();

       
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        
        if (nome === "" || email === "" || assunto === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios!");
            return; 
        }

        
        console.log("%c--- Novo Contato Recebido ---", "color: #e65c00; font-weight: bold;");
        console.log(`Nome: ${nome}`);
        console.log(`E-mail: ${email}`);
        console.log(`Assunto: ${assunto}`);
        console.log(`Mensagem: ${mensagem}`);

        
        window.alert (`Obrigado pelo contato, ${nome}! Sua mensagem sobre "${assunto}" foi enviada com sucesso.`);

        
        formulario.reset();
    });
});
