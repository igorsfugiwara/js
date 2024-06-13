document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const loginBtn = document.getElementById("loginBtn");
    const loading = document.getElementById("loading");
    const registerBtn = document.getElementById("registerBtn");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Validação básica de email e senha
      if (!validateEmail(email) || password.length < 6) {
        alert("Por favor, insira um email válido e uma senha com pelo menos 6 caracteres.");
        return;
      }
  
      // Simulando um carregamento com um spinner
      loading.classList.remove("hidden");
      setTimeout(function() {
        // Aqui você pode adicionar lógica para fazer a requisição de autenticação
        // e redirecionar o usuário para a próxima página
        console.log("Autenticação bem-sucedida!");
        window.location.href = "pagina_seguinte.html";
      }, 2000); // Simula um carregamento de 2 segundos
    });
  
    registerBtn.addEventListener("click", function() {
      // Esconder o formulário de login e mostrar o formulário de registro
      loginForm.reset();
      loginForm.classList.add("hidden");
      registerBtn.classList.add("hidden");
      const registerForm = document.createElement("form");
      registerForm.innerHTML = `
        <h2>Registrar</h2>
        <div class="form-group">
          <label for="name">Nome:</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" minlength="6" required>
        </div>
        <button type="submit">Registrar</button>
      `;
      document.querySelector(".container").appendChild(registerForm);
  
      registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        // Validação básica de email e senha
        if (!validateEmail(email) || password.length < 6) {
          alert("Por favor, insira um email válido e uma senha com pelo menos 6 caracteres.");
          return;
        }
  
        // Aqui você pode adicionar lógica para fazer a requisição de registro
        // e redirecionar o usuário para a próxima página
        console.log("Registro bem-sucedido!");
        window.location.href = "pagina_seguinte.html";
      });
    });
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  